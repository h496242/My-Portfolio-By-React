import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:hello@example.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, creative
              projects, and innovative ideas.
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              © {currentYear} Portfolio. Made with{" "}
              <Heart className="w-4 h-4 text-red-500" /> using React &
              TailwindCSS
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
