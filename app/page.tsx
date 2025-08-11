"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Download,
  ExternalLink,
  Calendar,
  Building,
  GraduationCap,
  Code,
  Database,
  Calculator,
  Users,
  MessageCircle,
  Lightbulb,
  Target,
  Zap,
  Menu,
  X,
  Sparkles,
  Rocket,
  Star,
} from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "education", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const experiences = [
    {
      title: "Accountant/System Executive",
      company: "R3 Factory",
      location: "Dubai",
      period: "Sep 2023 - Present",
      color: "from-electric-500 to-teal-500",
      responsibilities: [
        "Identify and resolve system issues and bugs to maintain efficiency operations",
        "Performing Odoo customizations and maintenance",
        "Management of Accounts and Petty Cash Handling",
        "Receivables / Payables Management",
        "Handle financial accounts and transactions within Odoo with accuracy",
        "Conduct bank and POS reconciliation",
        "Oversee cash flow monitoring for financial stability",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Beta Byte Technologies",
      location: "Pakistan",
      period: "May 2022 – Aug 2023",
      color: "from-neon-500 to-electric-500",
      responsibilities: [
        "Developed responsive web applications using modern frontend technologies",
        "Collaborated with design teams to implement user interfaces",
        "Optimized application performance and user experience",
        "Maintained and updated existing web applications",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Redhorn Technologies",
      location: "Pakistan",
      period: "Jan 2020 – Mar 2022",
      color: "from-sunset-500 to-coral-500",
      responsibilities: [
        "Built interactive web applications using React and modern JavaScript",
        "Implemented responsive designs and cross-browser compatibility",
        "Worked closely with backend developers for API integration",
        "Participated in code reviews and maintained coding standards",
      ],
    },
  ]

  const education = [
    {
      institution: "Oxford Home Study Centre",
      degree: "Accounting Concepts and Standards",
      period: "In Progress",
      status: "current",
      color: "from-electric-500 to-teal-500",
    },
    {
      institution: "Edwardes College Peshawar",
      degree: "Bachelor of Computer Science",
      period: "September 2023",
      status: "completed",
      color: "from-neon-500 to-electric-500",
    },
    {
      institution: "Edwardes College Peshawar",
      degree: "HSSC – Pre-Engineering",
      period: "Sept 2016 - Aug 2018",
      status: "completed",
      color: "from-amber-500 to-sunset-500",
    },
    {
      institution: "Edwardes College School (Wing-II) Peshawar",
      degree: "SSC - Sciences",
      period: "Mar 2014 - April 2016",
      status: "completed",
      color: "from-teal-500 to-neon-500",
    },
  ]

  const technicalSkills = [
    { name: "Web Development", icon: Code, color: "from-electric-500 to-teal-500" },
    { name: "Programming", icon: Rocket, color: "from-neon-500 to-electric-500" },
    { name: "UX/UI Design", icon: Target, color: "from-coral-500 to-sunset-500" },
    { name: "Graphic Designing", icon: Sparkles, color: "from-amber-500 to-coral-500" },
    { name: "MS Office Advanced", icon: Database, color: "from-teal-500 to-neon-500" },
    { name: "Odoo Customization", icon: Star, color: "from-electric-500 to-amber-500" },
  ]

  const softSkills = [
    { name: "Problem Solving", icon: Lightbulb, color: "from-amber-500 to-sunset-500" },
    { name: "Teamwork", icon: Users, color: "from-electric-500 to-teal-500" },
    { name: "Communication", icon: MessageCircle, color: "from-neon-500 to-electric-500" },
    { name: "Adaptability", icon: Zap, color: "from-coral-500 to-amber-500" },
    { name: "Critical Thinking", icon: Target, color: "from-teal-500 to-neon-500" },
    { name: "Collaboration", icon: Users, color: "from-sunset-500 to-coral-500" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-electric-400 to-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-neon-400 to-electric-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-40 left-1/2 w-80 h-80 bg-gradient-to-r from-sunset-400 to-coral-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-xl border-b border-electric-500/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-electric-400 via-teal-400 to-neon-400 bg-clip-text text-transparent animate-gradient-x">
                Faiq Naveed
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {["home", "about", "experience", "education", "skills", "contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeSection === item
                        ? "bg-gradient-to-r from-electric-500 to-teal-500 text-white shadow-lg shadow-electric-500/25"
                        : "text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-electric-500/20 hover:to-teal-500/20"
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white hover:bg-electric-500/20 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900/95 border-t border-electric-500/20">
              {["home", "about", "experience", "education", "skills", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300 ${
                    activeSection === item
                      ? "bg-gradient-to-r from-electric-500 to-teal-500 text-white"
                      : "text-slate-300 hover:text-white hover:bg-electric-500/20"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-40 h-40 mx-auto bg-gradient-to-br from-electric-400 via-teal-500 to-neon-500 rounded-full flex items-center justify-center text-white text-5xl font-bold mb-8 animate-pulse-glow shadow-2xl">
                FN
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-electric-400 via-teal-400 to-neon-400 bg-clip-text text-transparent animate-gradient-x">
                Faiq Naveed
              </h1>
              <p className="text-2xl md:text-3xl text-transparent bg-gradient-to-r from-electric-300 to-teal-300 bg-clip-text mb-6 font-semibold">
                Software Developer & System Executive
              </p>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Expertise in web development, Odoo customization, accounts management, and system operations. Skilled in
                optimizing business processes and ensuring seamless workflow automation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-electric-500 to-teal-600 hover:from-electric-600 hover:to-teal-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-electric-500/25 hover:shadow-electric-500/40 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                className="px-8 py-4 text-lg font-semibold rounded-xl bg-transparent border-2 border-teal-400 text-teal-300 hover:bg-gradient-to-r hover:from-teal-500/20 hover:to-electric-500/20 hover:text-white transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>

            <div className="flex justify-center space-x-8">
              <Link
                href="mailto:faiqnaveed05@gmail.com"
                className="text-slate-400 hover:text-electric-400 transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="w-8 h-8" />
              </Link>
              <Link
                href="https://linkedin.com/in/faiq-naveed-56526a261"
                className="text-slate-400 hover:text-teal-400 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-8 h-8" />
              </Link>
              <Link
                href="tel:+971569667624"
                className="text-slate-400 hover:text-neon-400 transition-all duration-300 transform hover:scale-110"
              >
                <Phone className="w-8 h-8" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-electric-400 to-teal-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-electric-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a dedicated Software Developer with a unique blend of technical expertise and financial acumen.
                Currently serving as an Accountant/System Executive at R3 Factory in Dubai, I specialize in bridging the
                gap between technology and business operations.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                My experience spans web development, ERP customization (particularly Odoo), and comprehensive accounts
                management. I'm passionate about optimizing business processes through technology and ensuring seamless
                workflow automation that drives productivity.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center p-4 rounded-xl bg-gradient-to-r from-electric-500/10 to-teal-500/10 border border-electric-500/20">
                  <MapPin className="w-6 h-6 text-electric-400 mr-3" />
                  <span className="text-slate-300 font-medium">Abu Hail, Dubai</span>
                </div>
                <div className="flex items-center p-4 rounded-xl bg-gradient-to-r from-neon-500/10 to-electric-500/10 border border-neon-500/20">
                  <Sparkles className="w-6 h-6 text-neon-400 mr-3" />
                  <span className="text-slate-300 font-medium">Available for work</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-electric-500/20 backdrop-blur-sm hover:shadow-xl hover:shadow-electric-500/10 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-electric-500 to-teal-500 flex items-center justify-center mr-3">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    Development Focus
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Frontend development with React, responsive design, and modern web technologies.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-teal-500/20 backdrop-blur-sm hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-teal-500 to-neon-500 flex items-center justify-center mr-3">
                      <Calculator className="w-5 h-5 text-white" />
                    </div>
                    Business Operations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Odoo customization, financial management, and system optimization for business efficiency.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-neon-400 to-electric-400 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-neon-500 to-electric-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-electric-500/20 backdrop-blur-sm hover:shadow-2xl hover:shadow-electric-500/20 transition-all duration-500 transform hover:scale-[1.02]"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-2xl text-white mb-2 flex items-center">
                        <div className={`w-3 h-8 rounded-full bg-gradient-to-b ${exp.color} mr-4`}></div>
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="flex items-center text-slate-300 text-lg">
                        <Building className="w-5 h-5 mr-2 text-electric-400" />
                        {exp.company} • {exp.location}
                      </CardDescription>
                    </div>
                    <Badge
                      className={`mt-3 md:mt-0 bg-gradient-to-r ${exp.color} text-white border-0 px-4 py-2 text-sm font-semibold`}
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start">
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2 mr-4 flex-shrink-0`}
                        ></div>
                        <span className="text-slate-300 leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-amber-400 to-sunset-400 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-sunset-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-amber-500/20 backdrop-blur-sm hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 transform hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-white flex items-center mb-3">
                        <div
                          className={`w-10 h-10 rounded-lg bg-gradient-to-r ${edu.color} flex items-center justify-center mr-3`}
                        >
                          <GraduationCap className="w-5 h-5 text-white" />
                        </div>
                        {edu.degree}
                      </CardTitle>
                      <CardDescription className="text-slate-300 text-base">{edu.institution}</CardDescription>
                    </div>
                    <Badge
                      className={`${
                        edu.status === "current"
                          ? "bg-gradient-to-r from-neon-500 to-electric-500 text-white animate-pulse"
                          : "bg-gradient-to-r from-slate-600 to-slate-700 text-slate-300"
                      } border-0 px-3 py-1 font-semibold`}
                    >
                      {edu.period}
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-coral-400 to-sunset-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-coral-500 to-sunset-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-semibold text-white mb-8 flex items-center">
                <Rocket className="w-8 h-8 mr-3 text-electric-400" />
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {technicalSkills.map((skill, index) => (
                  <Card
                    key={index}
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-electric-500/20 backdrop-blur-sm hover:shadow-xl hover:shadow-electric-500/20 transition-all duration-300 transform hover:scale-105 group"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center mr-4 group-hover:animate-pulse`}
                        >
                          <skill.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-semibold text-white text-lg">{skill.name}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-white mb-8 flex items-center">
                <Star className="w-8 h-8 mr-3 text-teal-400" />
                Soft Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <Card
                    key={index}
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-teal-500/20 backdrop-blur-sm hover:shadow-xl hover:shadow-teal-500/20 transition-all duration-300 transform hover:scale-105 group"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center mr-4 group-hover:animate-pulse`}
                        >
                          <skill.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-semibold text-white text-lg">{skill.name}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-teal-400 to-electric-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-500 to-electric-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, or potential collaborations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-electric-500/20 backdrop-blur-sm hover:shadow-2xl hover:shadow-electric-500/20 transition-all duration-500 transform hover:scale-105 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-electric-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-white text-xl mb-4">Email</h3>
                <Link
                  href="mailto:faiqnaveed05@gmail.com"
                  className="text-electric-400 hover:text-electric-300 transition-colors text-lg font-medium"
                >
                  faiqnaveed05@gmail.com
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-teal-500/20 backdrop-blur-sm hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 transform hover:scale-105 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-neon-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-white text-xl mb-4">Phone</h3>
                <Link
                  href="tel:+971569667624"
                  className="text-teal-400 hover:text-teal-300 transition-colors text-lg font-medium"
                >
                  +971 569667624
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-neon-500/20 backdrop-blur-sm hover:shadow-2xl hover:shadow-neon-500/20 transition-all duration-500 transform hover:scale-105 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-neon-500 to-electric-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                  <Linkedin className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-white text-xl mb-4">LinkedIn</h3>
                <Link
                  href="https://linkedin.com/in/faiq-naveed-56526a261"
                  className="text-neon-400 hover:text-neon-300 transition-colors flex items-center justify-center text-lg font-medium"
                >
                  Connect with me
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-12 border-t border-electric-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-electric-400 to-teal-400 bg-clip-text text-transparent">
                Faiq Naveed
              </h3>
            </div>
            <p className="text-slate-400 text-lg">© {new Date().getFullYear()} Faiq Naveed. All rights reserved.</p>
            <p className="text-slate-500 mt-2">Built with React & Next.js • Designed with passion ✨</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
