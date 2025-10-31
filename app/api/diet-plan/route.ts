import { NextRequest, NextResponse } from "next/server"
import { validateDietProfile } from "@/lib/security"

const GEMINI_API_KEY = process.env.GEMINI_API_KEY
const GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent"

const OPENAI_API_KEY = process.env.OPENAI_API_KEY
const OPENAI_BASE_URL = "https://api.openai.com/v1"

type DietPlannerProfile = {
  age?: string
  gender?: string
  weight?: string
  height?: string
  activityLevel?: string
  dietaryPreferences?: string
  goals?: string[]
  mealsPerDay?: number
  allergies?: string[]
  healthConditions?: string[]
  [key: string]: unknown
}

type Meal = {
  name: string
  time: string
  calories: number
  protein: number
  carbs: number
  fats: number
  fiber: number
  ingredients: string[]
  instructions: string[]
  prepTime: number
  tags: string[]
  benefits: string[]
}

type MealPlan = {
  meals: Meal[]
  tips: string[]
  hydrationReminders: string[]
}

const DEFAULT_TIPS = [
  "Begin the day with water and a protein-forward breakfast",
  "Fill half your plate with colorful fruits or vegetables",
  "Pair meals with a five minute breathing break to support digestion",
  "Write down how each meal made you feel to refine future plans",
  "Wind down screens 60 minutes before sleep to support recovery"
]

const DEFAULT_HYDRATION = [
  "8:00 AM - 500 ml water before breakfast",
  "11:00 AM - Refill your bottle while you stretch",
  "2:00 PM - Sip water alongside lunch",
  "5:00 PM - Herbal tea or infused water for a boost",
  "8:30 PM - Final glass of water to round out the day"
]

const FALLBACK_MEALS: Meal[] = [
  {
    name: "Protein-Powered Breakfast Bowl",
    time: "7:30 AM",
    calories: 0,
    protein: 0,
    carbs: 0,
    fats: 0,
    fiber: 0,
    ingredients: [
      "Greek yogurt or plant-based alternative",
      "Seasonal berries",
      "Rolled oats or low-sugar granola",
      "Chia and flax seeds",
      "Honey or maple drizzle"
    ],
    instructions: [
      "Combine yogurt and oats as a base",
      "Layer with berries and seeds",
      "Finish with a light drizzle of honey or maple"
    ],
    prepTime: 5,
    tags: ["High-Protein", "Grab-and-Go", "Gut-Friendly"],
    benefits: [
      "Supports muscle repair after sleep",
      "Provides steady energy for morning classes",
      "Delivers prebiotics for gut health"
    ]
  },
  {
    name: "Midday Focus Plate",
    time: "12:30 PM",
    calories: 0,
    protein: 0,
    carbs: 0,
    fats: 0,
    fiber: 0,
    ingredients: [
      "Grilled chicken or tofu",
      "Quinoa or brown rice",
      "Roasted mixed vegetables",
      "Avocado slices",
      "Citrus vinaigrette"
    ],
    instructions: [
      "Cook whole grains and set aside",
      "Sear protein with simple spices",
      "Roast vegetables until golden",
      "Assemble bowl and top with avocado and dressing"
    ],
    prepTime: 25,
    tags: ["Balanced", "Meal-Prep Friendly", "Gluten-Aware"],
    benefits: [
      "Complex carbs keep energy stable",
      "Healthy fats support hormone balance",
      "Veggie diversity boosts micronutrients"
    ]
  },
  {
    name: "Restorative Evening Plate",
    time: "6:30 PM",
    calories: 0,
    protein: 0,
    carbs: 0,
    fats: 0,
    fiber: 0,
    ingredients: [
      "Salmon or lentil patties",
      "Sweet potato mash",
      "Steamed leafy greens",
      "Toasted pumpkin seeds",
      "Lemon-herb dressing"
    ],
    instructions: [
      "Bake salmon or sear patties",
      "Steam sweet potatoes and mash with olive oil",
      "Lightly steam greens and finish with lemon",
      "Top with toasted seeds for crunch"
    ],
    prepTime: 30,
    tags: ["Anti-Inflammatory", "Evening", "Brain Support"],
    benefits: [
      "Omega-3s calm inflammation after a long day",
      "Complex carbs support serotonin production",
      "Magnesium-rich greens encourage quality sleep"
    ]
  },
  {
    name: "Mindful Snack Pause",
    time: "3:30 PM",
    calories: 0,
    protein: 0,
    carbs: 0,
    fats: 0,
    fiber: 0,
    ingredients: [
      "Apple slices",
      "Almond or sunflower butter",
      "Cinnamon sprinkle",
      "Dark chocolate square"
    ],
    instructions: [
      "Slice fruit just before eating",
      "Pair with nut butter for sustained energy",
      "Enjoy dark chocolate mindfully"
    ],
    prepTime: 3,
    tags: ["Quick", "Portable", "Study Break"],
    benefits: [
      "Combines fibre and protein to prevent energy crashes",
      "Polyphenols support focus",
      "Encourages a mindful moment between commitments"
    ]
  }
]

