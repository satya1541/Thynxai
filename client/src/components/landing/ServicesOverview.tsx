import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Lightbulb, Users, GitBranch, ShoppingBag } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Idea Lab",
    description: "Your personal AI consultant that transforms concepts into actionable plans with feasibility analysis.",
    color: "text-amber-500",
    bgColor: "bg-amber-50",
  },
  {
    icon: Users,
    title: "Thynx Studio",
    description: "Your personal technology officer for hiring talent, managing projects, and tracking progress.",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: GitBranch,
    title: "Thynx Repo",
    description: "Your personal AI repository for secure code hosting, version control, and team collaboration.",
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: ShoppingBag,
    title: "Thynx Free Market",
    description: "Zero commission marketplace where creators keep 100% of earnings from software sales.",
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ServicesOverview() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium text-sm uppercase tracking-wide mb-3">
            Our Services
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Build
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Four powerful services designed to take your project from concept to market, all powered by cutting-edge AI technology.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card
                className="p-8 h-full hover-elevate cursor-pointer border-gray-100/50 bg-white shadow-md"
                data-testid={`card-service-${index}`}
              >
                <div className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-4 shadow-sm`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
