# MindSpace - Mental Health Support Platform 🧠

A comprehensive, production-ready anonymous mental health support platform designed specifically for college students. Built with Next.js 15, TypeScript, and TailwindCSS, featuring AI-powered chat support, clinical assessments, and interactive wellness tools.

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

## ✨ Features

### 🤖 AI-Powered Mental Health Chat
- **Multi-Provider Support**: Primary Google Gemini, fallback to OpenAI for reliability
- **Crisis Detection**: Automated detection of crisis language with immediate resource suggestions
- **Secure & Private**: Input sanitization, rate limiting, and end-to-end security
- **24/7 Availability**: Always accessible support with compassionate, evidence-based responses

### 🧘 Interactive Wellness Tools
- **Mood Tracker**: Daily emotional state monitoring with pattern recognition
- **Stress Monitor**: Real-time stress level assessment and coping strategies
- **Wellness Journal**: Reflective journaling with guided prompts and tags
- **Diet Planner**: AI-generated personalized meal plans with nutritional guidance
- **Goal Setting**: Personal wellness objective management
- **Mindfulness Coach**: Guided meditation and breathing exercises
- **Self-Care Planner**: Personalized wellness activity scheduling

### 📊 Clinical Mental Health Assessments
- **Evidence-Based Tools**: Clinically validated screening instruments
- **GAD-7**: Generalized Anxiety Disorder assessment
- **PHQ-9**: Depression screening questionnaire  
- **PSS**: Perceived Stress Scale evaluation
- **Progress Tracking**: Monitor mental health improvements over time

### 🎯 Wellness Activities
- **Yoga Sessions**: Guided poses with detailed instructions and benefits
- **Meditation Programs**: Various mindfulness and relaxation exercises
- **Breathing Techniques**: Structured breathing exercises for anxiety relief
- **Grounding Exercises**: Crisis management and emotional regulation tools

### 🔒 Security & Privacy
- **Authentication**: Clerk-based secure user authentication
- **Input Validation**: Comprehensive sanitization preventing XSS and injection attacks
- **Rate Limiting**: Protection against abuse and DoS attacks
- **Security Headers**: CSP, XSS protection, frame options, and more
- **HTTPS Enforcement**: Automatic redirect in production environments

## 🚀 Tech Stack

### Core Framework
- **Next.js 15** - React framework with App Router and Server Components
- **TypeScript 5.6** - Type-safe development with strict mode
- **React 18.3** - Latest React with concurrent features

### Styling & UI
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icon library

### AI Integration
- **Google Gemini** - Primary AI chat service
- **OpenAI GPT** - Backup AI service
- **OpenRouter** - Legacy AI service support

### Authentication & Security
- **Clerk** - Modern authentication and user management
- **Custom Security Utils** - Input validation and sanitization
- **Middleware Protection** - Route protection and rate limiting

### Testing & Quality
- **Jest 29** - JavaScript testing framework
- **React Testing Library** - Component testing utilities
- **TypeScript Strict Mode** - Enhanced type safety
- **ESLint** - Code quality and consistency

## 📦 Installation

### Prerequisites
- **Node.js** 18.17.0 or higher
- **npm** 9.0.0 or higher
- **Git** (for cloning)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mindspace.git
   cd mindspace
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   
   Create a `.env.local` file in the root directory:
   ```bash
   cp .env.example .env.local
   ```

   Update the following required variables:
   ```env
   # Required: Google Gemini API (Primary AI Service)
   GEMINI_API_KEY=your_gemini_api_key_here
   
   # Required: Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
   CLERK_SECRET_KEY=your_clerk_secret_key_here
   
   # Optional: Backup AI Services
   OPENAI_API_KEY=your_openai_api_key_here
   OPENROUTER_API_KEY=your_openrouter_api_key_here
   
   # Optional: Deployment
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Get API Keys**
   
   - **Gemini API** (Required): 
     - Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
     - Sign in with Google account
     - Create new API key
   
   - **Clerk Authentication** (Required):
     - Sign up at [Clerk](https://clerk.dev/)
     - Create new application
     - Copy publishable and secret keys
   
   - **OpenAI** (Optional backup):
     - Visit [OpenAI Platform](https://platform.openai.com/api-keys)
     - Create API key with appropriate permissions

5. **Start Development Server**
   ```bash
   npm run dev
   ```

6. **Open Application**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠 Available Scripts

```bash
# Development
npm run dev          # Start development server with hot reload
npm run build        # Build production bundle with optimizations
npm run start        # Start production server
npm run lint         # Run ESLint code analysis
npm run type-check   # Run TypeScript type checking

