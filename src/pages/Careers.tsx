import { useState, useRef, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { GlowingCard } from "@/components/ui/glowing-card";
import { JobApplyForm } from "@/components/careers/JobApplyForm";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Rocket,
  Users,
  Zap,
  Laptop,
  BookOpen,
  Calendar,
  Heart,
  ChevronLeft,
  ChevronRight,
  Upload,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { API_BASE_URL } from "@/config/api";

// Job type definition
interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  category: string;
  description: string;
  skills?: string[];
}

// Hero Section
function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToPositions = () => {
    document
      .getElementById("open-positions")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden gradient-hero"
    >
      <BackgroundBeams className="opacity-30" />

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container-wide relative z-10 text-center py-20 pt-32">
        {/* Badge */}
        <div className="animate-on-scroll opacity-0 stagger-1">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/80 text-sm font-medium mb-8 backdrop-blur-sm border border-primary-foreground/10">
            <Sparkles className="w-4 h-4 text-accent" />
            We're Hiring
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-on-scroll opacity-0 stagger-2 font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground max-w-4xl mx-auto leading-tight mb-6">
          Join the <span className="text-gradient">WMSols</span> Family
        </h1>

        {/* Subheadline */}
        <p className="animate-on-scroll opacity-0 stagger-3 text-xl md:text-2xl text-primary-foreground/80 font-medium mb-4">
          Build Innovative Digital Products with Us
        </p>

        <p className="animate-on-scroll opacity-0 stagger-4 text-lg text-primary-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          At WMSols, we believe in empowering passionate individuals to create
          technology that makes a real difference. Join a team where your ideas
          matter, your growth is prioritized, and your work has impact.
        </p>

        {/* CTA Button */}
        <div className="animate-on-scroll opacity-0 stagger-5">
          <Button
            variant="hero"
            size="xl"
            onClick={scrollToPositions}
            className="group"
          >
            View Open Roles
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}

// Culture Section
function CultureSection() {
  const benefits = [
    { icon: Laptop, label: "Remote/Hybrid Options" },
    { icon: BookOpen, label: "Learning Budget" },
    { icon: Clock, label: "Flexible Hours" },
    { icon: Calendar, label: "Team Events" },
    { icon: Heart, label: "Health Benefits" },
    { icon: Rocket, label: "Career Growth" },
  ];

  const values = [
    {
      title: "Innovation",
      description: "We encourage bold ideas and creative problem-solving.",
    },
    {
      title: "Collaboration",
      description: "Together, we achieve more than we ever could alone.",
    },
    {
      title: "Growth",
      description: "Continuous learning and development are in our DNA.",
    },
    {
      title: "Diversity",
      description: "We celebrate unique perspectives and backgrounds.",
    },
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Our Culture
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Where Passion Meets Purpose
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're building a workplace where talented individuals thrive,
            collaborate, and create exceptional digital experiences together.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <GlowingCard key={index} className="p-6 text-center">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {value.description}
              </p>
            </GlowingCard>
          ))}
        </div>

        {/* Benefits */}
        <div className="bg-card rounded-2xl p-8 shadow-card">
          <h3 className="font-heading text-2xl font-semibold text-foreground text-center mb-8">
            Perks & Benefits
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <span className="text-sm font-medium text-foreground text-center">
                  {benefit.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Why WMSols Section
function WhyWMSolsSection() {
  const features = [
    {
      icon: Rocket,
      title: "Growth Opportunities",
      description:
        "Clear career paths, mentorship programs, and regular promotions. We invest in your professional development with training budgets and conference attendance.",
    },
    {
      icon: Users,
      title: "Supportive Team Environment",
      description:
        "Work alongside talented, friendly professionals who lift each other up. Our collaborative culture ensures no one faces challenges alone.",
    },
    {
      icon: Zap,
      title: "Cutting-Edge Projects",
      description:
        "Work on innovative products using the latest technologies. From AI integrations to cloud-native solutions, you'll stay at the forefront of tech.",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Why Join Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why WMSols?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're not just building software—we're building careers and a
            community of exceptional individuals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <GlowingCard key={index} className="p-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </GlowingCard>
          ))}
        </div>
      </div>
    </section>
  );
}

