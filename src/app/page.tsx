"use client";
import Image from "next/image";

const features = [
  {
    title: "Personalized Lessons",
    desc: "Every session is tailored to your unique learning style and goals.",
    icon: (
      <svg className="w-7 h-7 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
    ),
  },
  {
    title: "Expert Tutors",
    desc: "Learn from passionate, experienced math educators.",
    icon: (
      <svg className="w-7 h-7 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 15s1.5-2 4-2 4 2 4 2" /></svg>
    ),
  },
  {
    title: "Flexible Scheduling",
    desc: "Book sessions at times that work for you, online or in-person.",
    icon: (
      <svg className="w-7 h-7 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 2v4M8 2v4M3 10h18" /></svg>
    ),
  },
];

const tutors = [
  {
    name: "Alex Kim",
    role: "Founder & Lead Tutor",
    img: "/tutor1.png",
    bio: "10+ years teaching math from algebra to calculus. Loves making math intuitive and fun.",
  },
  {
    name: "Priya Patel",
    role: "Math Specialist",
    img: "/tutor2.png",
    bio: "Patient, creative, and passionate about helping students build confidence in math.",
  },
  {
    name: "Jordan Lee",
    role: "SAT/ACT Coach",
    img: "/tutor3.png",
    bio: "Test prep expert with a knack for breaking down tricky problems.",
  },
];

const testimonials = [
  {
    quote: "Math Made Simple helped me finally understand algebra. My grades and confidence soared!",
    name: "Samantha R.",
  },
  {
    quote: "The tutors are so patient and explain things in a way that just makes sense.",
    name: "Michael T.",
  },
  {
    quote: "Flexible scheduling and online sessions made it easy to fit tutoring into our busy life.",
    name: "Parent of 8th Grader",
  },
];

const pricing = [
  {
    title: "Starter",
    price: "$40",
    period: "/hr",
    features: ["1-on-1 Tutoring", "Personalized Plan", "Homework Help"],
    highlight: false,
  },
  {
    title: "Plus",
    price: "$150",
    period: "/4 sessions",
    features: ["Everything in Starter", "Progress Reports", "Priority Scheduling"],
    highlight: true,
  },
  {
    title: "Group",
    price: "$25",
    period: "/student/hr",
    features: ["Small Group (2-4)", "Collaborative Learning", "Affordable"],
    highlight: false,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-30 w-full bg-background/80 backdrop-blur border-b border-neutral-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="text-2xl font-bold tracking-tight text-indigo-400">Math Made Simple</span>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#features" className="hover:text-indigo-300 transition-colors">Features</a>
            <a href="#tutors" className="hover:text-indigo-300 transition-colors">Tutors</a>
            <a href="#testimonials" className="hover:text-indigo-300 transition-colors">Testimonials</a>
            <a href="#pricing" className="hover:text-indigo-300 transition-colors">Pricing</a>
          </div>
          <a href="#contact" className="ml-4 px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow transition-colors">Get Started</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 flex flex-col items-center text-center gap-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">Master Math, <span className="text-indigo-400">Simply</span></h1>
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl">Personalized math tutoring for all ages. Build confidence, boost grades, and discover the joy of learning math with expert tutors who care.</p>
        <a href="#contact" className="mt-4 px-8 py-3 rounded bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-lg shadow transition-colors">Book a Free Consultation</a>
      </section>

      {/* Features */}
      <section id="features" className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        {features.map((f, i) => (
          <div key={i} className="bg-neutral-900 rounded-xl p-8 flex flex-col items-center text-center shadow hover:shadow-lg transition-shadow group border border-neutral-800">
            <div className="mb-4 group-hover:scale-110 transition-transform">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-indigo-300">{f.title}</h3>
            <p className="text-neutral-400">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Tutor Showcase */}
      <section id="tutors" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Meet Our Tutors</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {tutors.map((t, i) => (
            <div key={i} className="bg-neutral-900 rounded-xl p-6 flex flex-col items-center text-center border border-neutral-800 shadow hover:shadow-lg transition-shadow group">
              <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-indigo-500 group-hover:scale-105 transition-transform bg-neutral-800">
                <Image src={t.img} alt={t.name} width={96} height={96} className="object-cover w-full h-full" />
              </div>
              <h4 className="text-lg font-semibold text-indigo-300 mb-1">{t.name}</h4>
              <span className="text-sm text-neutral-400 mb-2">{t.role}</span>
              <p className="text-neutral-300 text-sm">{t.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">What Students Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-neutral-900 rounded-xl p-6 border border-neutral-800 shadow hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <svg className="w-8 h-8 text-indigo-400 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21H5a2 2 0 01-2-2V7a2 2 0 012-2h4l2-2 2 2h4a2 2 0 012 2v12a2 2 0 01-2 2z" /></svg>
              <blockquote className="italic text-neutral-300 mb-2">"{t.quote}"</blockquote>
              <span className="text-sm text-neutral-400">- {t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="pricing" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pricing.map((p, i) => (
            <div key={i} className={`rounded-xl p-8 border shadow flex flex-col items-center text-center transition-all ${p.highlight ? "bg-indigo-700/30 border-indigo-500 scale-105 shadow-xl" : "bg-neutral-900 border-neutral-800"}`}>
              <h3 className="text-xl font-semibold mb-2 text-indigo-300">{p.title}</h3>
              <div className="text-3xl font-bold mb-2 text-white">{p.price}<span className="text-lg font-normal text-neutral-400">{p.period}</span></div>
              <ul className="mb-6 text-neutral-300">
                {p.features.map((f, j) => (
                  <li key={j} className="mb-1">{f}</li>
                ))}
              </ul>
              <a href="#contact" className={`mt-auto px-5 py-2 rounded bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow transition-colors ${p.highlight ? "" : "opacity-80 hover:opacity-100"}`}>Start Now</a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-8 text-center text-neutral-500 text-sm">
        <div className="mb-2">&copy; {new Date().getFullYear()} Math Made Simple. All rights reserved.</div>
        <div>
          Built with <a href="https://nextjs.org/" className="hover:underline">Next.js</a> & <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>.
        </div>
      </footer>
    </div>
  );
}
