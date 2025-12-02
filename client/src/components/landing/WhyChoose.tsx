import { motion } from "framer-motion";
import { 
  Zap, 
  Shield, 
  Clock, 
  TrendingUp, 
  Users, 
  HeartHandshake 
} from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "AI-Powered Speed",
    description: "Reduce development time by 60% with intelligent automation and AI assistance.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and secure infrastructure to protect your projects.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Access your projects, team, and marketplace anytime, anywhere in the world.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "From solo projects to enterprise teams, our platform grows with you.",
  },
  {
    icon: Users,
    title: "Global Talent Pool",
    description: "Connect with verified professionals from leading platforms worldwide.",
  },
  {
    icon: HeartHandshake,
    title: "Zero Hidden Fees",
    description: "Transparent pricing with no commission on marketplace sales.",
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

export default function WhyChoose() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium text-sm uppercase tracking-wide mb-3">
            Why ThynxAI
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Companies Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of teams who trust ThynxAI to build and launch their products faster.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="flex gap-4"
              data-testid={`benefit-${index}`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 shadow-md border border-primary/20 flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
