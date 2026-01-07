import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Target,
  Heart,
  Zap,
  Users,
  Award,
  Calendar,
  Globe,
  Coffee,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { icon: Award, value: "50+", label: "Projects Delivered" },
  { icon: Users, value: "30+", label: "Happy Clients" },
  { icon: Calendar, value: "5+", label: "Years Experience" },
  { icon: Globe, value: "15+", label: "Countries Served" },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We pursue excellence in every line of code, every design decision, and every client interaction. Mediocrity is not in our vocabulary.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "We're genuinely passionate about technology and its potential to transform businesses. This passion drives us to deliver our best work.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "We stay at the forefront of technology, constantly learning and adopting new tools and methodologies to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe the best results come from true partnership. We work closely with our clients, treating their goals as our own.",
  },
];

const team = [
  {
    name: "Farhan Waheed",
    role: "Founder & CEO",
    image: "/images/farhan-ceo.jpeg",
    bio: "15+ years in software development. Former Tech Lead at Google.",
  },
  {
    name: "Talha Mukati",
    role: "CTO",
    image: "/images/talha-cto.jpg",
    bio: "Full-stack expert. Previously at Microsoft and Amazon.",
  },
  {
    name: "Muhammad Usama Bilal",
    role: "Head of Operations",
    image: "/images/Usama.jpeg",
    bio: "An executive in charge of the daily operations of an organization. After the CEO, and report directly to them, acting on their behalf in their absence.",
  },
  {
    name: "Fahad Khan",
    role: "HR Manager",
    image: "/images/fahad-hr.jpg",
    bio: "Experienced HR professional specializing in talent acquisition, employee engagement, and organizational development.",
  },
];

const milestones = [
  {
    year: "2019",
    title: "Founded",
    description: "Started with a vision to build meaningful digital solutions",
  },
  {
    year: "2020",
    title: "First Enterprise Client",
    description:
      "Partnered with Fortune 500 company for digital transformation",
  },
  {
    year: "2021",
    title: "Team Growth",
    description: "Expanded to 15+ talented professionals",
  },
  {
    year: "2022",
    title: "Global Reach",
    description: "Served clients across 15+ countries",
  },
  {
    year: "2023",
    title: "Innovation Award",
    description: "Recognized for excellence in software development",
  },
];

export default function About() {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation();
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              About Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Building Digital Excellence, Together
            </h1>
            <p className="text-xl text-primary-foreground/70 leading-relaxed">
              We're a team of passionate technologists, designers, and
              strategists dedicated to crafting digital solutions that make a
              real difference.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="py-16 bg-background -mt-12 relative z-10"
      >
        <div className="container-wide">
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 ${
              statsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <stat.icon size={32} className="mx-auto text-accent mb-4" />
                <div className="text-3xl font-heading font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4 mb-6">
                Born from a Passion for Problem-Solving
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  WMSols was founded in 2019 with a simple yet powerful mission:
                  to help businesses harness the full potential of technology.
                  What started as a small team of passionate developers has
                  grown into a full-service digital agency serving clients
                  worldwide.
                </p>
                <p>
                  We believe that great software isn't just about code—it's
                  about understanding people, solving real problems, and
                  creating experiences that delight users. This philosophy
                  guides everything we do, from initial consultation to final
                  deployment and beyond.
                </p>
                <p>
                  Today, we're proud to have helped over 50 businesses transform
                  their digital presence, and we're just getting started. Our
                  commitment to excellence, innovation, and genuine partnership
                  continues to drive us forward.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-medium">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4 mb-6">
              What Drives Us
            </h2>
            <p className="text-muted-foreground text-lg">
              Our values aren't just words on a page—they're the principles that
              guide our decisions, shape our culture, and define how we work
              with clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`bg-card rounded-2xl p-8 shadow-card border border-border/50 transition-all duration-500 ${
                  valuesVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <value.icon size={28} className="text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Our Journey
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4 mb-6">
              Milestones & Achievements
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center gap-8 transition-all duration-500 ${
                    timelineVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  } ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    } pl-12 md:pl-0`}
                  >
                    <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 inline-block">
                      <span className="text-accent font-heading font-bold text-2xl">
                        {milestone.year}
                      </span>
                      <h3 className="font-heading font-semibold text-lg mt-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full md:-translate-x-1/2 ring-4 ring-background" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="section-padding gradient-subtle">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4 mb-6">
              Meet the People Behind WMSols
            </h2>
            <p className="text-muted-foreground text-lg">
              A diverse team of experts united by a shared passion for
              technology and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className={`group bg-card rounded-2xl overflow-hidden shadow-card card-hover border border-border/50 transition-all duration-500 ${
                  teamVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading font-semibold text-lg">
                    {member.name}
                  </h3>
                  <span className="text-accent text-sm font-medium">
                    {member.role}
                  </span>
                  <p className="text-muted-foreground text-sm mt-2">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <Coffee size={48} className="mx-auto text-accent mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-10">
            Ready to start your next project? We'd love to hear your ideas and
            explore how we can help bring them to life.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact" className="group">
              Start a Conversation
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
