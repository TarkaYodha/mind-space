# 🤖 OpenRouter AI Integration - Diet Planner

## ✅ Implementation Complete!

Your Diet Planner now uses **the same OpenRouter API** as your AI Chat feature!

## 🔑 API Configuration

### Environment Variable
The diet planner uses the same API key as your chat:
```bash
OPENROUTER_API_KEY=your-key-here
```

**Location:** `.env.local` file (already configured for your chat)

### Model Used
- **Model:** `openai/gpt-4o-mini`
- **Provider:** OpenRouter
- **Same as:** Your AI Chat feature
- **Cost:** Free tier available on OpenRouter

## 🚀 How It Works

### 1. User Fills Profile (Steps 1-2)
```typescript
- Age, weight, height, gender
- Activity level
- Dietary preferences (vegan, keto, etc.)
- Health goals (weight loss, muscle gain, etc.)
- Cuisine preferences
- Allergies and restrictions
```

### 2. AI Generation Process
When user clicks "Generate AI Diet Plan":

```typescript
1. Calculate nutrition goals (BMR/TDEE)
   ↓
2. For each day of the week (7 days):
   ↓
3. Send profile + nutrition targets to OpenRouter API
   ↓
4. AI generates personalized meals with:
   - Unique recipe names
   - Complete ingredient lists
   - Step-by-step instructions
   - Accurate nutrition data
   - Health benefits
   - Cooking tips
   ↓
5. Display complete 7-day meal plan
```

### 3. API Request Flow

**Endpoint:** `/api/diet-plan`

**Request:**
```json
{
  "profile": {
    "age": "25",
    "gender": "male",
    "weight": "75",
    "height": "175",
    "activityLevel": "moderate",
    "dietaryPreferences": "vegetarian",
    "goals": ["weight-loss", "improve-energy"],
    "mealsPerDay": 3,
    "calorieTarget": 2100,
    "proteinTarget": 131,
    "carbsTarget": 262,
    "fatsTarget": 58
  },
  "dayOfWeek": "Monday"
}
```

**Response:**
```json
{
  "success": true,
  "mealPlan": {
    "meals": [
      {
        "name": "Mediterranean Chickpea Bowl",
        "time": "12:30 PM",
        "type": "Lunch",
        "calories": 520,
        "protein": 22,
        "carbs": 68,
        "fats": 18,
        "fiber": 14,
        "ingredients": ["chickpeas 200g", "quinoa 80g", "..."],
        "instructions": ["Cook quinoa...", "..."],
        "prepTime": 25,
        "tags": ["High-Protein", "Vegetarian", "Mediterranean"],
        "benefits": ["Rich in plant protein", "..."]
      }
    ],
    "tips": ["...", "..."],
    "hydrationReminders": ["...", "..."]
  }
}
```

## 🎯 AI Prompt Engineering

### System Prompt
The AI is instructed as a **nutrition expert** with:
- Evidence-based recommendations
- Respect for dietary restrictions
- Focus on practical, achievable meals
- Clear recipe format with measurements
- Health benefit explanations

### User Prompt (Per Day)
Includes:
- Complete user profile
- Nutrition targets (calories, macros)
- Dietary preferences and restrictions
- Meal count and timing
- Budget and skill level
- Cuisine preferences

### Response Format
AI returns **structured JSON** with:
- Array of meals (based on mealsPerDay)
- Complete nutritional data
- Detailed instructions
- Health tips
- Hydration reminders

## 💰 Cost Analysis

### OpenRouter Pricing (GPT-4o Mini)
- **Free tier:** Available
- **If paid:** ~$0.001 per request
- **Weekly plan:** 7 API calls = ~$0.007
- **Very affordable!**

### Optimization Features
✅ **Efficient token usage:**
- Structured JSON output
- Focused prompts
- 3000 token limit

✅ **Fallback system:**
- If API fails, uses pre-programmed meals
- Never leaves user without a plan

✅ **Caching potential:**
- Could cache common profiles
- Reduce repeat API calls

## 🔄 Comparison: Before vs After

### Before (Hardcoded)
```typescript
❌ Pre-written meals only
❌ Limited variety
❌ Same meals for everyone
❌ No true personalization
✅ Fast (instant)
✅ No API costs
✅ Always works offline
```

### After (OpenRouter AI)
```typescript
✅ Unique recipes every time
✅ Infinite variety
✅ Truly personalized
✅ Adapts to ANY preference
✅ Creative meal combinations
✅ Real nutritionist-level advice
⏱️ 30-60 seconds generation
💰 Minimal API cost (~$0.007/week)
🌐 Requires internet
```