# Testing
npm run test         # Run tests in watch mode
npm run test:ci      # Run tests once (for CI/CD)
```

## 📁 Project Structure

```
mindspace/
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   ├── chat/                 # AI chat endpoint with validation
│   │   └── diet-plan/            # Diet planner endpoint
│   ├── activities/               # Wellness activities pages
│   ├── assessments/              # Mental health assessment tools
│   ├── chat/                     # AI chat interface
│   ├── dashboard/                # User dashboard
│   ├── tools/                    # Wellness tools (mood tracker, journal, etc.)
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Homepage
├── components/                   # Reusable React components
│   ├── assessments/              # Assessment interfaces
│   ├── chat/                     # Chat components
│   ├── layout/                   # Navigation, header, footer
│   ├── tools/                    # Wellness tool components
│   └── ui/                       # Shared UI components (buttons, cards, etc.)
├── lib/                          # Utility functions and helpers
│   ├── utils.ts                  # General utilities
│   ├── security.ts               # Input validation and sanitization
│   ├── env-validation.ts         # Environment variable validation
│   ├── assessments/              # Assessment data and logic
│   └── constants/                # App constants and configuration
├── hooks/                        # Custom React hooks
│   └── use-toast.ts              # Toast notification hook
├── __tests__/                    # Test files
│   ├── security.test.ts          # Security utility tests
│   ├── env-validation.test.ts    # Environment validation tests
│   └── utils.test.ts             # General utility tests
├── public/                       # Static assets
├── middleware.ts                 # Security middleware (rate limiting, headers, CSP)
├── next.config.mjs               # Next.js configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── jest.config.js                # Jest testing configuration
├── jest.setup.js                 # Jest setup file
├── .env.example                  # Environment variable template
└── README.md                     # This file
```

## 🔧 Configuration Details

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `GEMINI_API_KEY` | Yes* | Google Gemini API key for AI chat |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Yes | Clerk publishable key |
| `CLERK_SECRET_KEY` | Yes | Clerk secret key |
| `OPENAI_API_KEY` | No | OpenAI API key (backup service) |
| `OPENROUTER_API_KEY` | No | OpenRouter API key (legacy) |
| `NEXT_PUBLIC_APP_URL` | No | Base URL for the application |

*At least one AI API key (Gemini, OpenAI, or OpenRouter) is required for chat functionality.

### Security Features

#### Middleware Protection
- **Rate Limiting**: 100 requests per minute per IP for API routes
- **Security Headers**: XSS protection, frame options, CSP, MIME type sniffing prevention
- **HTTPS Enforcement**: Automatic redirect in production
- **Route Protection**: Clerk-based authentication for protected routes

#### Input Validation
- **Message Sanitization**: HTML/script tag removal, length limits
- **XSS Prevention**: Event handler and JavaScript protocol filtering
- **Content Validation**: Suspicious pattern detection
- **Type Safety**: Strict TypeScript validation

#### API Security
- **Authentication Required**: All API routes require valid Clerk session
- **Request Validation**: JSON body parsing with error handling
- **Crisis Detection**: Automatic identification of concerning language
- **Error Handling**: Graceful fallbacks with user-friendly messages

## 🧪 Testing

### Running Tests

```bash
# Run all tests in watch mode
npm run test

# Run tests once (CI mode)
npm run test:ci