function safeNumber(value: unknown, fallback: number): number {
  const parsed = typeof value === "number" ? value : parseFloat(String(value))
  return Number.isFinite(parsed) ? parsed : fallback
}

function calculateNutritionGoals(profile: DietPlannerProfile) {
  const weight = safeNumber(profile.weight, 68)
  const height = safeNumber(profile.height, 170)
  const age = safeNumber(profile.age, 24)
  const gender = (profile.gender ?? "female").toString().toLowerCase()

  const activityMultipliers: Record<string, number> = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    "very-active": 1.9
  }

  const base =
    gender === "male"
      ? 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age
      : 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age

  let tdee = base * (activityMultipliers[profile.activityLevel ?? "moderate"] ?? 1.5)

  if (profile.goals?.includes("weight-loss")) {
    tdee -= 350
  } else if (profile.goals?.includes("muscle-gain")) {
    tdee += 250
  }

  const proteinRatio = profile.goals?.includes("muscle-gain") ? 0.3 : 0.25
  const fatRatio = 0.25
  const carbRatio = 1 - proteinRatio - fatRatio

  return {
    calories: Math.max(1500, Math.round(tdee)),
    protein: Math.max(60, Math.round((tdee * proteinRatio) / 4)),
    carbs: Math.max(130, Math.round((tdee * carbRatio) / 4)),
    fats: Math.max(40, Math.round((tdee * fatRatio) / 9)),
    fiber: 28,
    water: Math.round(weight * 0.033 * 1000)
  }
}

function distributeMacros(goals: ReturnType<typeof calculateNutritionGoals>, mealsPerDay: number) {
  const portions = Math.max(3, Math.min(mealsPerDay || 3, 5))
  return {
    portions,
    caloriesPerMeal: Math.round(goals.calories / portions),
    proteinPerMeal: Math.round(goals.protein / portions),
    carbsPerMeal: Math.round(goals.carbs / portions),
    fatsPerMeal: Math.round(goals.fats / portions),
    fiberPerMeal: Math.max(4, Math.round(goals.fiber / portions))
  }
}

function buildFallbackPlan(profile: DietPlannerProfile, dayOfWeek: string): MealPlan {
  const goals = calculateNutritionGoals(profile)
  const { portions, caloriesPerMeal, proteinPerMeal, carbsPerMeal, fatsPerMeal, fiberPerMeal } =
    distributeMacros(goals, profile.mealsPerDay ?? 3)

  const meals = Array.from({ length: portions }).map((_, index) => {
    const template = FALLBACK_MEALS[index % FALLBACK_MEALS.length]
    return {
      ...template,
      calories: caloriesPerMeal,
      protein: proteinPerMeal,
      carbs: carbsPerMeal,
      fats: fatsPerMeal,
      fiber: fiberPerMeal
    }
  })

  return {
    meals,
    tips: DEFAULT_TIPS,
    hydrationReminders: DEFAULT_HYDRATION.map((entry) => `${entry} - ${dayOfWeek}`)
  }
}

