# MindSpace - Mental Health Support Platform 🧠

A comprehensive, anonymous mental health support platform designed specifically for college students. Built with Next.js, TypeScript, and Tailwind CSS, featuring AI-powered chat support and interactive wellness tools.                                                              
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