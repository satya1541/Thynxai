import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  {
    value: 2500,
    suffix: "+",
    label: "Projects Launched",
    description: "Successful launches",
  },
  {
    value: 85,
    suffix: "%",
    label: "Time Saved",
    description: "On average per project",
  },
  {
    value: 40,
    suffix: "%",
    label: "Cost Reduction",
    description: "Compared to traditional methods",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Based on user feedback",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium text-sm uppercase tracking-wide mb-3">
            Results
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Proven Outcomes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real numbers from real projects. See how ThynxAI is transforming the way teams build technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-8 rounded-2xl bg-white border border-gray-100/50 shadow-md"
              data-testid={`stat-${index}`}
            >
              <p className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-lg font-medium text-gray-900 mb-1">
                {stat.label}
              </p>
              <p className="text-sm text-gray-500">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
