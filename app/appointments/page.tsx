'use client'

import { motion } from 'framer-motion'
import {
  AlertCircle,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  Mail,
  Phone,
  User,
} from 'lucide-react'
import { useState } from 'react'
import { NavBar } from '@/components/layout/navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

interface Professional {
  id: string
  name: string
  title: string
  specialization: string
  image: string
  availableDays: string[]
}

interface TimeSlot {
  time: string
  available: boolean
}

export default function AppointmentsPage() {
  const [selectedProfessional, setSelectedProfessional] = useState<string>('')
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    notes: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const professionals: Professional[] = [
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      title: 'Clinical Psychologist',
      specialization: 'Anxiety, Depression, Trauma',
      image: '/professionals/sarah.jpg',
      availableDays: ['Monday', 'Wednesday', 'Friday'],
    },
    {
      id: '2',
      name: 'Dr. Michael Chen',
      title: 'Psychiatrist',
      specialization: 'Medication Management, Mood Disorders',
      image: '/professionals/michael.jpg',
      availableDays: ['Tuesday', 'Thursday', 'Saturday'],
    },
    {
      id: '3',
      name: 'Dr. Emily Rodriguez',
      title: 'Licensed Therapist',
      specialization: 'Stress Management, Life Transitions',
      image: '/professionals/emily.jpg',
      availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    },
    {
      id: '4',
      name: 'Dr. James Wilson',
      title: 'Family Counselor',
      specialization: 'Relationship Issues, Family Therapy',
      image: '/professionals/james.jpg',
      availableDays: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
    },
  ]

  const timeSlots: TimeSlot[] = [
    { time: '9:00 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '11:00 AM', available: false },
    { time: '1:00 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '4:00 PM', available: false },
    { time: '5:00 PM', available: true },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log({
      professional: selectedProfessional,
      date: selectedDate,
      time: selectedTime,
      ...formData,
    })
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setSelectedProfessional('')
      setSelectedDate('')
      setSelectedTime('')
      setFormData({
        name: '',
        email: '',
        phone: '',
        reason: '',
        notes: '',
      })
    }, 3000)
  }

  const isFormValid =
    selectedProfessional &&
    selectedDate &&
    selectedTime &&
    formData.name &&
    formData.email &&
    formData.phone &&
    formData.reason

  return (
    <>
      <NavBar />

      {/* Main Content */}
      <section className="w-full bg-gradient-to-b from-white to-blue-50 py-20 pt-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
              Book an <span className="text-[#090847be]">Appointment</span>
            </h1>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto mb-6">
              Schedule a session with one of our experienced mental health professionals. Choose a
              time that works best for you and take the first step towards better mental health.
            </p>
          </motion.div>

          {/* Info Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-12 max-w-4xl mx-auto"
          >
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100">
                <AlertCircle className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Before You Book</h3>
                <ul className="text-blue-700 space-y-1 text-sm">
                  <li>• All appointments are confidential and HIPAA compliant</li>
                  <li>• Sessions are typically 50 minutes long</li>
                  <li>• Please arrive 5 minutes early for your first appointment</li>
                  <li>• Cancellations must be made 24 hours in advance</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Professionals */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Professionals</h2>
              <div className="space-y-4">
                {professionals.map((prof) => (
                  <Card
                    key={prof.id}
                    className={`cursor-pointer transition-all ${
                      selectedProfessional === prof.id
                        ? 'border-indigo-500 ring-2 ring-indigo-200 shadow-lg'
                        : 'border-slate-200 hover:border-indigo-300 hover:shadow-md'
                    }`}
                    onClick={() => setSelectedProfessional(prof.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                          {prof.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-900">{prof.name}</h3>
                          <p className="text-sm text-indigo-600 mb-1">{prof.title}</p>
                          <p className="text-xs text-slate-500">{prof.specialization}</p>
                          <p className="text-xs text-slate-400 mt-2">
                            Available: {prof.availableDays.join(', ')}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <Card className="bg-white border border-slate-200 shadow-lg">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        Appointment Booked!
                      </h3>
                      <p className="text-slate-600">
                        We've sent a confirmation email to {formData.email}. You'll receive a
                        reminder 24 hours before your appointment.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <h2 className="text-2xl font-bold text-slate-900 mb-6">
                        Appointment Details
                      </h2>

                      {/* Date Selection */}
                      <div className="space-y-2">
                        <Label htmlFor="date" className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          Select Date
                        </Label>
                        <Input
                          id="date"
                          type="date"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full"
                          required
                        />
                      </div>

                      {/* Time Selection */}
                      <div className="space-y-2">
                        <Label className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          Select Time
                        </Label>
                        <div className="grid grid-cols-4 gap-2">
                          {timeSlots.map((slot) => (
                            <Button
                              key={slot.time}
                              type="button"
                              variant={selectedTime === slot.time ? 'default' : 'outline'}
                              className={`${
                                !slot.available ? 'opacity-50 cursor-not-allowed' : ''
                              } ${selectedTime === slot.time ? 'bg-indigo-600' : ''}`}
                              onClick={() => slot.available && setSelectedTime(slot.time)}
                              disabled={!slot.available}
                            >
                              {slot.time}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <hr className="my-6" />

                      <h3 className="text-xl font-semibold text-slate-900 mb-4">
                        Your Information
                      </h3>

                      {/* Name */}
                      <div className="space-y-2">
                        <Label htmlFor="name" className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(123) 456-7890"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                        />
                      </div>

                      {/* Reason */}
                      <div className="space-y-2">
                        <Label htmlFor="reason" className="flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          Reason for Visit
                        </Label>
                        <Select
                          value={formData.reason}
                          onValueChange={(value) => setFormData({ ...formData, reason: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a reason" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="initial-consultation">
                              Initial Consultation
                            </SelectItem>
                            <SelectItem value="anxiety">Anxiety Management</SelectItem>
                            <SelectItem value="depression">Depression Support</SelectItem>
                            <SelectItem value="stress">Stress Management</SelectItem>
                            <SelectItem value="relationship">Relationship Issues</SelectItem>
                            <SelectItem value="trauma">Trauma Therapy</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Additional Notes */}
                      <div className="space-y-2">
                        <Label htmlFor="notes">Additional Notes (Optional)</Label>
                        <Textarea
                          id="notes"
                          placeholder="Any additional information you'd like to share..."
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          rows={4}
                        />
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-6 text-lg"
                        disabled={!isFormValid}
                      >
                        Confirm Appointment
                      </Button>

                      {!selectedProfessional && (
                        <p className="text-sm text-amber-600 text-center">
                          Please select a professional from the list to continue
                        </p>
                      )}
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Emergency Notice */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-red-50 border border-red-200 rounded-2xl p-6 mt-12 max-w-4xl mx-auto"
          >
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-red-100">
                <AlertCircle className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-800 mb-2">In Case of Emergency</h3>
                <p className="text-red-700 text-sm">
                  If you're experiencing a mental health crisis, please don't wait for an
                  appointment. Call the National Suicide Prevention Lifeline at <strong>988</strong>{' '}
                  or visit your nearest emergency room.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