## 🎨 UI Enhancements

### New Features Added

1. **AI Badge**
   - Shows "OpenRouter AI" in header
   - Purple/pink gradient badge

2. **Loading Screen**
   - Spinning icons
   - Progress bar (0-100%)
   - Shows which day is being generated
   - Estimated time (30-60s)
   - Animation while waiting

3. **Updated Copy**
   - "AI is crafting your meal plan"
   - "OpenRouter GPT-4o Mini"
   - Emphasizes AI-powered features

4. **Progress Tracking**
   - Real-time progress updates
   - Day-by-day generation status
   - Visual feedback

## 🛡️ Error Handling

### Fallback Strategy
```typescript
1. Try OpenRouter API
   ↓ (if fails)
2. Use pre-programmed meals for that day
   ↓
3. Continue with next day
   ↓
4. User always gets a complete plan
```

### Error Types Handled
- ✅ API timeout
- ✅ Invalid API key
- ✅ Rate limiting
- ✅ Network errors
- ✅ Malformed responses
- ✅ Authentication errors

### User Experience
- Never shows raw errors
- Graceful degradation
- Helpful error messages
- Always provides a solution

## 🔐 Security

### API Key Protection
```typescript
✅ Stored in .env.local (server-side)
✅ Never exposed to client
✅ API route handles authentication
✅ Clerk auth required for access
```

### Authentication Required
- User must be signed in
- Prevents abuse
- Tracks usage per user
- Enables future rate limiting

## 📊 Testing the Integration

### How to Test

1. **Start dev server:**
   ```bash
   npm run dev
   ```

2. **Navigate to:**
   ```
   http://localhost:3001/tools/diet-planner
   ```

3. **Fill in profile:**
   - Add your details
   - Select preferences
   - Choose goals

4. **Click "Generate AI Diet Plan"**
   - Watch progress bar
   - Wait 30-60 seconds
   - See AI-generated meals!

### What to Look For

✅ **Progress bar moves:** 0% → 14% → 28% → ... → 100%

✅ **Unique meals each time:** Different recipes with each generation

✅ **Personalization:** Meals respect your dietary preferences

✅ **Complete data:** All nutrition info, ingredients, instructions

✅ **Fallback works:** If API fails, still get a plan

## 🚀 Future Enhancements

### Potential Additions

1. **Caching System**
   ```typescript
   // Cache common profiles to reduce API calls
   const cacheKey = `${profile.hash}_${day}`;
   ```

2. **Regenerate Single Day**
   ```typescript
   // Don't regenerate entire week
   // Just refresh one day
   ```

3. **Save Favorite Meals**
   ```typescript
   // Let users save AI-generated meals
   // Reuse in future plans
   ```

4. **Meal Variations**
   ```typescript
   // "Generate alternative for this meal"
   // Quick re-generation of single meal
   ```

5. **Shopping List**
   ```typescript
   // Combine all ingredients
   // Generate grocery list
   ```

6. **Recipe Images**
   ```typescript
   // Use DALL-E or Stable Diffusion
   // Generate food photos
   ```

## 📱 Mobile Responsiveness

All AI features work perfectly on:
- ✅ Desktop
- ✅ Tablet
- ✅ Mobile phones
- ✅ All screen sizes

## 🎓 Learning Resources

### OpenRouter Documentation
- Docs: https://openrouter.ai/docs
- Models: https://openrouter.ai/models
- Pricing: https://openrouter.ai/pricing

### Your Existing Implementation
- Check: `/app/api/chat/route.ts`
- Same pattern as diet planner
- Already working in your app!

## ✅ Success Checklist

- [x] API route created (`/api/diet-plan/route.ts`)
- [x] Component updated to use API
- [x] OpenRouter integration added
- [x] Error handling implemented
- [x] Fallback system active
- [x] Loading UI created
- [x] Progress tracking added
- [x] Authentication required
- [x] No errors in build
- [x] Uses existing API key

## 🎉 You're All Set!

Your diet planner now uses **real AI** via OpenRouter:

1. ✅ Same API key as chat
2. ✅ GPT-4o Mini model
3. ✅ Truly personalized meals
4. ✅ Unique recipes each time
5. ✅ Beautiful loading UI
6. ✅ Robust error handling
7. ✅ Fallback protection

**Try it now at:** `http://localhost:3001/tools/diet-planner`

---

**Built with 🤖 OpenRouter AI + 💚 for MindSpace**
