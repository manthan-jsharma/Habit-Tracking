"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Users,
  DollarSign,
  BarChart2,
  Clock,
  Calendar,
  Briefcase,
  ChevronRight,
  Monitor,
  Smartphone,
  Zap,
  Shield,
  Award,
} from "lucide-react";
import LegacyLanding from "@/component/LegacyLanding";
export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("individuals");
  const [activeFeatureTab, setActiveFeatureTab] = useState("timeTracking");
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    features: false,
    howItWorks: false,
    usp: false,
    pricing: false,
    testimonials: false,
    cta: false,
  });

  const sectionRefs = {
    hero: useRef(null),
    features: useRef(null),
    howItWorks: useRef(null),
    usp: useRef(null),
    pricing: useRef(null),
    testimonials: useRef(null),
    cta: useRef(null),
  };

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setVisibleSections((prev) => ({
            ...prev,
            [sectionId]: true,
          }));
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all section refs
    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Feature tabs data
  const featureTabs = [
    {
      id: "timeTracking",
      title: "Time Tracking",
      icon: <Clock className="h-5 w-5" />,
      description:
        "Track time with a simple start/stop timer. Log hours, categorize activities, and analyze where your time goes.",
      image: "/images/timetrack.png?height=400&width=600",
      features: [
        "One-click timer start/stop",
        "Manual time entry",
        "Activity categorization",
        "Detailed time reports",
        "Calendar integration",
      ],
    },
    {
      id: "attendance",
      title: "Attendance",
      icon: <Users className="h-5 w-5" />,
      description:
        "Monitor team attendance, track work hours, and manage time-off requests all in one place.",
      image: "/images/attendancetrack.png?height=400&width=600",
      features: [
        "Attendance tracking dashboard",
        "Time-off management",
        "Late/absence notifications",
        "Shift scheduling",
        "Attendance reports",
      ],
    },
    {
      id: "payroll",
      title: "Payroll",
      icon: <DollarSign className="h-5 w-5" />,
      description:
        "Calculate payroll based on tracked hours, manage expenses, and export reports for accounting.",
      image: "/images/payrolltrack.png?height=400&width=600",
      features: [
        "Automatic payroll calculation",
        "Tax management",
        "Payment processing",
        "Expense tracking",
        "Financial reporting",
      ],
    },
    {
      id: "analytics",
      title: "Analytics",
      icon: <BarChart2 className="h-5 w-5" />,
      description:
        "Visualize your progress with detailed charts and analytics. Identify patterns and optimize your habits.",
      image: "/images/analytictrack.png?height=400&width=600",
      features: [
        "Interactive dashboards",
        "Habit streak tracking",
        "Progress visualization",
        "Performance insights",
        "Goal achievement metrics",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="h-8 w-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-md flex items-center justify-center mr-2">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  HabitPro
                </span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
              >
                Testimonials
              </a>
              <a
                href="#faq"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
              >
                FAQ
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="hidden md:block text-gray-600 hover:text-indigo-600 transition-colors duration-300"
              >
                Log in
              </Link>
              <Link
                href="/dashboard"
                className="hidden md:flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
              >
                Get Started Free
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden bg-gray-100 p-2 rounded-md"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#features"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Testimonials
              </a>
              <a
                href="#faq"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                FAQ
              </a>
              <Link
                href="/login"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Log in
              </Link>
              <Link
                href="/dashboard"
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600"
              >
                Get Started Free
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        ref={sectionRefs.hero}
        className="relative overflow-hidden bg-white pt-16 pb-32"
      >
        <div
          className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${
            visibleSections.hero
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-gray-900 sm:mt-5 sm:text-5xl lg:mt-6 xl:text-6xl">
                <span className="block">Transform Your Habits</span>
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Track Your Time
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                HabitPro combines powerful habit tracking with professional time
                management. Track habits, manage projects, monitor team
                attendance, and handle payroll—all in one platform.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      href="/dashboard"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:scale-105"
                    >
                      Start for free
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#features"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10 transition-all duration-300"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>

              {/* Trusted by */}
              <div className="mt-12">
                <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider lg:text-left">
                  Trusted by companies like:
                </p>
                <div className="mt-5 flex justify-center lg:justify-start">
                  <div className="flex flex-wrap items-center space-x-8">
                    <div className="flex justify-center">
                      <div className="text-gray-400 font-bold text-xl">
                        Microsoft
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="text-gray-400 font-bold text-xl">
                        Airbnb
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="text-gray-400 font-bold text-xl">
                        Spotify
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <video
                    className="w-full"
                    src="/habitprogress.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 hidden lg:block">
          <div className="w-40 h-40 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full opacity-70 transform translate-x-20 -translate-y-10"></div>
        </div>
        <div className="absolute bottom-0 left-0 hidden lg:block">
          <div className="w-64 h-64 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full opacity-70 transform -translate-x-20 translate-y-20"></div>
        </div>
      </section>

      <LegacyLanding />

      {/* Features Section with Tabs */}
      <section
        id="features"
        ref={sectionRefs.features}
        className="py-16 bg-gray-50"
      >
        <div
          className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${
            visibleSections.features
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
              Features
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Everything you need to boost productivity
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              HabitPro combines habit tracking with professional time management
              tools
            </p>
          </div>

          {/* Feature Tabs */}
          <div className="mt-16 max-w-5xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200">
              {featureTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFeatureTab(tab.id)}
                  className={`flex items-center px-6 py-4 text-sm font-medium transition-all duration-300 border-b-2 -mb-px ${
                    activeFeatureTab === tab.id
                      ? "text-indigo-600 border-indigo-600"
                      : "text-gray-500 border-transparent hover:text-indigo-500 hover:border-indigo-300"
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="mt-8">
              {featureTabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`transition-all duration-500 ${
                    activeFeatureTab === tab.id
                      ? "opacity-100 block"
                      : "opacity-0 hidden"
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {tab.title}
                      </h3>
                      <p className="text-gray-600 mb-6">{tab.description}</p>
                      <ul className="space-y-3">
                        {tab.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <a
                          href="#"
                          className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-300"
                        >
                          Learn more about {tab.title.toLowerCase()}
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                    <div className="order-1 md:order-2">
                      <div className="rounded-lg overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                        <img
                          src={tab.image || "/images/time.pg"}
                          alt={`${tab.title} feature`}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Cards */}
          <div className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="relative p-6 bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-2 group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-100 to-indigo-200 flex items-center justify-center mb-4 group-hover:from-indigo-200 group-hover:to-indigo-300 transition-all duration-300">
                <Clock className="h-6 w-6 text-indigo-600" />
              </div>
              <img
                src="/images/time.png"
                alt="Attendance Tracking"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                Time Tracking Kiosk
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Track time with a simple start/stop timer. Log hours, categorize
                activities, and analyze where your time goes.
              </p>
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-8 w-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                New
              </div>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-2 group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center mb-4 group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <img
                src="/images/attendance.png"
                alt="Attendance Tracking"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />

              <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                Attendance Tracking
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Monitor team attendance, track work hours, and manage time-off
                requests all in one place.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-2 group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center mb-4 group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
              <img
                src="/images/payroll.png"
                alt="Attendance Tracking"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                Payroll Management
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Calculate payroll based on tracked hours, manage expenses, and
                export reports for accounting.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-2 group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-100 to-yellow-200 flex items-center justify-center mb-4 group-hover:from-yellow-200 group-hover:to-yellow-300 transition-all duration-300">
                <BarChart2 className="h-6 w-6 text-yellow-600" />
              </div>
              <img
                src="/images/habit.png"
                alt="Attendance Tracking"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">
                Habit Analytics
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Visualize your progress with detailed charts and analytics.
                Identify patterns and optimize your habits.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-2 group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-100 to-red-200 flex items-center justify-center mb-4 group-hover:from-red-200 group-hover:to-red-300 transition-all duration-300">
                <Calendar className="h-6 w-6 text-red-600" />
              </div>
              <img
                src="/images/project.png"
                alt="Attendance Tracking"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                Project Management
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Organize habits into projects, set milestones, and track
                progress toward your goals.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-2 group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-100 to-indigo-200 flex items-center justify-center mb-4 group-hover:from-indigo-200 group-hover:to-indigo-300 transition-all duration-300">
                <Briefcase className="h-6 w-6 text-indigo-600" />
              </div>
              <img
                src="/images/budget.png"
                alt="Attendance Tracking"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                Budget Tracking
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Set budgets for projects, track expenses, and ensure your team
                stays within financial limits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Compatibility */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
              Available Everywhere
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Access HabitPro on any device
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Stay productive whether you're at your desk or on the go
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center p-6 bg-gray-50 rounded-xl transition-all duration-300 hover:shadow-md hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                <Monitor className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Web App</h3>
              <p className="mt-2 text-base text-gray-500">
                Access all features from any modern web browser. No installation
                required.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl transition-all duration-300 hover:shadow-md hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                <Smartphone className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Mobile App</h3>
              <p className="mt-2 text-base text-gray-500">
                Track habits and time on the go with our iOS and Android apps.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl transition-all duration-300 hover:shadow-md hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Offline Mode</h3>
              <p className="mt-2 text-base text-gray-500">
                Keep tracking even without internet connection. Data syncs when
                you're back online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        ref={sectionRefs.pricing}
        className="py-16 bg-gray-50"
      >
        <div
          className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${
            visibleSections.pricing
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
              Pricing
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Plans for everyone
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Choose the perfect plan for your needs
            </p>
          </div>

          <div className="mt-8 pb-12 sm:mt-12 sm:pb-16 lg:pb-24">
            <div className="relative">
              <div className="flex justify-center mb-8">
                <div className="relative z-0 inline-flex shadow-sm rounded-md">
                  <button
                    type="button"
                    onClick={() => setActiveTab("individuals")}
                    className={`relative inline-flex items-center px-4 py-2 rounded-l-md border text-sm font-medium ${
                      activeTab === "individuals"
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    For Individuals
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("teams")}
                    className={`relative inline-flex items-center px-4 py-2 rounded-r-md border text-sm font-medium ${
                      activeTab === "teams"
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    For Teams
                  </button>
                </div>
              </div>

              {activeTab === "individuals" ? (
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
                  {/* Free Plan */}
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <div className="p-6">
                      <h3 className="text-lg font-medium text-gray-900">
                        Free
                      </h3>
                      <p className="mt-4">
                        <span className="text-4xl font-extrabold text-gray-900">
                          $0
                        </span>
                        <span className="text-base font-medium text-gray-500">
                          /month
                        </span>
                      </p>
                      <p className="mt-4 text-sm text-gray-500">
                        Perfect for getting started with habit tracking
                      </p>
                      <ul className="mt-6 space-y-4">
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <p className="ml-3 text-sm text-gray-700">
                            Up to 5 habits
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <p className="ml-3 text-sm text-gray-700">
                            Basic time tracking
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <p className="ml-3 text-sm text-gray-700">
                            Weekly reports
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="px-6 py-4 bg-gray-50">
                      <Link
                        href="/dashboard"
                        className="block w-full text-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-300"
                      >
                        Start for free
                      </Link>
                    </div>
                  </div>

                  {/* Pro Plan */}
                  <div className="bg-white rounded-lg shadow-lg border-2 border-indigo-600 overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative">
                    <div className="absolute top-0 inset-x-0">
                      <div className="h-1 w-full bg-gradient-to-r from-indigo-600 to-purple-600"></div>
                    </div>
                    <div className="absolute top-0 right-0 -mt-3 mr-3">
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                        Popular
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-medium text-gray-900">Pro</h3>
                      <p className="mt-4">
                        <span className="text-4xl font-extrabold text-gray-900">
                          $9.99
                        </span>
                        <span className="text-base font-medium text-gray-500">
                          /month
                        </span>
                      </p>
                      <p className="mt-4 text-sm text-gray-500">
                        For serious habit builders and professionals
                      </p>
                      <ul className="mt-6 space-y-4">
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <p className="ml-3 text-sm text-gray-700">
                            Unlimited habits
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <p className="ml-3 text-sm text-gray-700">
                            Advanced time tracking
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <p className="ml-3 text-sm text-gray-700">
                            Detailed analytics
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <p className="ml-3 text-sm text-gray-700">
                            Project management
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <p className="ml-3 text-sm text-gray-700">
                            Priority support
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="px-6 py-4 bg-gray-50">
                      <Link
                        href="/dashboard"
                        className="block w-full text-center rounded-md border border-transparent bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300"
                      >
                        Get started
                      </Link>
                    </div>
                  </div>

                  {/* Premium Plan */}
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <div className="p-6">
                      <h3 className="text-lg font-medium text-gray-900">
                        Premium
                      </h3>
                      <p className="mt-4">
                        <span className="text-4xl font-extrabold text-gray-900">
                          $19.99
                        </span>
                        <span className="text-base font-medium text-gray-500">
                          /month
                        </span>
                      </p>
                      <p className="mt-4 text-sm text-gray-500">
                        For power users who need all features
                      </p>
                      <ul className="mt-6 space-y-4">
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <p className="ml-3 text-sm text-gray-700">
                            Everything in Pro
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <p className="ml-3 text-sm text-gray-700">
                            Payroll management
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <p className="ml-3 text-sm text-gray-700">
                            Budget tracking
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <p className="ml-3 text-sm text-gray-700">
                            API access
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <p className="ml-3 text-sm text-gray-700">
                            Dedicated support
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="px-6 py-4 bg-gray-50">
                      <Link
                        href="/dashboard"
                        className="block w-full text-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-300"
                      >
                        Get started
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
                  {/* Team Basic */}
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <div className="p-6">
                      <h3 className="text-lg font-medium text-gray-900">
                        Team Basic
                      </h3>
                      <p className="mt-4">
                        <span className="text-4xl font-extrabold text-gray-900">
                          $29
                        </span>
                        <span className="text-base font-medium text-gray-500">
                          /month
                        </span>
                      </p>
                      <p className="mt-4 text-sm text-gray-500">
                        For small teams up to 5 members
                      </p>
                      <ul className="mt-6 space-y-4">
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <p className="ml-3 text-sm text-gray-700">
                            5 team members
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <p className="ml-3 text-sm text-gray-700">
                            Team habit tracking
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <p className="ml-3 text-sm text-gray-700">
                            Basic attendance
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="px-6 py-4 bg-gray-50">
                      <Link
                        href="/dashboard"
                        className="block w-full text-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-300"
                      >
                        Get started
                      </Link>
                    </div>
                  </div>

                  {/* Team Pro */}
                  <div className="bg-white rounded-lg shadow-lg border-2 border-indigo-600 overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative">
                    <div className="absolute top-0 inset-x-0">
                      <div className="h-1 w-full bg-gradient-to-r from-indigo-600 to-purple-600"></div>
                    </div>
                    <div className="absolute top-0 right-0 -mt-3 mr-3">
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                        Popular
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-medium text-gray-900">
                        Team Pro
                      </h3>
                      <p className="mt-4">
                        <span className="text-4xl font-extrabold text-gray-900">
                          $79
                        </span>
                        <span className="text-base font-medium text-gray-500">
                          /month
                        </span>
                      </p>
                      <p className="mt-4 text-sm text-gray-500">
                        For growing teams up to 15 members
                      </p>
                      <ul className="mt-6 space-y-4">
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <p className="ml-3 text-sm text-gray-700">
                            15 team members
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <p className="ml-3 text-sm text-gray-700">
                            Advanced time tracking
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <p className="ml-3 text-sm text-gray-700">
                            Attendance management
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <p className="ml-3 text-sm text-gray-700">
                            Basic payroll
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <p className="ml-3 text-sm text-gray-700">
                            Team analytics
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="px-6 py-4 bg-gray-50">
                      <Link
                        href="/dashboard"
                        className="block w-full text-center rounded-md border border-transparent bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300"
                      >
                        Get started
                      </Link>
                    </div>
                  </div>

                  {/* Team Enterprise */}
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <div className="p-6">
                      <h3 className="text-lg font-medium text-gray-900">
                        Enterprise
                      </h3>
                      <p className="mt-4">
                        <span className="text-4xl font-extrabold text-gray-900">
                          $199
                        </span>
                        <span className="text-base font-medium text-gray-500">
                          /month
                        </span>
                      </p>
                      <p className="mt-4 text-sm text-gray-500">
                        For large teams and organizations
                      </p>
                      <ul className="mt-6 space-y-4">
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <p className="ml-3 text-sm text-gray-700">
                            Unlimited team members
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <p className="ml-3 text-sm text-gray-700">
                            Full payroll management
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <p className="ml-3 text-sm text-gray-700">
                            Budget tracking
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <p className="ml-3 text-sm text-gray-700">
                            Advanced reporting
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <p className="ml-3 text-sm text-gray-700">
                            Dedicated account manager
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="px-6 py-4 bg-gray-50">
                      <Link
                        href="/dashboard"
                        className="block w-full text-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-300"
                      >
                        Contact sales
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
              Security & Compliance
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Your data is safe with us
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              We take security and privacy seriously
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Enterprise-grade Security
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Your data is encrypted in transit and at rest. We use
                industry-standard security practices to keep your information
                safe.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Compliance Ready
              </h3>
              <p className="mt-2 text-base text-gray-500">
                HabitPro is compliant with GDPR, CCPA, and other privacy
                regulations. We provide tools to help you maintain compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        ref={sectionRefs.testimonials}
        className="py-16 bg-gray-50"
      >
        <div
          className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${
            visibleSections.testimonials
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
              Testimonials
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Trusted by thousands
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              See what our users have to say about HabitPro
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xl">
                  S
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold">Sarah Johnson</h4>
                  <p className="text-gray-600">Marketing Director</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "HabitPro has transformed how our marketing team tracks projects
                and manages time. The payroll integration saves us hours every
                month!"
              </p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold">Michael Chen</h4>
                  <p className="text-gray-600">Software Developer</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "As a developer, I love how HabitPro helps me track coding time
                and build better habits. The analytics help me identify when I'm
                most productive."
              </p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xl">
                  A
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold">Amanda Rodriguez</h4>
                  <p className="text-gray-600">Small Business Owner</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "HabitPro has been a game-changer for my small business. I can
                track employee hours, manage payroll, and monitor project
                budgets all in one place."
              </p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta"
        ref={sectionRefs.cta}
        className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600"
      >
        <div
          className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${
            visibleSections.cta
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to transform your productivity?
            </h2>
            <p className="mt-4 text-xl text-indigo-100">
              Join thousands of individuals and teams who have improved their
              habits and time management with HabitPro.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105"
                >
                  Get started for free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Product
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-indigo-600 transition-colors duration-300"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-indigo-600 transition-colors duration-300"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-indigo-600 transition-colors duration-300"
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-indigo-600 transition-colors duration-300"
                  >
                    Updates
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Company
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-indigo-600 transition-colors duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-indigo-600 transition-colors duration-300"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-indigo-600 transition-colors duration-300"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-indigo-600 transition-colors duration-300"
                  >
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Resources
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-indigo-600 transition-colors duration-300"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-indigo-600 transition-colors duration-300"
                  >
                    Guides
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-indigo-600 transition-colors duration-300"
                  >
                    API Docs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-indigo-600 transition-colors duration-300"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Legal
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-indigo-600 transition-colors duration-300"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-indigo-600 transition-colors duration-300"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-indigo-600 transition-colors duration-300"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-indigo-600 transition-colors duration-300"
                  >
                    GDPR
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 text-center">
              &copy; 2025 HabitPro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