# Run with coverage
npm run test -- --coverage
```

### Test Coverage

- **Security Utilities**: Input validation, sanitization, XSS prevention
- **Environment Validation**: Required variable checking, warnings
- **Utility Functions**: Classname merging, helper functions

## 🌟 Key Features Implementation

### AI Chat System
The chat system uses a multi-provider approach for reliability:

1. **Primary**: Google Gemini (fast, cost-effective)
2. **Fallback**: OpenAI GPT-4o-mini (reliable backup)
3. **Crisis Detection**: Real-time analysis of user messages
4. **Security**: Input sanitization, rate limiting, authentication

### Mental Health Focus
- Evidence-based conversation prompts
- Crisis intervention protocols
- Professional resource referrals
- Student-specific support strategies

### Wellness Tools
- **Mood Tracking**: Pattern recognition and insights
- **Journaling**: Guided prompts with tagging
- **Diet Planning**: AI-generated meal plans with macros
- **Goal Setting**: SMART goal framework

## 🔒 Privacy & Security

### Data Protection
- **Local Storage**: Sensitive data stored client-side when possible
- **Encryption**: HTTPS in production, secure API communication
- **No Tracking**: Privacy-focused design without analytics
- **Anonymous Option**: Core features accessible without registration

### Security Best Practices
- Content Security Policy (CSP) implementation
- XSS and injection attack prevention
- Rate limiting and DoS protection
- Secure headers on all responses
- Regular security audits

## 📱 Responsive Design

- **Mobile-First**: Optimized for mobile devices
- **Tablet Support**: Adaptive layouts for tablets
- **Desktop Experience**: Full-featured desktop interface
- **Touch-Friendly**: Large tap targets and gestures
- **Progressive Web App**: Installable on mobile devices

## 🆘 Crisis Support Resources

The platform includes comprehensive crisis intervention:

- **Automated Detection**: AI monitors for crisis language
- **Immediate Resources**: Quick access to hotlines
- **Professional Referrals**: Campus and local services
- **Safety Planning**: Crisis management tools

### Emergency Contacts
- **988 Suicide & Crisis Lifeline**: Call or text 988
- **Crisis Text Line**: Text HOME to 741741
- **National Sexual Assault Hotline**: 1-800-656-HOPE (4673)
- **SAMHSA National Helpline**: 1-800-662-HELP (4357)

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   - Import project from GitHub
   - Select mindspace repository

2. **Configure Environment Variables**
   - Add all required variables in Vercel dashboard
   - Ensure HTTPS URLs for production

3. **Deploy**
   - Automatic deployment on push to main branch
   - Preview deployments for pull requests

### Other Platforms

- **Netlify**: Full Next.js support with edge functions
- **Railway**: Container-based deployment with auto-scaling
- **DigitalOcean App Platform**: Managed Next.js hosting
- **Render**: Zero-config Next.js deployments

### Pre-Deployment Checklist

- [ ] All environment variables configured
- [ ] Build succeeds locally (`npm run build`)
- [ ] Tests pass (`npm run test:ci`)
- [ ] Type checking passes (`npm run type-check`)
- [ ] Lint checks pass (`npm run lint`)
- [ ] Security headers configured
- [ ] HTTPS enforced in production
- [ ] Rate limiting active
- [ ] Error tracking configured (optional)

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Development Workflow

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/your-feature-name`
3. **Make changes** with proper TypeScript types
4. **Add tests** for new functionality
5. **Run quality checks**:
   ```bash
   npm run lint
   npm run type-check
   npm run test
   ```
6. **Commit changes**: `git commit -m 'Add feature: description'`
7. **Push to branch**: `git push origin feature/your-feature-name`
8. **Open Pull Request** with detailed description

### Code Standards

- Follow TypeScript best practices
- Maintain test coverage
- Use semantic commit messages
- Ensure accessibility (WCAG 2.1 AA)
- Document complex logic
- Keep bundle size minimal

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Mental Health Resources**: Evidence-based screening tools and interventions
- **AI Partners**: Google Gemini and OpenAI for chat capabilities
- **Design System**: Radix UI and Tailwind CSS for accessible components
- **Authentication**: Clerk for secure user management
- **Community**: Mental health advocates supporting student wellness

## 📞 Support

### Technical Issues
- **GitHub Issues**: Report bugs and request features
- **Documentation**: Check this README and inline code comments

### Mental Health Crisis
- **Immediate Danger**: Call 911 or local emergency services
- **Crisis Support**: Call 988 (Suicide & Crisis Lifeline)
- **Campus Resources**: Contact your institution's counseling center

