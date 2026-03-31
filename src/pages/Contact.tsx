import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Twitter, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="pt-24 pb-16">
      <div className="section-padding">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-accent font-display text-sm tracking-[0.3em] uppercase mb-4">Get in Touch</p>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight mb-4">Contact Us</h1>
          <p className="text-muted-foreground max-w-lg mb-12">Have a question, collaboration idea, or just want to say hi? We'd love to hear from you.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          >
            {submitted ? (
              <div className="glass-card rounded-xl p-8 text-center">
                <p className="font-display text-xl font-bold mb-2">Message Sent!</p>
                <p className="text-muted-foreground text-sm">We'll get back to you soon.</p>
              </div>
            ) : (
              <>
                <div>
                  <label className="font-display text-sm tracking-wider uppercase block mb-2">Name</label>
                  <input required className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm font-body focus:outline-none focus:border-accent" />
                </div>
                <div>
                  <label className="font-display text-sm tracking-wider uppercase block mb-2">Email</label>
                  <input type="email" required className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm font-body focus:outline-none focus:border-accent" />
                </div>
                <div>
                  <label className="font-display text-sm tracking-wider uppercase block mb-2">Message</label>
                  <textarea required rows={5} className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm font-body focus:outline-none focus:border-accent resize-none" />
                </div>
                <button className="w-full bg-accent text-accent-foreground py-3.5 rounded-md font-display text-sm tracking-widest uppercase hover-lift">
                  Send Message
                </button>
              </>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div className="glass-card rounded-xl p-6 flex items-start gap-4">
              <Mail size={20} className="text-accent mt-1 shrink-0" />
              <div>
                <h3 className="font-display text-sm font-semibold mb-1">Email</h3>
                <p className="text-muted-foreground text-sm">hello@kpzone.com</p>
              </div>
            </div>
            <div className="glass-card rounded-xl p-6 flex items-start gap-4">
              <MapPin size={20} className="text-accent mt-1 shrink-0" />
              <div>
                <h3 className="font-display text-sm font-semibold mb-1">Location</h3>
                <p className="text-muted-foreground text-sm">Dhaka, Bangladesh</p>
              </div>
            </div>
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-display text-sm font-semibold mb-3">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors"><Instagram size={22} /></a>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors"><Twitter size={22} /></a>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden h-48 lg:h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.8223908687!2d90.27883863281249!3d23.780887199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563b5e21a1c89!2sDhaka!5e0!3m2!1sen!2sbd!4v1711234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="KP Zone location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
