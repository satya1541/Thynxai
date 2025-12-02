import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import ideaLabImage from "@assets/generated_images/ai_dashboard_ui_mockup.png";
import studioImage from "@assets/generated_images/project_management_ui_mockup.png";
import repoImage from "@assets/generated_images/code_repository_ui_mockup.png";
import marketImage from "@assets/generated_images/digital_marketplace_ui_mockup.png";

const services = [
  {
    id: "idea-lab",
    badge: "AI Consultant",
    title: "Idea Lab",
    subtitle: "Your Personal AI Consultant",
    description: "Transform your innovative ideas into actionable plans. Our AI analyzes feasibility, requirements, limitations, and provides detailed cost estimates.",
    benefits: [
      "AI-powered feasibility analysis",
      "Comprehensive requirement mapping",
      "Estimated cost breakdown",
      "Recommended team structure",
      "Full Idea Lab Report generation",
    ],
    image: ideaLabImage,
    cta: "Start Your Idea",
    reverse: false,
    bgClass: "bg-white",
  },
  {
    id: "thynx-studio",
    badge: "Project Management",
    title: "Thynx Studio",
    subtitle: "Your Personal Technology Officer",
    description: "Find the right talent and manage your projects efficiently. Integrated with major platforms for seamless hiring and project tracking.",
    benefits: [
      "LinkedIn, Fiverr, Indeed integration",
      "Agile task boards like Jira",
      "Issue tracking and bug workflows",
      "Employee cost estimation",
      "Transparent payment management",
    ],
    image: studioImage,
    cta: "Build Your Team",
    reverse: true,
    bgClass: "bg-gray-50",
  },
  {
    id: "thynx-repo",
    badge: "Version Control",
    title: "Thynx Repo",
    subtitle: "Your Personal AI Repository",
    description: "A powerful in-house repository for secure code hosting. Manage branches, commits, and collaborate with your team seamlessly.",
    benefits: [
      "GitHub/GitLab-style interface",
      "Secure team access controls",
      "Branch and commit management",
      "Collaborative development tools",
      "AI-powered code reviews",
    ],
    image: repoImage,
    cta: "Host Your Code",
    reverse: false,
    bgClass: "bg-white",
  },
  {
    id: "thynx-market",
    badge: "Marketplace",
    title: "Thynx Free Market",
    subtitle: "Zero Commission Marketplace",
    description: "List and sell your software, apps, or source code. Keep 100% of your earnings with transparent delivery and direct payments.",
    benefits: [
      "Zero commission on sales",
      "Product preview capabilities",
      "Direct payment processing",
      "Transparent delivery system",
      "Full creator earnings retention",
    ],
    image: marketImage,
    cta: "Start Selling",
    reverse: true,
    bgClass: "bg-gray-50",
  },
];

export default function ServiceDetails() {
  return (
    <div>
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 lg:py-28 ${service.bgClass}`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                service.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              <motion.div
                initial={{ opacity: 0, x: service.reverse ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={service.reverse ? "lg:order-2" : ""}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4 shadow-sm">
                  {service.badge}
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-500 mb-4">{service.subtitle}</p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Button className="gap-2" data-testid={`button-${service.id}`}>
                  {service.cta}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: service.reverse ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={service.reverse ? "lg:order-1" : ""}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100/50">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto"
                    data-testid={`img-${service.id}`}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
