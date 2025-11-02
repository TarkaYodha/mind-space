# MindSpace 🧠

A comprehensive mental health support platform for college students. Built with Next.js 15, TypeScript, and AI-powered support.

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

## 🚀 Quick Start

### Prerequisites
- **Bun** 1.0+ (recommended) or Node.js 18+
- Supabase account
- Google OAuth credentials

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/mind-space.git
cd mind-space

# Install dependencies
bun install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your credentials

# Push database schema
bun db:push

# Start development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000)

## ✨ Features

### 🤖 AI Chat Support
- Real-time streaming responses with Google Gemini
- Crisis detection and immediate resource suggestions
- 24/7 mental health support

### 📊 Mental Health Assessments
- **PHQ-9**: Depression screening
- **GAD-7**: Anxiety assessment
- **PSS-10**: Stress evaluation
- **WHO-5**: Well-being index
- Progress tracking over time

### 🧘 Wellness Tools
- **Mood Tracker**: Daily emotional monitoring
- **Wellness Journal**: Guided journaling
- **Stress Monitor**: Real-time stress assessment
- **Goal Setting**: Personal wellness objectives
- **Diet Planner**: AI-generated meal plans

### 🎯 Interactive Activities
- Guided meditation
- Breathing exercises
- Yoga sessions
- Mindfulness practices

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5.6
- **Database**: Supabase (PostgreSQL)
- **ORM**: Drizzle 0.44
- **Auth**: NextAuth v5
- **AI**: Vercel AI SDK + Google Gemini
- **Styling**: Tailwind CSS 3.4
- **State**: TanStack Query + Zustand
- **APIs**: tRPC 11.7
- **Testing**: Vitest + Playwright
- **Deployment**: Vercel

## 🔧 Environment Setup

Create `.env.local`:

```bash
# Database
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."

# Auth
NEXTAUTH_SECRET="generate-with-openssl-rand"
NEXTAUTH_URL="http://localhost:3000"

# OAuth
GOOGLE_CLIENT_ID="your-id.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="GOCSPX-your-secret"
GITHUB_ID="your-github-id"
GITHUB_SECRET="your-github-secret"

# AI
GEMINI_API_KEY="your-gemini-key"
OPENAI_API_KEY="your-openai-key"  # Optional fallback
```

### Get Your Keys

1. **Supabase**: [supabase.com](https://supabase.com) → New Project → Settings → Database
2. **Google OAuth**: [Google Cloud Console](https://console.cloud.google.com/) → APIs & Services → Credentials
3. **GitHub OAuth**: GitHub Settings → Developer settings → OAuth Apps
4. **Gemini API**: [Google AI Studio](https://aistudio.google.com/app/apikey)

## 📦 Available Commands

```bash
# Development
bun dev              # Start dev server
bun build            # Build for production
bun start            # Start production server

# Code Quality
bun lint             # Lint with Biome
bun run type-check   # TypeScript validation

# Database
bun db:push          # Push schema to Supabase
bun db:studio        # Open Drizzle Studio
bun db:generate      # Generate migrations

# Testing
bun test             # Run unit tests
bun test:e2e         # Run E2E tests
bun test:ci          # Run all tests
```

## 📁 Project Structure

```
mind-space/
├── app/                    # Next.js pages
│   ├── api/               # API routes (tRPC, chat)
│   ├── (auth)/            # Auth pages
│   ├── dashboard/         # User dashboard
│   ├── chat/              # AI chat
│   ├── assessments/       # Mental health tools
│   └── tools/             # Wellness tools
├── components/            # React components
│   ├── ui/               # Shared UI components
│   ├── layout/           # Navigation, header
│   └── tools/            # Tool-specific components
├── lib/                   # Utilities
│   ├── db/               # Database schema
│   ├── trpc/             # API routers
│   ├── ai/               # AI configuration
│   └── auth/             # Auth config
├── __tests__/            # Tests
│   ├── lib/              # Unit tests
│   └── e2e/              # E2E tests
└── public/               # Static assets
```

## 🔒 Security Features

- Input validation and sanitization
- Rate limiting on API routes
- SQL injection protection (Drizzle ORM)
- XSS prevention
- CSRF protection (NextAuth)
- Secure session management
- Environment variable validation

## 🧪 Testing

```bash
# Unit tests (68 tests)
bun test

# E2E tests (30+ tests)
bun test:e2e

# Coverage report
bun test:coverage
```

## 🆘 Crisis Resources

Built-in crisis detection with immediate access to:

- **988 Suicide & Crisis Lifeline** - Call/text 988
- **Crisis Text Line** - Text HOME to 741741
- **SAMHSA Helpline** - 1-800-662-4357

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Pre-Deployment Checklist

- [ ] All environment variables configured
- [ ] Database schema pushed
- [ ] Build succeeds (`bun build`)
- [ ] Tests pass (`bun test:ci`)
- [ ] Type checking passes

## 📄 License

MIT License - see [LICENSE](LICENSE) file

## 🙏 Acknowledgments

- Mental health resources and evidence-based tools
- Google Gemini and OpenAI for AI capabilities
- Radix UI and Tailwind CSS for UI components

---

**Disclaimer**: MindSpace provides supportive resources and is not a substitute for professional mental health treatment. If experiencing a crisis, contact emergency services immediately.

**Made with ❤️ for student mental health**
