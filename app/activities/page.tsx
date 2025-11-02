'use client'

import { motion } from 'framer-motion'
import { Clock, Play, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import type React from 'react'
import { useState } from 'react'
import { Footer } from '@/components/layout/footer'
import { NavBar } from '@/components/layout/navbar'

export default function Activities() {
  const [activeTab, setActiveTab] = useState('yoga')

  const yogaAsanas = [
    {
      name: 'Ardha Chakrasana',
      image: 'https://i.pinimg.com/564x/c8/e9/9f/c8e99f734379463f4cf3b99bccaf05d2.jpg',
      duration: '5 min',
      difficulty: 'Beginner',
      description:
        'A gentle side stretch that improves flexibility and releases tension in the spine.',
      benefits: ['Improves flexibility', 'Releases tension', 'Strengthens core'],
    },
    {
      name: 'Chakrasana',
      image: 'https://i.pinimg.com/564x/e8/26/e9/e826e9a40d45c78668fb65c2cb4edf75.jpg',
      duration: '3 min',
      difficulty: 'Beginner',
      description:
        'Classic yoga pose that strengthens arms and shoulders while stretching the entire body.',
      benefits: ['Full body stretch', 'Strengthens arms', 'Improves circulation'],
    },
    {
      name: 'Bhujangasana',
      image: 'https://i.pinimg.com/564x/ef/b8/7f/efb87f83989fbaa6d7b7db48b5ac8e0c.jpg',
      duration: '4 min',
      difficulty: 'Intermediate',
      description: 'Heart-opening backbend that strengthens the spine and opens the chest.',
      benefits: ['Opens chest', 'Strengthens spine', 'Reduces stress'],
    },
    {
      name: 'Ardha Halasana',
      image: 'https://i.pinimg.com/564x/c2/80/25/c28025a877238422712e114a5267ceac.jpg',
      duration: '6 min',
      difficulty: 'Beginner',
      description: 'Calming forward fold that stretches the hamstrings and promotes introspection.',
      benefits: ['Calms mind', 'Stretches hamstrings', 'Promotes introspection'],
    },
    {
      name: 'Natrajasana',
      image: 'https://i.pinimg.com/564x/4a/7b/b9/4a7bb9ad83122e7ab2c797991cca4bee.jpg',
      duration: '8 min',
      difficulty: 'Advanced',
      description: 'Beautiful balance pose that improves focus and strengthens the entire body.',
      benefits: ['Improves balance', 'Increases focus', 'Strengthens legs'],
    },
    {
      name: 'Ushtrasana',
      image: 'https://i.pinimg.com/564x/77/bb/8a/77bb8af2c6ab8134007a53b7e7b0932c.jpg',
      duration: '5 min',
      difficulty: 'Intermediate',
      description: 'Standing pose that stretches the sides of the body and improves stability.',
      benefits: ['Side body stretch', 'Improves stability', 'Enhances balance'],
    },
  ]

  const mantras = [
    {
      title: 'Om Mani Padme Hum',
      sanskrit: 'ॐ मणि पद्मे हूँ',
      meaning: 'The jewel in the lotus',
      purpose: 'Cultivates compassion and purifies the mind of negative emotions.',
      duration: '10 min',
    },
    {
      title: 'Lokah Samastah Sukhino Bhavantu',
      sanskrit: 'लोकाः समस्ताः सुखिनो भवन्तु',
      meaning: 'May all beings everywhere be happy and free',
      purpose: 'Promotes universal love and peace for all living beings.',
      duration: '8 min',
    },
    {
      title: 'Om Shanti Shanti Shanti',
      sanskrit: 'ॐ शांति शांति शांति',
      meaning: 'Peace, peace, peace',
      purpose: 'Brings inner peace and removes obstacles to spiritual growth.',
      duration: '5 min',
    },
    {
      title: 'So Hum',
      sanskrit: 'सो हम्',
      meaning: 'I am that',
      purpose: 'Connects you to your true nature and the universal consciousness.',
      duration: '12 min',
    },
  ]

  const calmingMusic = [
    {
      title: 'Forest Meditation',
      artist: 'Nature Sounds',
      duration: '20 min',
      genre: 'Ambient',
      description: 'Peaceful forest sounds with gentle rain and bird songs to calm the mind.',
      mood: ['Peaceful', 'Natural', 'Meditative'],
    },
    {
      title: 'Tibetan Singing Bowls',
      artist: 'Healing Frequencies',
      duration: '15 min',
      genre: 'Healing',
      description:
        'Traditional Tibetan singing bowls create harmonic vibrations for deep relaxation.',
      mood: ['Healing', 'Sacred', 'Deep'],
    },
    {
      title: 'Ocean Waves',
      artist: 'Coastal Recordings',
      duration: '30 min',
      genre: 'Nature',
      description: 'Gentle ocean waves recorded at sunset for ultimate relaxation and sleep.',
      mood: ['Calming', 'Rhythmic', 'Soothing'],
    },
    {
      title: 'Zen Garden',
      artist: 'Mindful Music',
      duration: '25 min',
      genre: 'Instrumental',
      description:
        'Soft instrumental music inspired by Japanese zen gardens and mindfulness practice.',
      mood: ['Zen', 'Focused', 'Serene'],
    },
  ]

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800'
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800'
      case 'Advanced':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  interface YogaCardProps {
    name: string
    image: string
    duration: string
    difficulty: string
    description: string
    benefits: string[]
  }

  const YogaCard: React.FC<YogaCardProps> = ({
    name,
    image,
    duration,
    difficulty,
    description,
    benefits,
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 40vw, 100vw"
        />
        <div className="absolute top-3 left-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(difficulty)}`}
          >
            {difficulty}
          </span>
        </div>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
          <Clock className="w-3 h-3 text-indigo-600" />
          <span className="text-xs font-medium text-[#001f4d]">{duration}</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-bold text-xl text-[#001f4d] mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>

        <div className="space-y-3">
          <p className="text-xs font-semibold text-[#001f4d]">Benefits:</p>
          <div className="flex flex-wrap gap-2">
            {benefits.slice(0, 3).map((benefit) => (
              <span
                key={benefit}
                className="bg-indigo-50 text-indigo-700 text-xs px-3 py-1 rounded-full font-medium"
              >
                {benefit}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={`star-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <button
            type="button"
            className="bg-[#001f4d] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#001437] transition-colors duration-200"
          >
            Start Practice
          </button>
        </div>
      </div>
    </motion.div>
  )

  interface MantraCardProps {
    title: string
    sanskrit: string
    meaning: string
    purpose: string
    duration: string
  }

  const MantraCard: React.FC<MantraCardProps> = ({
    title,
    sanskrit,
    meaning,
    purpose,
    duration,
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-xl text-[#001f4d]">{title}</h3>
        <div className="flex items-center space-x-1 bg-indigo-50 px-3 py-1 rounded-full">
          <Clock className="w-3 h-3 text-indigo-600" />
          <span className="text-xs font-medium text-[#001f4d]">{duration}</span>
        </div>
      </div>

      <div className="text-center mb-4 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl">
        <p className="text-2xl font-bold text-[#001f4d] mb-2">{sanskrit}</p>
        <p className="text-sm italic text-gray-600">"{meaning}"</p>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed mb-4">{purpose}</p>

      <button
        type="button"
        className="w-full bg-[#001f4d] text-white py-3 rounded-lg font-semibold hover:bg-[#001437] transition-colors duration-200 flex items-center justify-center space-x-2"
      >
        <Play className="w-4 h-4" />
        <span>Begin Chanting</span>
      </button>
    </motion.div>
  )

  interface MusicCardProps {
    title: string
    artist: string
    duration: string
    genre: string
    description: string
    mood: string[]
  }

  const MusicCard: React.FC<MusicCardProps> = ({
    title,
    artist,
    duration,
    genre,
    description,
    mood,
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-bold text-xl text-[#001f4d]">{title}</h3>
          <p className="text-gray-500 text-sm">by {artist}</p>
        </div>
        <div className="text-right">
          <div className="bg-indigo-50 px-3 py-1 rounded-full mb-1">
            <span className="text-xs font-medium text-[#001f4d]">{duration}</span>
          </div>
          <span className="text-xs text-gray-500">{genre}</span>
        </div>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>

      <div className="space-y-3 mb-4">
        <p className="text-xs font-semibold text-[#001f4d]">Mood:</p>
        <div className="flex flex-wrap gap-2">
          {mood.map((m) => (
            <span
              key={m}
              className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full font-medium"
            >
              {m}
            </span>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="w-full bg-[#001f4d] text-white py-3 rounded-lg font-semibold hover:bg-[#001437] transition-colors duration-200 flex items-center justify-center space-x-2"
      >
        <Play className="w-4 h-4" />
        <span>Play Now</span>
      </button>
    </motion.div>
  )

  return (
    <>
      <NavBar currentPage="activities" />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-white to-blue-50 py-20 pt-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4 text-black font-bold">
              Mindful Activities
            </h1>
            <h2 className="text-2xl sm:text-3xl mb-6 text-[#001f4d] font-bold">
              Find Your Inner Peace
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover inner peace through yoga, mantras, and calming music. Your journey to
              mindfulness starts here with carefully curated activities designed for your
              well-being.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Tabs Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-[#001f4d] rounded-2xl p-2 inline-flex space-x-2">
              {[
                { id: 'yoga', label: 'Yoga Asanas', icon: '🧘‍♀️' },
                { id: 'mantras', label: 'Sacred Mantras', icon: '🕉️' },
                { id: 'music', label: 'Calming Music', icon: '🎵' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center space-x-2 text-white ${
                    activeTab === tab.id
                      ? 'bg-white bg-opacity-20 shadow-lg'
                      : 'hover:bg-white hover:bg-opacity-10 hover:shadow-md'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Yoga Tab */}
          {activeTab === 'yoga' && (
            <div className="space-y-8">
              <div className="text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl font-bold text-[#001f4d] mb-4"
                >
                  Yoga Asanas for Mindfulness
                </motion.h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Practice these beautiful poses to strengthen your body and calm your mind. Each
                  asana is designed to bring balance and peace.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {yogaAsanas.map((asana) => (
                  <YogaCard key={asana.name} {...asana} />
                ))}
              </div>
            </div>
          )}

          {/* Mantras Tab */}
          {activeTab === 'mantras' && (
            <div className="space-y-8">
              <div className="text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl font-bold text-[#001f4d] mb-4"
                >
                  Sacred Mantras for Inner Peace
                </motion.h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Recite these ancient mantras to find inner peace and spiritual connection. Let the
                  vibrations guide you to tranquility.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {mantras.map((mantra) => (
                  <MantraCard key={mantra.title} {...mantra} />
                ))}
              </div>
            </div>
          )}

          {/* Music Tab */}
          {activeTab === 'music' && (
            <div className="space-y-8">
              <div className="text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl font-bold text-[#001f4d] mb-4"
                >
                  Calming Sounds for Meditation
                </motion.h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Immerse yourself in peaceful music and nature sounds for meditation and
                  relaxation. Let the sounds wash away your stress.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {calmingMusic.map((music) => (
                  <MusicCard key={music.title} {...music} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-indigo-50 to-blue-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#001f4d] mb-4">Ready to Begin Your Journey?</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of students who have found peace and clarity through our mindful
              activities. Start your transformation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/chat"
                className="bg-[#001f4d] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#001437] transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                href="/dashboard"
                className="bg-[#001f4d] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#001437] transition-colors"
              >
                Dashboard
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer className="mt-16" />
    </>
  )
}