function extractJsonFromText(text?: string | null): MealPlan | null {
  if (!text) return null
  const cleaned = text
    .trim()
    .replace(/^```json/i, "")
    .replace(/^```/i, "")
    .replace(/```$/, "")
    .trim()

  try {
    const parsed = JSON.parse(cleaned) as { meals?: Meal[]; tips?: string[]; hydrationReminders?: string[] }
    if (!parsed.meals || parsed.meals.length === 0) {
      return null
    }
    return {
      meals: parsed.meals,
      tips: parsed.tips && parsed.tips.length ? parsed.tips : DEFAULT_TIPS,
      hydrationReminders:
        parsed.hydrationReminders && parsed.hydrationReminders.length
          ? parsed.hydrationReminders
          : DEFAULT_HYDRATION
    }
  } catch (error) {
    console.warn("Failed to parse meal plan JSON", error)
    return null
  }
}

async function callGemini(profile: DietPlannerProfile, dayOfWeek: string): Promise<MealPlan | null> {
  if (!GEMINI_API_KEY) return null

  const prompt = `You are a registered dietitian helping a college student. Build a personalised meal plan for ${dayOfWeek}.
  Guidelines:
  - Respect dietary preferences: ${JSON.stringify(profile.dietaryPreferences ?? "none provided")}.
  - Account for goals: ${JSON.stringify(profile.goals ?? [])}.
  - Output valid JSON matching this shape:
    {
      "meals": [
        {
          "name": string,
          "time": string,
          "calories": number,
          "protein": number,
          "carbs": number,
          "fats": number,
          "fiber": number,
          "ingredients": string[],
          "instructions": string[],
          "prepTime": number,
          "tags": string[],
          "benefits": string[]
        }
      ],
      "tips": string[],
      "hydrationReminders": string[]
    }
  - Provide at least ${Math.max(3, Math.min(profile.mealsPerDay ?? 3, 5))} meals with macro estimates (integers).
  - Keep messaging uplifting and student-friendly.
  - Return ONLY JSON without markdown fences.`

  const response = await fetch(`${GEMINI_BASE_URL}?key=${GEMINI_API_KEY}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: prompt
            }
          ]
        }
      ]
    })
  })

  if (!response.ok) {
    throw new Error(`Gemini API error: ${response.status} ${response.statusText}`)
  }

  const data = await response.json()
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text as string | undefined
  return extractJsonFromText(text)
}

async function callOpenAI(profile: DietPlannerProfile, dayOfWeek: string): Promise<MealPlan | null> {
  if (!OPENAI_API_KEY) return null

  const prompt = `You are a registered dietitian building a one-day meal plan for a college student.
Return ONLY JSON with this exact shape (no markdown):
{
  "meals": [
    {
      "name": string,
      "time": string,
      "calories": number,
      "protein": number,
      "carbs": number,
      "fats": number,
      "fiber": number,
      "ingredients": string[],
      "instructions": string[],
      "prepTime": number,
      "tags": string[],
      "benefits": string[]
    }
  ],
  "tips": string[],
  "hydrationReminders": string[]
}
Student profile: ${JSON.stringify(profile)}
Day requested: ${dayOfWeek}
Provide supportive, realistic meals that fit a student schedule and estimate macros as whole numbers.`

  const response = await fetch(`${OPENAI_BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You respond with pure JSON. No markdown." },
        { role: "user", content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 1200
    })
  })

  if (!response.ok) {
    throw new Error(`OpenAI API error: ${response.status} ${response.statusText}`)
  }

  const data = await response.json()
  const text = data?.choices?.[0]?.message?.content as string | undefined
  return extractJsonFromText(text)
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    let body
    try {
      body = await request.json()
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid request body" },
        { status: 400 }
      )
    }

    const profile: DietPlannerProfile | undefined = body?.profile
    const dayOfWeek: string | undefined = body?.dayOfWeek

    // Validate required fields
    if (!profile || !dayOfWeek) {
      return NextResponse.json(
        { success: false, error: "Profile and dayOfWeek are required" },
        { status: 400 }
      )
    }

    // Validate profile structure
    const profileValidation = validateDietProfile(profile)
    if (!profileValidation.valid) {
      return NextResponse.json(
        { success: false, error: profileValidation.error },
        { status: 400 }
      )
    }

    // Validate dayOfWeek
    const validDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    if (typeof dayOfWeek !== 'string' || !validDays.includes(dayOfWeek)) {
      return NextResponse.json(
        { success: false, error: "Invalid day of week" },
        { status: 400 }
      )
    }

    let mealPlan: MealPlan | null = null

    try {
      mealPlan = await callGemini(profile, dayOfWeek)
    } catch (error) {
      console.warn("Gemini diet plan generation failed", error)
    }

    if (!mealPlan) {
      try {
        mealPlan = await callOpenAI(profile, dayOfWeek)
      } catch (error) {
        console.warn("OpenAI diet plan generation failed", error)
      }
    }

    if (!mealPlan) {
      mealPlan = buildFallbackPlan(profile, dayOfWeek)
    }

    return NextResponse.json({ success: true, mealPlan })
  } catch (error) {
    console.error("Diet plan API error", error)
    return NextResponse.json(
      {
        success: false,
        error: "Unable to generate diet plan. Please try again in a moment."
      },
      { status: 500 }
    )
  }
}
