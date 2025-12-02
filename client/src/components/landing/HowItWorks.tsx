import { motion } from "framer-motion";
import { Lightbulb, Hammer, Settings, Rocket } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Ideate",
    description: "Share your vision with Idea Lab and get AI-powered feasibility analysis and planning.",
  },
  {
    icon: Hammer,
    number: "02",
    title: "Build",
    description: "Use Thynx Studio to hire talent and manage your project with agile workflows.",
  },
  {
    icon: Settings,
    number: "03",
    title: "Manage",
    description: "Host your code on Thynx Repo with secure version control and collaboration tools.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch",
    description: "Sell your creation on Thynx Free Market with zero commission on your earnings.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium text-sm uppercase tracking-wide mb-3">
            Process
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From concept to market in four simple steps, powered by AI at every stage.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white relative z-10 p-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 relative shadow-md border border-primary/20">
                    <step.icon className="w-7 h-7 text-primary" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-white text-xs font-semibold flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
