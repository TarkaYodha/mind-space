'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { Sparkles, Calendar, Users, Target, Apple, Flame, Activity, ChefHat, Clock, TrendingUp, Heart, Droplet, Zap, Brain, Moon, Sun, UtensilsCrossed, AlertCircle, Download, Share2, RefreshCw } from 'lucide-react';

interface UserProfile {
  age: string;
  gender: string;
  weight: string;
  height: string;
  activityLevel: string;
  dietaryPreferences: string;
  goals: string[];
  allergies: string[];
  healthConditions: string[];
  mealsPerDay: number;
  budget: string;
  cookingSkill: string;
  cuisinePreferences: string[];
}

interface NutritionGoals {
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  fiber: number;
  water: number;
}

interface Meal {
  name: string;
  time: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  fiber: number;
  ingredients: string[];
  instructions: string[];
  prepTime: number;
  tags: string[];
  benefits: string[];
}

interface DietPlan {
  day: string;
  meals: Meal[];
  totalNutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
    fiber: number;
  };
  tips: string[];
  hydrationReminders: string[];
}

export function DietPlannerInterface() {
  const [step, setStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [profile, setProfile] = useState<UserProfile>({
    age: '',
    gender: '',
    weight: '',
    height: '',
    activityLevel: '',
    dietaryPreferences: '',
    goals: [],
    allergies: [],
    healthConditions: [],
    mealsPerDay: 3,
    budget: 'moderate',
    cookingSkill: 'intermediate',
    cuisinePreferences: [],
  });
  const [nutritionGoals, setNutritionGoals] = useState<NutritionGoals | null>(null);
  const [weeklyPlan, setWeeklyPlan] = useState<DietPlan[]>([]);
  const [selectedDay, setSelectedDay] = useState(0);
  const [generationProgress, setGenerationProgress] = useState(0);
  const { toast } = useToast();

  const calculateNutritionGoals = (): NutritionGoals => {
    // Harris-Benedict Equation for BMR
    const weight = parseFloat(profile.weight);
    const height = parseFloat(profile.height);
    const age = parseFloat(profile.age);
    
    let bmr = 0;
    if (profile.gender === 'male') {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    // Activity multiplier
    const activityMultipliers: { [key: string]: number } = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      'very-active': 1.9,
    };

    let tdee = bmr * (activityMultipliers[profile.activityLevel] || 1.5);

    // Adjust for goals
    if (profile.goals.includes('weight-loss')) {
      tdee -= 500; // 500 calorie deficit
    } else if (profile.goals.includes('muscle-gain')) {
      tdee += 300; // 300 calorie surplus
    }

    // Macronutrient distribution
    const proteinRatio = profile.goals.includes('muscle-gain') ? 0.30 : 0.25;
    const fatRatio = 0.25;
    const carbRatio = 1 - proteinRatio - fatRatio;

    return {
      calories: Math.round(tdee),
      protein: Math.round((tdee * proteinRatio) / 4),
      carbs: Math.round((tdee * carbRatio) / 4),
      fats: Math.round((tdee * fatRatio) / 9),
      fiber: 30,
      water: Math.round(weight * 0.033 * 1000), // ml
    };
  };

  const generateAIDietPlan = async () => {
    setIsGenerating(true);

    try {
      // Calculate nutrition goals
      const goals = calculateNutritionGoals();
      setNutritionGoals(goals);

      // Show loading message
      toast({
        title: '🤖 AI is crafting your meal plan...',
        description: 'This may take 30-60 seconds. Creating personalized recipes just for you!',
      });

      // Generate meal plans for each day of the week using Google Gemini AI
      const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      const weekPlan: DietPlan[] = [];

      for (let i = 0; i < days.length; i++) {
        const day = days[i];
        setGenerationProgress(Math.round(((i + 1) / days.length) * 100));
        
        try {
          const response = await fetch('/api/diet-plan', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              profile: {
                ...profile,
                calorieTarget: goals.calories,
                proteinTarget: goals.protein,
                carbsTarget: goals.carbs,
                fatsTarget: goals.fats,
              },
              dayOfWeek: day,
            }),
          });

          if (!response.ok) {
            throw new Error(`Failed to generate ${day} plan`);
          }

          const data = await response.json();
          
          if (data.success && data.mealPlan) {
            // Calculate total nutrition from AI-generated meals
            const totalNutrition = data.mealPlan.meals.reduce(
              (acc: any, meal: Meal) => ({
                calories: acc.calories + meal.calories,
                protein: acc.protein + meal.protein,
                carbs: acc.carbs + meal.carbs,
                fats: acc.fats + meal.fats,
                fiber: acc.fiber + meal.fiber,
              }),
              { calories: 0, protein: 0, carbs: 0, fats: 0, fiber: 0 }
            );

            weekPlan.push({
              day,
              meals: data.mealPlan.meals,
              totalNutrition,
              tips: data.mealPlan.tips || generateDailyTips(profile.goals),
              hydrationReminders: data.mealPlan.hydrationReminders || [
                '8:00 AM - Start your day with 500ml water',
                '12:00 PM - Drink water before lunch',
                '3:00 PM - Afternoon hydration break',
                '6:00 PM - Pre-dinner water',
                '9:00 PM - Evening hydration',
              ],
            });
          } else {
            // Fallback to pre-programmed meals if AI fails for this day
            console.warn(`AI generation failed for ${day}, using fallback`);
            const fallbackPlan = generateWeeklyMeals(goals)[0];
            weekPlan.push({ ...fallbackPlan, day });
          }
        } catch (dayError) {
          console.error(`Error generating ${day}:`, dayError);
          // Fallback to pre-programmed meals for this day
          const fallbackPlan = generateWeeklyMeals(goals)[0];
          weekPlan.push({ ...fallbackPlan, day });
        }
      }

      setWeeklyPlan(weekPlan);

      toast({
        title: '🎉 Your AI Diet Plan is Ready!',
        description: 'Personalized nutrition plan generated by AI based on your unique profile.',
      });

      setStep(3);
    } catch (error) {
      console.error('Diet plan generation error:', error);
      toast({
        title: 'Generation Failed',
        description: 'Please try again or adjust your preferences.',
        variant: 'destructive',
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const generateWeeklyMeals = (goals: NutritionGoals): DietPlan[] => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    return days.map((day) => ({
      day,
      meals: generateDayMeals(goals),
      totalNutrition: {
        calories: goals.calories,
        protein: goals.protein,
        carbs: goals.carbs,
        fats: goals.fats,
        fiber: goals.fiber,
      },
      tips: generateDailyTips(profile.goals),
      hydrationReminders: [
        '8:00 AM - Start your day with 500ml water',
        '12:00 PM - Drink water before lunch',
        '3:00 PM - Afternoon hydration break',
        '6:00 PM - Pre-dinner water',
        '9:00 PM - Evening hydration',
      ],
    }));
  };

  const generateDayMeals = (goals: NutritionGoals): Meal[] => {
    const caloriesPerMeal = goals.calories / profile.mealsPerDay;
    const proteinPerMeal = goals.protein / profile.mealsPerDay;
    const carbsPerMeal = goals.carbs / profile.mealsPerDay;
    const fatsPerMeal = goals.fats / profile.mealsPerDay;

    const mealDatabase = getMealDatabase(profile);
    const meals: Meal[] = [];

    const mealTimes = ['Breakfast', 'Morning Snack', 'Lunch', 'Afternoon Snack', 'Dinner', 'Evening Snack'];
    
    for (let i = 0; i < profile.mealsPerDay; i++) {
      const mealType = mealTimes[i] || `Meal ${i + 1}`;
      const mealOptions = mealDatabase[mealType as keyof typeof mealDatabase] || mealDatabase['Lunch'];
      const selectedMeal = mealOptions[Math.floor(Math.random() * mealOptions.length)];
      
      meals.push({
        ...selectedMeal,
        calories: Math.round(caloriesPerMeal * (selectedMeal.calories / 100)),
        protein: Math.round(proteinPerMeal * (selectedMeal.protein / 100)),
        carbs: Math.round(carbsPerMeal * (selectedMeal.carbs / 100)),
        fats: Math.round(fatsPerMeal * (selectedMeal.fats / 100)),
      });
    }

    return meals;
  };

  const getMealDatabase = (profile: UserProfile) => {
    const isVegetarian = profile.dietaryPreferences === 'vegetarian';
    const isVegan = profile.dietaryPreferences === 'vegan';
    const isKeto = profile.dietaryPreferences === 'keto';
    const isPaleo = profile.dietaryPreferences === 'paleo';

    return {
      Breakfast: [
        {
          name: isVegan ? 'Vegan Protein Smoothie Bowl' : 'Greek Yogurt Parfait with Berries',
          time: '7:30 AM',
          calories: 100,
          protein: 100,
          carbs: 100,
          fats: 100,
          fiber: 8,
          ingredients: isVegan 
            ? ['Banana', 'Mixed berries', 'Almond milk', 'Chia seeds', 'Hemp protein', 'Granola', 'Almond butter']
            : ['Greek yogurt (200g)', 'Mixed berries (100g)', 'Granola (30g)', 'Honey (1 tbsp)', 'Almonds (15g)', 'Chia seeds'],
          instructions: [
            'Blend frozen banana with almond milk and protein powder',
            'Pour into bowl and top with fresh berries',
            'Add chia seeds, granola, and almond butter',
            'Sprinkle with hemp seeds for extra protein',
          ],
          prepTime: 10,
          tags: ['High-Protein', 'Antioxidant-Rich', 'Energy Boost'],
          benefits: [
            'Probiotics for gut health',
            'Antioxidants from berries',
            'Sustained energy release',
            'Rich in omega-3 fatty acids',
          ],
        },
        {
          name: isKeto ? 'Keto Avocado Egg Bowl' : 'Overnight Oats with Nuts',
          time: '7:30 AM',
          calories: 100,
          protein: 100,
          carbs: 100,
          fats: 100,
          fiber: 10,
          ingredients: isKeto
            ? ['Avocado', 'Eggs (2)', 'Bacon (2 slices)', 'Cherry tomatoes', 'Feta cheese', 'Olive oil', 'Spinach']
            : ['Rolled oats (50g)', 'Almond milk (200ml)', 'Banana', 'Walnuts (20g)', 'Cinnamon', 'Maple syrup', 'Blueberries'],
          instructions: [
            'Prepare the night before by mixing oats with almond milk',
            'Add cinnamon and maple syrup',
            'Refrigerate overnight',
            'In the morning, top with banana, walnuts, and blueberries',
          ],
          prepTime: 5,
          tags: ['Make-Ahead', 'Fiber-Rich', 'Heart-Healthy'],
          benefits: [
            'Promotes heart health',
            'Sustained energy throughout morning',
            'Rich in omega-3 from walnuts',
            'Supports digestive health',
          ],
        },
        {
          name: 'Protein Pancakes with Berries',
          time: '8:00 AM',
          calories: 100,
          protein: 100,
          carbs: 100,
          fats: 100,
          fiber: 6,
          ingredients: ['Banana', 'Eggs (2)', 'Protein powder (30g)', 'Oats (40g)', 'Blueberries', 'Maple syrup', 'Greek yogurt'],
          instructions: [
            'Blend banana, eggs, protein powder, and oats',
            'Cook on non-stick pan until golden',
            'Stack pancakes and top with berries',
            'Add a dollop of Greek yogurt and drizzle with maple syrup',
          ],
          prepTime: 15,
          tags: ['High-Protein', 'Muscle-Building', 'Satisfying'],
          benefits: [
            'Excellent protein for muscle recovery',
            'Complex carbs for energy',
            'Antioxidants from berries',
            'Keeps you full until lunch',
          ],
        },
      ],
      'Morning Snack': [
        {
          name: 'Apple with Almond Butter',
          time: '10:30 AM',
          calories: 100,
          protein: 100,
          carbs: 100,
          fats: 100,
          fiber: 5,
          ingredients: ['Apple (1 medium)', 'Almond butter (2 tbsp)', 'Cinnamon'],
          instructions: [
            'Slice apple into wedges',
            'Serve with almond butter for dipping',
            'Sprinkle with cinnamon for added flavor',
          ],
          prepTime: 3,
          tags: ['Quick', 'Portable', 'Natural'],
          benefits: [
            'Natural energy boost',
            'Healthy fats from almonds',
            'Fiber for satiety',
            'Vitamins and minerals',
          ],
        },
        {
          name: isVegan ? 'Hummus with Veggie Sticks' : 'Cottage Cheese with Fruit',
          time: '10:30 AM',
          calories: 100,
          protein: 100,
          carbs: 100,
          fats: 100,
          fiber: 4,
          ingredients: isVegan
            ? ['Hummus (100g)', 'Carrots', 'Cucumber', 'Bell peppers', 'Cherry tomatoes']
            : ['Cottage cheese (150g)', 'Pineapple chunks', 'Walnuts (10g)', 'Honey'],
          instructions: [
            'Portion hummus into a small container',
            'Cut vegetables into sticks',
            'Pack together for a portable snack',
          ],
          prepTime: 5,
          tags: ['Protein-Rich', 'Hydrating', 'Low-Calorie'],
          benefits: [
            'High-quality protein',
            'Hydrating vegetables',
            'Satisfies mid-morning hunger',
            'Rich in vitamins',
          ],
        },
      ],
      Lunch: [
        {
          name: isVegan ? 'Buddha Bowl with Tahini Dressing' : 'Grilled Chicken Quinoa Bowl',
          time: '12:30 PM',
          calories: 100,
          protein: 100,
          carbs: 100,
          fats: 100,
          fiber: 12,
          ingredients: isVegan
            ? ['Quinoa (80g)', 'Chickpeas (150g)', 'Sweet potato', 'Kale', 'Avocado', 'Tahini', 'Lemon', 'Pumpkin seeds']
            : ['Grilled chicken breast (150g)', 'Quinoa (80g)', 'Roasted vegetables', 'Avocado (1/2)', 'Feta cheese', 'Olive oil', 'Lemon'],
          instructions: [
            'Cook quinoa according to package directions',
            'Grill chicken breast with herbs and spices',
            'Roast vegetables (bell peppers, zucchini, cherry tomatoes)',
            'Assemble bowl with quinoa, chicken, vegetables, and avocado',
            'Top with crumbled feta and lemon-olive oil dressing',
          ],
          prepTime: 25,
          tags: ['Balanced', 'Nutrient-Dense', 'Meal-Prep Friendly'],
          benefits: [
            'Complete protein from chicken',
            'Complex carbs from quinoa',
            'Healthy fats from avocado',
            'Rich in vitamins and minerals',
          ],
        },
        {
          name: 'Salmon Salad with Mixed Greens',
          time: '1:00 PM',
          calories: 100,
          protein: 100,
          carbs: 100,
          fats: 100,
          fiber: 8,
          ingredients: ['Salmon fillet (150g)', 'Mixed greens', 'Cherry tomatoes', 'Cucumber', 'Red onion', 'Walnuts', 'Balsamic vinaigrette'],
          instructions: [
            'Bake or pan-sear salmon with lemon and herbs',
            'Prepare salad with mixed greens, tomatoes, cucumber',
            'Add sliced red onion and walnuts',
            'Top with salmon and drizzle with balsamic vinaigrette',
          ],
          prepTime: 20,
          tags: ['Omega-3 Rich', 'Anti-Inflammatory', 'Brain-Boosting'],
          benefits: [
            'High in omega-3 fatty acids',
            'Supports brain health',
            'Anti-inflammatory properties',
            'Rich in vitamin D',
          ],
        },
        {
          name: isVegetarian ? 'Lentil Curry with Brown Rice' : 'Turkey and Sweet Potato Bowl',
          time: '12:30 PM',
          calories: 100,
          protein: 100,
          carbs: 100,
          fats: 100,
          fiber: 14,
          ingredients: isVegetarian
            ? ['Red lentils (100g)', 'Brown rice (80g)', 'Coconut milk', 'Curry spices', 'Spinach', 'Tomatoes', 'Onion', 'Garlic']
            : ['Ground turkey (150g)', 'Sweet potato', 'Broccoli', 'Brown rice', 'Garlic', 'Ginger', 'Soy sauce'],
          instructions: [
            'Cook lentils with curry spices, coconut milk, and vegetables',
            'Prepare brown rice',
            'Add fresh spinach at the end',
            'Serve curry over rice',
          ],
          prepTime: 30,
          tags: ['Plant-Based Protein', 'Warming', 'Satisfying'],
          benefits: [
            'Excellent plant-based protein',
            'Rich in iron and folate',
            'Anti-inflammatory spices',
            'Supports digestive health',
          ],
        },
      ],
      'Afternoon Snack': [
        {
          name: 'Mixed Nuts and Dark Chocolate',
          time: '3:30 PM',
          calories: 100,
          protein: 100,
          carbs: 100,
          fats: 100,
          fiber: 3,
          ingredients: ['Almonds (15g)', 'Walnuts (15g)', 'Dark chocolate 70% (20g)'],
          instructions: [
            'Portion nuts and dark chocolate',
            'Enjoy as an afternoon energy boost',
          ],
          prepTime: 2,
          tags: ['Energy-Boosting', 'Antioxidant-Rich', 'Brain Food'],
          benefits: [
            'Healthy fats for brain function',
            'Antioxidants from dark chocolate',
            'Sustained energy',
            'Mood-boosting properties',
          ],
        },
        {
          name: isVegan ? 'Energy Balls' : 'Protein Smoothie',
          time: '3:30 PM',
          calories: 100,
          protein: 100,
          carbs: 100,
          fats: 100,
          fiber: 5,
          ingredients: isVegan
            ? ['Dates', 'Oats', 'Almond butter', 'Chia seeds', 'Cocoa powder', 'Coconut flakes']
            : ['Protein powder', 'Banana', 'Spinach', 'Almond milk', 'Peanut butter', 'Ice'],
          instructions: [
            'Blend all ingredients until smooth',
            'Add ice for desired consistency',
            'Enjoy immediately for best taste',
          ],
          prepTime: 5,
          tags: ['Quick', 'Protein-Packed', 'Refreshing'],
          benefits: [
            'Quick protein delivery',
            'Vitamins from spinach and fruit',
            'Hydrating and refreshing',
            'Supports muscle recovery',
          ],
        },
      ],
      Dinner: [
        {
          name: isVegan ? 'Tofu Stir-Fry with Vegetables' : 'Grilled Steak with Roasted Vegetables',
          time: '7:00 PM',
          calories: 100,
          protein: 100,
          carbs: 100,
          fats: 100,
          fiber: 10,
          ingredients: isVegan
            ? ['Firm tofu (200g)', 'Broccoli', 'Bell peppers', 'Snap peas', 'Brown rice', 'Soy sauce', 'Ginger', 'Garlic', 'Sesame oil']
            : ['Grass-fed steak (180g)', 'Sweet potato', 'Asparagus', 'Brussels sprouts', 'Olive oil', 'Rosemary', 'Garlic'],
          instructions: [
            'Season steak with salt, pepper, and rosemary',
            'Grill to desired doneness (medium-rare recommended)',
            'Roast sweet potato and vegetables with olive oil and garlic',
            'Let steak rest 5 minutes before slicing',
            'Serve with roasted vegetables',
          ],
          prepTime: 35,
          tags: ['High-Protein', 'Iron-Rich', 'Satisfying'],
          benefits: [
            'High-quality protein for muscle maintenance',
            'Rich in iron and B vitamins',
            'Complex carbs from sweet potato',
            'Antioxidants from vegetables',
          ],
        },
        {
          name: 'Baked Cod with Quinoa and Greens',
          time: '7:00 PM',
          calories: 100,
          protein: 100,
          carbs: 100,
          fats: 100,
          fiber: 9,
          ingredients: ['Cod fillet (180g)', 'Quinoa (80g)', 'Kale', 'Lemon', 'Garlic', 'Cherry tomatoes', 'Olive oil', 'Herbs'],
          instructions: [
            'Bake cod with lemon, garlic, and herbs at 400°F for 15 minutes',
            'Cook quinoa according to package',
            'Sauté kale with garlic and cherry tomatoes',
            'Serve fish over quinoa with greens on the side',
          ],
          prepTime: 30,
          tags: ['Light', 'Omega-3 Rich', 'Mediterranean'],
          benefits: [
            'Lean protein from fish',
            'Omega-3 for heart health',
            'Nutrient-dense greens',
            'Low in saturated fat',
          ],
        },
        {
          name: isVegetarian ? 'Vegetable Lasagna' : 'Chicken Fajita Bowl',
          time: '7:00 PM',
          calories: 100,
          protein: 100,
          carbs: 100,
          fats: 100,
          fiber: 11,
          ingredients: isVegetarian
            ? ['Whole wheat lasagna noodles', 'Ricotta cheese', 'Spinach', 'Zucchini', 'Mushrooms', 'Marinara sauce', 'Mozzarella']
            : ['Chicken breast', 'Bell peppers', 'Onions', 'Cauliflower rice', 'Black beans', 'Avocado', 'Salsa', 'Greek yogurt'],
          instructions: [
            'Sauté chicken with fajita seasonings',
            'Cook bell peppers and onions until tender',
            'Prepare cauliflower rice',
            'Assemble bowl with all ingredients',
            'Top with avocado, salsa, and Greek yogurt',
          ],
          prepTime: 25,
          tags: ['Flavorful', 'Customizable', 'Family-Friendly'],
          benefits: [
            'Balanced macronutrients',
            'Rich in vitamins from vegetables',
            'Protein for satiety',
            'Probiotic benefits from yogurt',
          ],
        },
      ],
      'Evening Snack': [
        {
          name: 'Chamomile Tea with Rice Cakes',
          time: '9:00 PM',
          calories: 100,
          protein: 100,
          carbs: 100,
          fats: 100,
          fiber: 2,
          ingredients: ['Chamomile tea', 'Rice cakes (2)', 'Almond butter (1 tbsp)', 'Banana slices'],
          instructions: [
            'Brew chamomile tea',
            'Spread almond butter on rice cakes',
            'Top with banana slices',
            'Enjoy with tea before bed',
          ],
          prepTime: 5,
          tags: ['Light', 'Sleep-Promoting', 'Calming'],
          benefits: [
            'Promotes relaxation',
            'Light and easy to digest',
            'Won\'t disrupt sleep',
            'Tryptophan from banana aids sleep',
          ],
        },
      ],
    };
  };

  const generateDailyTips = (goals: string[]): string[] => {
    const allTips = [
      '💧 Drink a glass of water upon waking to kickstart metabolism',
      '🥗 Eat the rainbow - diverse colors mean diverse nutrients',
      '🏃 Light walk after meals aids digestion and blood sugar control',
      '😴 Aim for 7-9 hours of sleep for optimal recovery',
      '🍽️ Practice mindful eating - chew slowly and savor each bite',
      '📝 Track your meals to stay accountable',
      '🥑 Healthy fats are essential for hormone production',
      '💪 Protein at each meal helps maintain muscle mass',
      '🧘 Manage stress - it affects eating habits and digestion',
      '📱 Meal prep on Sundays to set yourself up for success',
    ];

    return allTips.slice(0, 5);
  };

  const handleGoalToggle = (goal: string) => {
    setProfile((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter((g) => g !== goal)
        : [...prev.goals, goal],
    }));
  };

  const handleCuisineToggle = (cuisine: string) => {
    setProfile((prev) => ({
      ...prev,
      cuisinePreferences: prev.cuisinePreferences.includes(cuisine)
        ? prev.cuisinePreferences.filter((c) => c !== cuisine)
        : [...prev.cuisinePreferences, cuisine],
    }));
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="age">Age</Label>
          <Input
            id="age"
            type="number"
            placeholder="25"
            value={profile.age}
            onChange={(e) => setProfile({ ...profile, age: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="gender">Gender</Label>
          <Select value={profile.gender} onValueChange={(value) => setProfile({ ...profile, gender: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="weight">Weight (kg)</Label>
          <Input
            id="weight"
            type="number"
            placeholder="70"
            value={profile.weight}
            onChange={(e) => setProfile({ ...profile, weight: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="height">Height (cm)</Label>
          <Input
            id="height"
            type="number"
            placeholder="170"
            value={profile.height}
            onChange={(e) => setProfile({ ...profile, height: e.target.value })}
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="activityLevel">Activity Level</Label>
          <Select value={profile.activityLevel} onValueChange={(value) => setProfile({ ...profile, activityLevel: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select activity level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sedentary">Sedentary (little or no exercise)</SelectItem>
              <SelectItem value="light">Light (exercise 1-3 days/week)</SelectItem>
              <SelectItem value="moderate">Moderate (exercise 3-5 days/week)</SelectItem>
              <SelectItem value="active">Active (exercise 6-7 days/week)</SelectItem>
              <SelectItem value="very-active">Very Active (intense exercise daily)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="dietaryPreferences">Dietary Preference</Label>
          <Select value={profile.dietaryPreferences} onValueChange={(value) => setProfile({ ...profile, dietaryPreferences: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select dietary preference" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="omnivore">Omnivore</SelectItem>
              <SelectItem value="vegetarian">Vegetarian</SelectItem>
              <SelectItem value="vegan">Vegan</SelectItem>
              <SelectItem value="keto">Keto</SelectItem>
              <SelectItem value="paleo">Paleo</SelectItem>
              <SelectItem value="mediterranean">Mediterranean</SelectItem>
              <SelectItem value="gluten-free">Gluten-Free</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-3">
        <Label>Health Goals (Select all that apply)</Label>
        <div className="grid gap-3 md:grid-cols-2">
          {[
            { id: 'weight-loss', label: 'Weight Loss', icon: TrendingUp },
            { id: 'muscle-gain', label: 'Muscle Gain', icon: Activity },
            { id: 'maintain-weight', label: 'Maintain Weight', icon: Target },
            { id: 'improve-energy', label: 'Improve Energy', icon: Zap },
            { id: 'better-sleep', label: 'Better Sleep', icon: Moon },
            { id: 'mental-clarity', label: 'Mental Clarity', icon: Brain },
            { id: 'heart-health', label: 'Heart Health', icon: Heart },
            { id: 'digestive-health', label: 'Digestive Health', icon: Apple },
          ].map(({ id, label, icon: Icon }) => (
            <div key={id} className="flex items-center space-x-2">
              <Checkbox
                id={id}
                checked={profile.goals.includes(id)}
                onCheckedChange={() => handleGoalToggle(id)}
              />
              <Label htmlFor={id} className="flex items-center cursor-pointer">
                <Icon className="h-4 w-4 mr-2" />
                {label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Button onClick={() => setStep(2)} className="w-full" disabled={!profile.age || !profile.weight || !profile.height || !profile.activityLevel}>
        Continue to Preferences
      </Button>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label>Meals Per Day</Label>
          <div className="pt-2">
            <Slider
              value={[profile.mealsPerDay]}
              onValueChange={(value) => setProfile({ ...profile, mealsPerDay: value[0] })}
              min={3}
              max={6}
              step={1}
              className="w-full"
            />
            <div className="text-center mt-2 font-medium">{profile.mealsPerDay} meals</div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="budget">Budget</Label>
          <Select value={profile.budget} onValueChange={(value) => setProfile({ ...profile, budget: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select budget" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="budget">Budget-Friendly</SelectItem>
              <SelectItem value="moderate">Moderate</SelectItem>
              <SelectItem value="premium">Premium</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="cookingSkill">Cooking Skill Level</Label>
          <Select value={profile.cookingSkill} onValueChange={(value) => setProfile({ ...profile, cookingSkill: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select skill level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-3">
        <Label>Cuisine Preferences</Label>
        <div className="grid gap-3 md:grid-cols-3">
          {['Italian', 'Asian', 'Mexican', 'Mediterranean', 'Indian', 'American'].map((cuisine) => (
            <div key={cuisine} className="flex items-center space-x-2">
              <Checkbox
                id={cuisine}
                checked={profile.cuisinePreferences.includes(cuisine)}
                onCheckedChange={() => handleCuisineToggle(cuisine)}
              />
              <Label htmlFor={cuisine} className="cursor-pointer">
                {cuisine}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="allergies">Allergies & Restrictions (optional)</Label>
        <Textarea
          id="allergies"
          placeholder="E.g., nuts, dairy, shellfish..."
          className="min-h-[80px]"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="healthConditions">Health Conditions (optional)</Label>
        <Textarea
          id="healthConditions"
          placeholder="E.g., diabetes, hypertension..."
          className="min-h-[80px]"
        />
      </div>

      <div className="flex gap-3">
        <Button variant="outline" onClick={() => setStep(1)} className="flex-1" disabled={isGenerating}>
          Back
        </Button>
        <Button onClick={generateAIDietPlan} className="flex-1" disabled={isGenerating}>
          {isGenerating ? (
            <>
              <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
              AI Generating... (30-60s)
            </>
          ) : (
            <>
              <Sparkles className="h-4 w-4 mr-2" />
              Generate AI Diet Plan
            </>
          )}
        </Button>
      </div>
    </div>
  );

  const renderStep3 = () => {
    const currentPlan = weeklyPlan[selectedDay];
    if (!currentPlan) return null;

    return (
      <div className="space-y-6">
        {/* Nutrition Goals Overview */}
        {nutritionGoals && (
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Your Daily Nutrition Goals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium flex items-center gap-2">
                      <Flame className="h-4 w-4 text-orange-500" />
                      Calories
                    </span>
                    <span className="text-2xl font-bold">{nutritionGoals.calories}</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium flex items-center gap-2">
                      <Activity className="h-4 w-4 text-blue-500" />
                      Protein
                    </span>
                    <span className="text-2xl font-bold">{nutritionGoals.protein}g</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium flex items-center gap-2">
                      <Droplet className="h-4 w-4 text-cyan-500" />
                      Water
                    </span>
                    <span className="text-2xl font-bold">{(nutritionGoals.water / 1000).toFixed(1)}L</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
              </div>
              <div className="grid gap-3 md:grid-cols-3 mt-4">
                <div className="text-center p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                  <div className="text-sm text-muted-foreground">Carbs</div>
                  <div className="text-lg font-bold text-green-600">{nutritionGoals.carbs}g</div>
                </div>
                <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                  <div className="text-sm text-muted-foreground">Fats</div>
                  <div className="text-lg font-bold text-yellow-600">{nutritionGoals.fats}g</div>
                </div>
                <div className="text-center p-3 bg-purple-50 dark:bg-purple-950 rounded-lg">
                  <div className="text-sm text-muted-foreground">Fiber</div>
                  <div className="text-lg font-bold text-purple-600">{nutritionGoals.fiber}g</div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Day Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {weeklyPlan.map((plan, index) => (
            <Button
              key={plan.day}
              variant={selectedDay === index ? 'default' : 'outline'}
              onClick={() => setSelectedDay(index)}
              className="whitespace-nowrap"
            >
              <Calendar className="h-4 w-4 mr-2" />
              {plan.day}
            </Button>
          ))}
        </div>

        {/* Meals */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <ChefHat className="h-5 w-5" />
            {currentPlan.day}'s Meal Plan
          </h3>
          
          {currentPlan.meals.map((meal, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <UtensilsCrossed className="h-5 w-5" />
                      {meal.name}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-4 mt-2">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {meal.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {meal.prepTime} min prep
                      </span>
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{meal.calories}</div>
                    <div className="text-xs text-muted-foreground">calories</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                {/* Macros */}
                <div className="grid grid-cols-4 gap-3">
                  <div className="text-center p-2 bg-blue-50 dark:bg-blue-950 rounded">
                    <div className="text-xs text-muted-foreground">Protein</div>
                    <div className="font-bold text-blue-600">{meal.protein}g</div>
                  </div>
                  <div className="text-center p-2 bg-green-50 dark:bg-green-950 rounded">
                    <div className="text-xs text-muted-foreground">Carbs</div>
                    <div className="font-bold text-green-600">{meal.carbs}g</div>
                  </div>
                  <div className="text-center p-2 bg-yellow-50 dark:bg-yellow-950 rounded">
                    <div className="text-xs text-muted-foreground">Fats</div>
                    <div className="font-bold text-yellow-600">{meal.fats}g</div>
                  </div>
                  <div className="text-center p-2 bg-purple-50 dark:bg-purple-950 rounded">
                    <div className="text-xs text-muted-foreground">Fiber</div>
                    <div className="font-bold text-purple-600">{meal.fiber}g</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {meal.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Ingredients */}
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Apple className="h-4 w-4" />
                    Ingredients
                  </h4>
                  <ul className="grid grid-cols-2 gap-2 text-sm">
                    {meal.ingredients.map((ingredient, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Instructions */}
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <ChefHat className="h-4 w-4" />
                    Instructions
                  </h4>
                  <ol className="space-y-2 text-sm">
                    {meal.instructions.map((instruction, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="font-bold text-primary min-w-[20px]">{i + 1}.</span>
                        <span>{instruction}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Benefits */}
                <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2 text-green-700 dark:text-green-400">
                    <Heart className="h-4 w-4" />
                    Health Benefits
                  </h4>
                  <ul className="space-y-1 text-sm">
                    {meal.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-600 dark:text-green-400">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Daily Tips */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-yellow-500" />
              Daily Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {currentPlan.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-primary">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Hydration Reminders */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Droplet className="h-5 w-5 text-cyan-500" />
              Hydration Schedule
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {currentPlan.hydrationReminders.map((reminder, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <div className="h-8 w-8 rounded-full bg-cyan-100 dark:bg-cyan-950 flex items-center justify-center">
                    <Droplet className="h-4 w-4 text-cyan-600" />
                  </div>
                  <span>{reminder}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex gap-3">
          <Button variant="outline" className="flex-1">
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </Button>
          <Button variant="outline" className="flex-1">
            <Share2 className="h-4 w-4 mr-2" />
            Share Plan
          </Button>
          <Button variant="outline" className="flex-1" onClick={() => { setStep(1); setWeeklyPlan([]); }}>
            <RefreshCw className="h-4 w-4 mr-2" />
            New Plan
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-6">
      {/* Header */}
      <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Sparkles className="h-8 w-8 text-primary" />
            AI-Powered Diet Planner
            <Badge className="ml-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
              Google Gemini AI
            </Badge>
          </CardTitle>
          <CardDescription className="text-base">
            Get personalized meal plans based on your goals, preferences, and nutritional needs.
            Powered by advanced AI from Google Gemini 1.5 Flash and nutritional science.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Progress Indicator */}
      {step < 3 && (
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Step {step} of 2</span>
            <span>{step === 1 ? 'Basic Information' : 'Preferences & Goals'}</span>
          </div>
          <Progress value={(step / 2) * 100} className="h-2" />
        </div>
      )}

      {/* Main Content */}
      <Card>
        <CardHeader>
          <CardTitle>
            {step === 1 && 'Tell Us About Yourself'}
            {step === 2 && 'Your Preferences'}
            {step === 3 && 'Your Personalized Diet Plan'}
          </CardTitle>
          <CardDescription>
            {step === 1 && 'Basic information to calculate your nutritional needs'}
            {step === 2 && 'Customize your meal plan based on your lifestyle'}
            {step === 3 && 'Your AI-generated weekly meal plan with detailed recipes'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isGenerating ? (
            <div className="py-12 text-center space-y-6">
              <div className="flex justify-center">
                <div className="relative">
                  <RefreshCw className="h-16 w-16 text-primary animate-spin" />
                  <Sparkles className="h-8 w-8 text-yellow-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">AI is Crafting Your Personalized Meal Plan</h3>
                <p className="text-muted-foreground">
                  Google Gemini 1.5 Flash is analyzing your profile and creating unique recipes...
                </p>
              </div>
              <div className="max-w-md mx-auto space-y-2">
                <Progress value={generationProgress} className="h-3" />
                <p className="text-sm text-muted-foreground">
                  {generationProgress}% Complete - Generating day {Math.ceil(generationProgress / 14.3)} of 7
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mt-8">
                <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <ChefHat className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Creating Recipes</p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                  <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Optimizing Nutrition</p>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                  <Brain className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Personalizing Plan</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground italic">
                This usually takes 30-60 seconds. Please don't close this page.
              </p>
            </div>
          ) : (
            <>
              {step === 1 && renderStep1()}
              {step === 2 && renderStep2()}
              {step === 3 && renderStep3()}
            </>
          )}
        </CardContent>
      </Card>

      {/* Info Cards */}
      {step === 1 && (
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Brain className="h-5 w-5 text-purple-500" />
                AI-Powered
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Google Gemini 1.5 Flash analyzes your profile to create truly personalized meal plans with unique recipes
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Target className="h-5 w-5 text-blue-500" />
                Goal-Oriented
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              AI adapts recipes to your specific health and fitness objectives with precision
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Heart className="h-5 w-5 text-red-500" />
                Science-Based
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Combines AI creativity with nutritional science and proven dietary principles
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