### Contact
- **Email**: support@mindspace.dev (if applicable)
- **Website**: [mindspace.dev](https://mindspace.dev) (if applicable)

## 🎯 Roadmap

### Current Version (v1.0)
- ✅ AI-powered chat with crisis detection
- ✅ Clinical mental health assessments
- ✅ Interactive wellness tools
- ✅ Secure authentication
- ✅ Comprehensive testing suite

### Upcoming Features (v1.1+)
- [ ] User profile and history
- [ ] Advanced analytics dashboard
- [ ] Peer support communities
- [ ] Therapist referral system
- [ ] Multilingual support
- [ ] Mobile app (React Native)
- [ ] Integration with campus counseling services
- [ ] Telegram/Discord bot integration

## 📊 Performance

### Build Optimizations
- **SWC Minification**: Fast JavaScript/TypeScript compilation
- **Image Optimization**: Automatic WebP/AVIF conversion
- **Code Splitting**: Dynamic imports for heavy components
- **Tree Shaking**: Unused code elimination
- **Static Optimization**: Pre-rendered pages where possible

### Runtime Performance
- **Server Components**: Reduced client JavaScript
- **Streaming SSR**: Faster time to first byte
- **Edge Functions**: Low-latency API responses
- **Caching**: Aggressive caching for static assets

---

**Disclaimer**: MindSpace is designed to provide supportive resources and information. It is not a substitute for professional mental health treatment. If you are experiencing a mental health crisis, please contact emergency services or a mental health professional immediately.

---

Made with ❤️ for student mental health and wellbeing.

**Version**: 1.0.0  
**Last Updated**: October 2025                                                              
## ✨ Features

### 🤖 AI-Powered Chat Support
- **OpenRouter AI Integration**: Compassionate, evidence-based mental health responses
- **Crisis Detection**: Automatic detection of crisis language with immediate resource suggestions                                                                                        - **24/7 Availability**: Always accessible support for students in need
- **Fallback Services**: Multiple AI providers (OpenRouter, OpenAI) for reliability

### 🧘 Wellness Tools
- **Mood Tracker**: Daily emotional state monitoring with pattern recognition
- **Stress Monitor**: Real-time stress level assessment and coping strategies
- **Wellness Journal**: Reflective journaling with guided prompts
- **Goal Setting**: Personal wellness objective management
- **Mindfulness Coach**: Guided meditation and breathing exercises
- **Self-Care Planner**: Personalized wellness activity scheduling

### 📊 Mental Health Assessments
- **Clinical Screening Tools**: Evidence-based mental health evaluations
- **GAD-7**: Generalized Anxiety Disorder assessment
- **PHQ-9**: Depression screening questionnaire
- **PSS**: Perceived Stress Scale evaluation
- **Progress Tracking**: Monitor mental health improvements over time

### 🎯 Interactive Activities
- **Yoga Sessions**: Guided poses with detailed instructions and benefits
- **Meditation Programs**: Various mindfulness and relaxation exercises
- **Breathing Techniques**: Structured breathing exercises for anxiety relief
- **Grounding Exercises**: Crisis management and emotional regulation tools

### 📱 User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Consistent Navigation**: Unified navigation bar across all pages
- **Anonymous Access**: No registration required for immediate support
- **Crisis Resources**: Quick access to emergency mental health services

## 🚀 Technical Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **Radix UI**: Accessible component primitives

### AI & APIs
- **OpenRouter AI**: Primary AI chat service
- **OpenRouter**: Backup AI service
- **OpenAI**: Secondary backup service
- **Crisis Detection**: Automated mental health crisis identification

### Development Tools
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **TypeScript**: Static type checking
- **VS Code**: Optimized development environment

## 📦 Installation

### Prerequisites
- Node.js 18.17.0 or higher
- npm 9.0.0 or higher
- Git

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mindspace-website.git
   cd mindspace-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env.local` file in the root directory:
   ```bash
   # Required: Gemini AI Configuration
   GEMINI_API_KEY=your_gemini_api_key_here
   
   # Optional: Backup AI Services
   OPENROUTER_API_KEY=your_openrouter_api_key_here
   OPENAI_API_KEY=your_openai_api_key_here
   
   # Optional: Authentication (if needed)
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key_here
   ```

4. **Get AI API Keys**
   - **Gemini API**: Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
   - **OpenRouter**: Sign up at [OpenRouter](https://openrouter.ai/)
   - **OpenAI**: Get keys from [OpenAI Platform](https://platform.openai.com/api-keys)

5. **Start Development Server**
   ```bash
   npm run dev
   ```

6. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### AI Chat Setup
The AI chat system supports multiple providers for redundancy:

1. **Primary**: Gemini AI (Google)
2. **Backup**: OpenRouter (Multiple models)
3. **Secondary**: OpenAI (GPT models)

The system automatically falls back to available services if the primary fails.

### Environment Variables
```bash
# AI Configuration
GEMINI_API_KEY=                    # Google Gemini API key
OPENROUTER_API_KEY=                # OpenRouter API key (optional)
OPENAI_API_KEY=                    # OpenAI API key (optional)

# Authentication (optional)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY= # Clerk authentication key
```

## 📁 Project Structure

```
mindspace-website/
├── app/                          # Next.js App Router pages
│   ├── api/                      # API routes
│   │   └── chat/                 # AI chat endpoint
│   ├── activities/               # Wellness activities
│   ├── assessments/              # Mental health assessments
│   ├── chat/                     # AI chat interface
│   ├── dashboard/                # User dashboard
│   ├── tools/                    # Wellness tools
│   └── page.tsx                  # Homepage
├── components/                   # Reusable React components
│   ├── layout/                   # Navigation and layout
│   ├── tools/                    # Wellness tool components
│   ├── ui/                       # UI component library
│   └── assessments/              # Assessment interfaces
├── lib/                          # Utility functions and data
├── hooks/                        # Custom React hooks
├── styles/                       # Global CSS styles
└── public/                       # Static assets
```

## 🛠 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build production bundle
npm run start        # Start production server
npm run lint         # Run ESLint code analysis
```

## 🌟 Key Features Implementation

### Unified Navigation System
- Consistent navigation bar across all pages
- Active page highlighting
- Mobile-responsive hamburger menu
- Centralized navigation component

### AI Chat Integration
- Crisis detection and intervention
- Mental health-focused responses
- Multiple AI provider fallback system
- Evidence-based conversation prompts

### Wellness Tools
- Interactive mood tracking
- Stress level monitoring
- Guided journaling prompts
- Goal setting and progress tracking

### Assessment System
- Clinical-grade screening tools
- Progress tracking over time
- Anonymous result storage
- Resource recommendations

## 🔒 Privacy & Security

- **Anonymous Access**: No personal information required
- **Local Storage**: Data stored locally when possible
- **Secure APIs**: Encrypted communication with AI services
- **Crisis Resources**: Immediate access to professional help
- **No Tracking**: Privacy-focused design without user tracking

## 📱 Mobile Responsiveness

- Optimized for all screen sizes
- Touch-friendly interface
- Mobile-first design approach
- Progressive web app capabilities

## 🆘 Crisis Support

The platform includes comprehensive crisis intervention features:

- **Automated Detection**: AI monitors for crisis language
- **Immediate Resources**: Quick access to crisis hotlines
- **Professional Referrals**: Guidance to local mental health services
- **Safety Planning**: Tools for crisis management

### Crisis Hotlines
- **988 Suicide & Crisis Lifeline**: Call or text 988
- **Crisis Text Line**: Text HOME to 741741
- **National Sexual Assault Hotline**: 1-800-656-HOPE

## 🤝 Contributing

We welcome contributions to improve MindSpace! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/your-feature`
3. **Commit changes**: `git commit -m 'Add your feature'`
4. **Push to branch**: `git push origin feature/your-feature`
5. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Maintain consistent code formatting
- Add appropriate error handling
- Test across different devices
- Ensure accessibility standards

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Mental Health Resources**: Integration with evidence-based screening tools
- **AI Partners**: Google Gemini, OpenRouter, and OpenAI for chat capabilities
- **Design System**: Radix UI and Tailwind CSS for accessible, responsive design
- **Community**: Mental health advocates and developers supporting student wellness

## 📞 Support & Contact

For technical support or mental health resources:

- **Technical Issues**: Open a GitHub issue
- **Mental Health Crisis**: Call 988 or contact local emergency services
- **General Support**: Refer to platform documentation

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
- **Netlify**: Full Next.js support with edge functions
- **Railway**: Easy deployment with automatic builds
- **DigitalOcean**: App Platform with container support

---

**Disclaimer**: MindSpace is designed to provide supportive resources and information. It is not a substitute for professional mental health treatment. If you are experiencing a mental health crisis, please contact emergency services or a mental health professional immediately. 
## 🎯 Roadmap

### Upcoming Features
- [ ] User authentication and profiles
- [ ] Enhanced data visualization
- [ ] Peer support communities
- [ ] Integration with campus counseling services
- [ ] Advanced analytics and insights
- [ ] Multilingual support
- [ ] Therapist referral system

### Version History
- **v1.0.0**: Initial release with AI chat and basic tools
- **v1.1.0**: Unified navigation system implementation
- **v1.2.0**: Enhanced crisis detection and resources

---

Made with ❤️ for student mental health and wellbeing.