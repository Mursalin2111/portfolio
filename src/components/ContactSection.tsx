import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=mursalinhossan86@gmail.com", "_blank");
    toast({ title: "Opening Gmail!", description: "Compose your message in Gmail." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 surface-elevated" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">Contact</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Let's <span className="gradient-text">Get In Touch</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              Have a project in mind or just want to say hello? Feel free to reach out. I'm always open to
              discussing new opportunities and ideas.
            </p>
            {[
              { icon: Mail, label: "Email", value: "mursalinhossan86@gmail.com" },
              { icon: MapPin, label: "Location", value: "Bangladesh" },
              { icon: Phone, label: "Phone", value: "+8801771996696" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-center gap-4 cursor-pointer group"
                whileHover={{ x: 10 }}
              >
                <motion.div
                  className="p-3 rounded-xl gradient-bg text-primary-foreground"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <item.icon size={20} />
                </motion.div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <motion.p className="font-medium group-hover:gradient-text transition-all duration-300">
                    {item.value}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-5"
          >
            {[
              { name: "name" as const, placeholder: "Your Name", type: "text" },
              { name: "email" as const, placeholder: "Your Email", type: "email" },
            ].map((field, i) => (
              <motion.input
                key={field.name}
                type={field.type}
                placeholder={field.placeholder}
                required
                value={form[field.name]}
                onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                className="w-full px-5 py-4 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileFocus={{ scale: 1.02, boxShadow: "0 0 20px hsl(var(--primary) / 0.3)" }}
              />
            ))}
            <motion.textarea
              placeholder="Your Message"
              rows={5}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-5 py-4 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              whileFocus={{ scale: 1.02, boxShadow: "0 0 20px hsl(var(--primary) / 0.3)" }}
            />
            <motion.button
              type="submit"
              className="gradient-bg text-primary-foreground px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.2, x: 20 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative flex items-center gap-2">
                Send Message 
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Send size={18} />
                </motion.span>
              </span>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
