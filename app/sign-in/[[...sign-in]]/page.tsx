import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
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
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to continue your mental wellness journey</p>
        </div>

        {/* Clerk Sign In Component */}
        <div className="bg-white rounded-xl shadow-xl p-2">
          <SignIn 
            path="/sign-in"
            routing="path"
            signUpUrl="/sign-up"
            redirectUrl="/dashboard"
            appearance={{
              elements: {
                formButtonPrimary: 
                  "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-sm normal-case shadow-lg transition-all duration-200",
                card: "shadow-none border-0",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                socialButtonsBlockButton: "border-2 border-gray-200 hover:border-gray-300 text-gray-700",
                formFieldInput: "border-2 border-gray-200 focus:border-blue-500 rounded-lg",
                footerActionLink: "text-blue-600 hover:text-blue-700"
              },
              variables: {
                colorPrimary: "#2563eb",
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
            New to MindSpace?{' '}
            <Link href="/sign-up" className="text-blue-600 hover:text-blue-700 font-semibold">
              Create an account
            </Link>
          </p>
        </div>

        {/* Crisis Support */}
        <div className="mt-8 p-4 bg-red-50 border-l-4 border-red-400 rounded-r-lg">
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