// Open Positions Section
function OpenPositionsSection() {
  const [filter, setFilter] = useState("All");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  const positions: Job[] = [
    {
      id: "1",
      title: "Senior Full-Stack Developer",
      location: "Remote",
      type: "Full-Time",
      category: "Engineering",
      description:
        "Lead the development of scalable web applications using React, Node.js, and cloud technologies. Mentor junior developers and drive technical decisions.",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
    },
    {
      id: "2",
      title: "UI/UX Designer",
      location: "Hybrid - Lahore",
      type: "Full-Time",
      category: "Design",
      description:
        "Create beautiful, intuitive user experiences for our clients. Work closely with developers to bring designs to life with pixel-perfect precision.",
      skills: ["Figma", "Adobe XD", "Prototyping"],
    },
    {
      id: "3",
      title: "DevOps Engineer",
      location: "Remote",
      type: "Full-Time",
      category: "Engineering",
      description:
        "Build and maintain CI/CD pipelines, manage cloud infrastructure, and ensure high availability of our production systems.",
      skills: ["Docker", "Kubernetes", "AWS"],
    },
    {
      id: "4",
      title: "Project Manager",
      location: "On-site - Karachi",
      type: "Full-Time",
      category: "Management",
      description:
        "Coordinate cross-functional teams, manage client relationships, and ensure successful delivery of digital projects.",
      skills: ["Agile", "Scrum", "Jira"],
    },
    {
      id: "5",
      title: "Junior React Developer",
      location: "Remote",
      type: "Full-Time",
      category: "Engineering",
      description:
        "Join our frontend team to build modern web applications. Great opportunity for developers with 1-2 years of React experience.",
      skills: ["React", "JavaScript", "CSS"],
    },
    {
      id: "6",
      title: "Content Writer",
      location: "Remote",
      type: "Part-Time",
      category: "Marketing",
      description:
        "Create compelling content for our blog, case studies, and marketing materials. Tech industry experience preferred.",
      skills: ["SEO", "Copywriting", "Research"],
    },
  ];

  const categories = ["All", ...new Set(positions.map((p) => p.category))];
  const filteredPositions =
    filter === "All"
      ? positions
      : positions.filter((p) => p.category === filter);

  const handleApplyClick = (job: Job) => {
    setSelectedJob(job);
    setIsApplyModalOpen(true);
  };

  return (
    <section id="open-positions" className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Open Positions
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Find Your Next Role
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore opportunities to join our growing team and make an impact.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200",
                filter === category
                  ? "bg-accent text-accent-foreground shadow-glow"
                  : "bg-card text-muted-foreground hover:bg-secondary hover:text-foreground shadow-card"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {filteredPositions.map((position) => (
            <GlowingCard key={position.id} className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {position.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {position.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {position.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Briefcase className="w-4 h-4" />
                      {position.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {position.description}
                  </p>
                  {position.skills && position.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {position.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex-shrink-0">
                  <Button
                    variant="accent"
                    className="group w-full md:w-auto"
                    onClick={() => handleApplyClick(position)}
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </GlowingCard>
          ))}
        </div>
      </div>

      {/* Apply Modal */}
      <JobApplyForm
        job={selectedJob}
        isOpen={isApplyModalOpen}
        onClose={() => {
          setIsApplyModalOpen(false);
          setSelectedJob(null);
        }}
      />
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "Senior Developer",
      tenure: "3 years at WMSols",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      quote:
        "Joining WMSols was the best career decision I've made. The team is incredibly supportive, and I've grown more in three years here than in my entire previous career. The projects are challenging but rewarding.",
    },
    {
      name: "Ahmed Khan",
      role: "UI/UX Designer",
      tenure: "2 years at WMSols",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote:
        "The creative freedom I have here is unmatched. WMSols trusts its designers to push boundaries and try new things. Plus, the work-life balance is genuinely respected—not just talked about.",
    },
    {
      name: "Fatima Malik",
      role: "Project Manager",
      tenure: "4 years at WMSols",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote:
        "What sets WMSols apart is the genuine care for employee wellbeing. From flexible hours to mental health days, they walk the talk. I've never felt more valued in my professional life.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Team Voices
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Team Says
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Card */}
            <GlowingCard className="p-8 md:p-12 text-center">
              <div className="mb-6">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full mx-auto object-cover ring-4 ring-accent/20"
                />
              </div>
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              <div>
                <p className="font-heading font-semibold text-foreground">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-accent font-medium">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].tenure}
                </p>
              </div>
            </GlowingCard>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-card shadow-card flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={cn(
                      "w-2.5 h-2.5 rounded-full transition-all duration-200",
                      currentIndex === index
                        ? "bg-accent w-8"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-card shadow-card flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Form Section
function CTAFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const fd = new FormData(e.currentTarget as HTMLFormElement);

    await fetch(`${API_BASE_URL}/general-application`, {
      method: "POST",
      body: fd,
    });
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Don't See Your Role?
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Send Us Your Resume
            </h2>
            <p className="text-muted-foreground text-lg">
              We're always looking for talented individuals. Submit your resume
              and we'll reach out when a matching opportunity arises.
            </p>
          </div>

          {isSubmitted ? (
            <GlowingCard className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                Application Received!
              </h3>
              <p className="text-muted-foreground">
                Thank you for your interest in joining WMSols. We'll review your
                resume and get back to you if there's a match.
              </p>
            </GlowingCard>
          ) : (
            <GlowingCard className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resume" className="text-foreground">
                    Resume / CV
                  </Label>
                  <div className="relative">
                    <input
                      id="resume"
                      name="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className="flex items-center gap-4 p-4 rounded-lg border border-input bg-background hover:bg-secondary/50 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Upload className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-1 min-w-0">
                        {fileName ? (
                          <p className="text-sm font-medium text-foreground truncate">
                            {fileName}
                          </p>
                        ) : (
                          <>
                            <p className="text-sm font-medium text-foreground">
                              Upload your resume
                            </p>
                            <p className="text-xs text-muted-foreground">
                              PDF, DOC, or DOCX (Max 5MB)
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin mr-2" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            </GlowingCard>
          )}
        </div>
      </div>
    </section>
  );
}

// Main Careers Page
export default function Careers() {
  return (
    <Layout>
      <HeroSection />
      <CultureSection />
      <WhyWMSolsSection />
      <OpenPositionsSection />
      <TestimonialsSection />
      <CTAFormSection />
    </Layout>
  );
}
