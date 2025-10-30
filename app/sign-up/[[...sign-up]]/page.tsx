import { SignUp } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-12">
      <div className="w-full max-w-md px-6">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-3 mb-6">
            <Image
              src="https://i.ibb.co/5WLNwykj/Gemini-Generated-Image-mfgcowmfgcowmfgc.png"
              alt="MindSpace Logo"
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
            <span className="text-3xl font-bold text-gray-900">MindSpace</span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Join MindSpace</h1>
          <p className="text-gray-600">Start your mental wellness journey today</p>
        </div>

        {/* Benefits */}
        <div className="mb-6 space-y-2">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>AI-powered mental health support</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Professional therapist resources</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Personalized wellness tracking</span>
          </div>
        </div>

        {/* Clerk Sign Up Component */}
        <div className="bg-white rounded-xl shadow-xl p-2">
          <SignUp 
            path="/sign-up"
            routing="path"
            signInUrl="/sign-in"
            redirectUrl="/dashboard"
            appearance={{
              elements: {
                formButtonPrimary: 
                  "bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-sm normal-case shadow-lg transition-all duration-200",
                card: "shadow-none border-0",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                socialButtonsBlockButton: "border-2 border-gray-200 hover:border-gray-300 text-gray-700",
                formFieldInput: "border-2 border-gray-200 focus:border-green-500 rounded-lg",
                footerActionLink: "text-green-600 hover:text-green-700"
              },
              variables: {
                colorPrimary: "#059669",
                colorBackground: "#ffffff",
                colorInputBackground: "#ffffff",
                colorInputText: "#1f2937",
                borderRadius: "0.75rem"
              }
            }}
          />
        </div>

        {/* Additional Info */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Already have an account?{' '}
            <Link href="/sign-in" className="text-green-600 hover:text-green-700 font-semibold">
              Sign in here
            </Link>
          </p>
        </div>

        {/* Privacy Notice */}
        <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-blue-700">
                <strong>Privacy Protected:</strong> Your mental health data is encrypted and secure. We never share your personal information.
              </p>
            </div>
          </div>
        </div>

        {/* Crisis Support */}
        <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-400 rounded-r-lg">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-red-700">
                <strong>Crisis Support:</strong> If you're in immediate danger, call 911 or visit your nearest emergency room.
              </p>
              <p className="text-xs text-red-600 mt-1">
                National Suicide Prevention Lifeline: 988
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}