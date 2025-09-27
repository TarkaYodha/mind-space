'use client'

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { NavBar } from '@/components/layout/navbar';

export default function Reference() {
    return (
        <>
            {/* Use unified navbar */}
            <NavBar currentPage="reference" />

            {/* Hero Section */}
            <section
                className="w-full flex flex-col items-center justify-center"
                style={{
                    minHeight: "calc(100vh - 72px)", // Adjust if your navbar height changes
                    background: "linear-gradient(to bottom, #dbeafe 0%, #eff6ff 100%)",
                    paddingTop: "100px",
                    paddingBottom: "60px",
                }}
            >
                <h1
                    className="text-4xl md:text-5xl font-extrabold text-black mb-6 text-center px-4"
                    style={{ fontFamily: "'Caprasimo', cursive", maxWidth: "900px" }}
                >
                    "Because Reaching Out Is the First Step to Healing"
                </h1>
                <p
                    className="text-lg md:text-2xl text-gray-700 text-center max-w-2xl px-4 mt-1.5"
                    style={{ fontFamily: "'Pacifico', cursive" }}
                >
                    "Healing begins with connection. Reach out to these specialists and support lines whenever you need."
                </p>
            </section>

            <section className="w-full py-16 px-6 md:px-20 bg-white">
                <h2 className="text-4xl md:text-5xl font-[Caprasimo] text-black mb-4 text-center">
                    You Are Not Alone — Help Is Here
                </h2>

                <p className="text-lg md:text-xl text-blue-900 text-center italic mb-12 font-sans">
                    Your mental health matters. These verified professionals and helplines are here to support you.
                </p>

                <div className="space-y-8">
                    {/* Dr. Soumitra Pathare */}
                    <div className="w-full border border-gray-400 p-6 rounded-2xl shadow-lg 
                        hover:border-blue-300 hover:border-2 transition transform duration-300">
                        <h3 className="text-2xl font-semibold mb-2 text-black">Dr. Soumitra Pathare</h3>
                        <p className="text-black mb-1"><strong>Specialization:</strong> Psychiatrist, Mental Health Policy Expert</p>
                        <p className="text-black mb-1"><strong>About:</strong> Director at Centre for Mental Health Law & Policy, Pune. Worked with WHO on mental health rights.</p>
                        <p className="text-black mb-2"><strong>Phone:</strong> +91 98765 43210</p>
                        <a href="https://cmhlp.org" target="_blank" className="text-blue-400 underline">Website</a>
                    </div>

                    {/* Dr. Shyam Bhat */}
                    <div className="w-full border border-gray-400 p-6 rounded-2xl shadow-lg 
                        hover:border-blue-300 hover:border-2 transition transform duration-300">
                        <h3 className="text-2xl font-semibold mb-2 text-black">Dr. Shyam Bhat</h3>
                        <p className="text-black mb-1"><strong>Specialization:</strong> Psychiatrist & Psychotherapist</p>
                        <p className="text-black mb-1"><strong>About:</strong> Founder of MindTalk, Bengaluru. Integrative psychiatry for depression & anxiety.</p>
                        <p className="text-black mb-2"><strong>Phone:</strong> +91 91234 56789</p>
                        <a href="https://mindtalk.in" target="_blank" className="text-blue-400 underline">Website</a>
                    </div>

                    {/* Dr. Nimesh Desai */}
                    <div className="w-full border border-gray-400 p-6 rounded-2xl shadow-lg 
                        hover:border-blue-300 hover:border-2 transition transform duration-300">
                        <h3 className="text-2xl font-semibold mb-2 text-black">Dr. Nimesh Desai</h3>
                        <p className="text-black mb-1"><strong>Specialization:</strong> Psychiatrist</p>
                        <p className="text-black mb-1"><strong>About:</strong> Former Director, IHBAS Delhi. 30+ years in mental health research & treatment.</p>
                        <p className="text-black mb-2"><strong>Phone:</strong> +91 99887 66554</p>
                    </div>

                    {/* Dr. Seema Hingorrany */}
                    <div className="w-full border border-gray-400 p-6 rounded-2xl shadow-lg 
                        hover:border-blue-300 hover:border-2 transition transform duration-300">
                        <h3 className="text-2xl font-semibold mb-2 text-black">Dr. Seema Hingorrany</h3>
                        <p className="text-black mb-1"><strong>Specialization:</strong> Clinical Psychologist</p>
                        <p className="text-black mb-1"><strong>About:</strong> Mumbai-based therapist specializing in trauma recovery, depression, and anxiety disorders.</p>
                        <p className="text-black mb-2"><strong>Phone:</strong> +91 98765 12345</p>
                        <a href="https://www.drseemahingorrany.com" target="_blank" className="text-blue-400 underline">Website</a>
                    </div>

                    {/* Dr. Samir Parikh */}
                    <div className="w-full border border-gray-400 p-6 rounded-2xl shadow-lg 
                        hover:border-blue-300 hover:border-2 transition transform duration-300">
                        <h3 className="text-2xl font-semibold mb-2 text-black">Dr. Samir Parikh</h3>
                        <p className="text-black mb-1"><strong>Specialization:</strong> Psychiatrist</p>
                        <p className="text-black mb-1"><strong>About:</strong> Director of Mental Health & Behavioural Sciences, Fortis Healthcare. Conducts workshops on depression & stress management.</p>
                        <p className="text-black mb-2"><strong>Phone:</strong> +91 91234 99887</p>
                        <a href="https://www.fortishealthcare.com" target="_blank" className="text-blue-400 underline">Website</a>
                    </div>
                </div>

                {/* Emergency Helpline */}
                <div className="mt-12 text-center">
                    <p className="text-xl font-semibold text-red-600 mb-2">National Mental Health Helpline</p>
                    <p className="text-2xl font-bold text-red-700">1800-599-0019</p>
                </div>

                <p className="text-center text-gray-700 italic mt-8 font-sans">
                    All the doctors listed above are independent professionals. This website provides references for awareness and support only. Please consult them directly for medical advice.
                </p>
            </section>

            {/* Footer */}
            <footer className="bg-[#0F172A] text-white py-10 mt-0">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <h2 className="text-3xl font-bold mb-4">MindSpace</h2>
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
                </div>
            </footer>
        </>
    );
}