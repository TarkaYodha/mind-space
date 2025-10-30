"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Shield, Users, Brain, Leaf } from "lucide-react"
import { useState } from "react"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { NavBar } from "@/components/layout/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageSquare, Star, CheckCircle2 } from "lucide-react"

export default function Home() {

  // --- Mood Box State ---
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);
  const [response, setResponse] = useState("");

  const emojiOptions = [
    { emoji: "😊", label: "Amazing", type: "default" },
    { emoji: "🙂", label: "Good", type: "default" },
    { emoji: "😐", label: "Okay", type: "anxious" },
    { emoji: "😔", label: "Low", type: "sad" },
    { emoji: "😢", label: "Struggling", type: "lonely" },
  ];

  const responses = {
    anxious: [
      "I hear the anxiety in your words 💙. Take a slow breath… You're safe.",
      "Anxiety can feel overwhelming 🌱. Try naming 3 things you can see around you."
    ],
    sad: [
      "I'm sorry you're feeling low 💜. It's okay to let the sadness be here.",
      "Sadness can feel heavy 🌧. Sharing a little lightens it—thank you."
    ],
    lonely: [
      "Loneliness can really hurt 💔. Remember you're not alone.",
      "Feeling disconnected is tough 🌙. One small comforting step can help."
    ],
    default: [
      "Thanks for sharing 💙. I'm listening. Want to tell me more?",
      "I hear you 🌸. That takes courage to put into words."
    ]
  };

  const handleEmojiClick = (type: string) => {
    setSelectedEmoji(type);
    const msgs = responses[type as keyof typeof responses] || responses["default"];
    const randomMsg = msgs[Math.floor(Math.random() * msgs.length)];
    setResponse(randomMsg);
  };

  // --- Feedback Form State ---
  const [feedbackData, setFeedbackData] = useState({
    category: "",
    rating: "",
    message: "",
    email: ""
  });
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(feedbackData);
    setFeedbackSubmitted(true);
    setTimeout(() => {
      setFeedbackSubmitted(false);
      setFeedbackData({ category: "", rating: "", message: "", email: "" });
    }, 3000);
  };

  const feedbackCategories = [
    { value: "general", label: "General Feedback" },
    { value: "feature", label: "Feature Request" },
    { value: "bug", label: "Bug Report" },
    { value: "appreciation", label: "Appreciation" }
  ];

  const feedbackRatings = [
    { value: "5", label: "⭐⭐⭐⭐⭐ Excellent" },
    { value: "4", label: "⭐⭐⭐⭐ Good" },
    { value: "3", label: "⭐⭐⭐ Average" },
    { value: "2", label: "⭐⭐ Poor" },
    { value: "1", label: "⭐ Very Poor" }
  ];

  // --- Features & Steps ---
  const features = [
    {
      icon: <Leaf className="w-6 h-6 text-green-600" />,
      title: "Personal Growth",
      desc: "Track your emotions and build resilience with daily check-ins.",
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-600" />,
      title: "Community Support",
      desc: "Join a safe student community, share experiences, and grow together.",
    },
    {
      icon: <Brain className="w-6 h-6 text-[#E59866]" />,
      title: "AI Insights",
      desc: "Smart suggestions and emotional trends powered by AI insights.",
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: "Privacy First",
      desc: "Your data is fully protected and remains confidential at all times.",
    },
  ];

  const steps = [
    { step: "1", title: "Check-In Daily", desc: "Share how you feel in seconds." },
    { step: "2", title: "Get Insights", desc: "Understand your emotional patterns with AI." },
    { step: "3", title: "Take Action", desc: "Explore guided activities and expert resources." },
    { step: "4", title: "Grow Together", desc: "Connect with peers and supportive communities." },
  ];

  return (
    <>
      <NavBar currentPage="home" />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-12">

          {/* Left Content */}
          <div className="w-full md:w-1/2 text-left md:text-left">
            <h1 className="text-4xl text-black sm:text-5xl lg:text-6xl mb-4 font-bold">
              Your Mental<br /> Wellness
            </h1>
            <h2 className="text-2xl sm:text-3xl mb-4 font-bold">Journey Start Here</h2>
            <p className="mt-3 text-gray-600 ml-0 sm:ml-2 mb-6">
              A safe digital sanctuary where students can explore their emotional
              landscape with confidence, get AI-powered insights, and connect with
              professional support when needed.
            </p>

            <div className="flex flex-row flex-wrap gap-4">
              <Link
                href="/dashboard"
                className="flex-1 min-w-[120px] bg-[#001f4d] text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-[#001437] transition-colors duration-200"
              >
                Start Your Journey
              </Link>
              <Link
                href="/tools#wellness-tools"
                className="flex-1 min-w-[120px] bg-[#001f4d] text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-[#001437] transition-colors duration-200"
              >
                Explore Resources
              </Link>
            </div>
          </div>

          {/* Right Mood Box */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 bg-white p-6 rounded-2xl shadow-xl max-w-md mx-auto relative">
            <h2 className="text-xl font-semibold text-black mb-2">
              How are you feeling today?
            </h2>
            <p className="text-sm text-gray-700 mt-1 mb-4">
              Quick check-in to start tracking your emotional patterns
            </p>

            <div className="flex justify-between mt-5">
              {emojiOptions.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col items-center cursor-pointer transform transition-all duration-200 hover:scale-110 ${
                    selectedEmoji === item.type ? "scale-125" : ""
                  }`}
                  onClick={() => handleEmojiClick(item.type)}
                >
                  <span className="text-3xl">{item.emoji}</span>
                  <p className="text-xs mt-1 text-gray-700">{item.label}</p>
                </div>
              ))}
            </div>

            {response && (
              <div className="mt-6 p-4 bg-indigo-50 border border-indigo-200 rounded-xl shadow-inner text-gray-800 text-sm">
                {response}
              </div>
            )}

            <Link href="/assessments" className="mt-6 w-full py-2 rounded-lg font-semibold block text-center bg-[#001f4d] text-white">
              Continue to Full Check-in
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900">
              Why Choose <span className="text-[#090847be]">MindSpace?</span>
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Empower your mental wellness journey with tools designed for students.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-indigo-50 border border-slate-100 rounded-2xl p-6 shadow hover:shadow-lg transition"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-50 mb-4">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-800">{f.title}</h3>
                <p className="text-sm text-slate-500 mt-2">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl lg:text-4xl font-extrabold text-slate-900"
            >
              How It <span className="text-[#081947d7]">Works</span>
            </motion.h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Simple steps to track, understand, and improve your mental wellness.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-indigo-50 rounded-2xl p-6 text-left shadow hover:shadow-md transition"
              >
                <div className="text-3xl font-extrabold text-[#090f51b3]">{s.step}</div>
                <h4 className="mt-3 text-lg font-semibold text-blue-950">{s.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900">
              Share Your <span className="text-[#090847be]">Feedback</span>
            </h2>
            <p className="mt-2 text-slate-600 max-w-xl mx-auto">
              Help us improve MindSpace with your thoughts and suggestions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto"
          >
            {feedbackSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">Thank You!</h3>
                <p className="text-slate-600 text-sm">
                  Your feedback helps us make MindSpace better.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFeedbackSubmit} className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
                <div>
                  <Label htmlFor="feedback-category" className="text-sm font-medium">Category</Label>
                  <Select 
                    value={feedbackData.category}
                    onValueChange={(value) => setFeedbackData({...feedbackData, category: value})}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {feedbackCategories.map((cat) => (
                        <SelectItem key={cat.value} value={cat.value}>
                          {cat.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="feedback-rating" className="text-sm font-medium">Rating</Label>
                  <Select 
                    value={feedbackData.rating}
                    onValueChange={(value) => setFeedbackData({...feedbackData, rating: value})}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Rate your experience" />
                    </SelectTrigger>
                    <SelectContent>
                      {feedbackRatings.map((rating) => (
                        <SelectItem key={rating.value} value={rating.value}>
                          {rating.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="feedback-message" className="text-sm font-medium">Message</Label>
                  <Textarea
                    id="feedback-message"
                    placeholder="Your feedback..."
                    value={feedbackData.message}
                    onChange={(e) => setFeedbackData({...feedbackData, message: e.target.value})}
                    rows={3}
                    className="mt-1"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="feedback-email" className="text-sm font-medium">Email (optional)</Label>
                  <Input
                    id="feedback-email"
                    type="email"
                    placeholder="your@email.com"
                    value={feedbackData.email}
                    onChange={(e) => setFeedbackData({...feedbackData, email: e.target.value})}
                    className="mt-1"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                  disabled={!feedbackData.category || !feedbackData.rating || !feedbackData.message}
                >
                  Submit Feedback
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#05112e] text-white h-[144px] flex flex-col items-center justify-center">
        <div className="text-2xl font-bold mb-4">MindSpace</div>
        <div className="flex space-x-6 mb-4">
          <a href="https://www.facebook.com/profile.php?id=61581178740012" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition-colors">
            <FaFacebookF size={24} />
          </a>
          <a href="https://x.com/MindSpace125868" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.instagram.com/mindspace550/#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition-colors">
            <FaInstagram size={24} />
          </a>
          <a href="http://www.linkedin.com/in/mindspace-web-48200a386" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700 transition-colors">
            <FaLinkedinIn size={24} />
          </a>
        </div>
        <p className="text-sm text-center">&copy; {new Date().getFullYear()} MindSpace. All rights reserved.</p>
      </footer>
    </>
  )
}