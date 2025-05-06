// components/ContactForm.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // Add loading state

  // Replace the old handleSubmit function with this one
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Något gick fel");
      }

      toast.success("Tack! Vi återkommer snart.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error: any) {
      console.error("Submit error:", error);
      toast.error(`Kunde inte skicka: ${error.message}`);
    } finally {
      setLoading(false); // Stop loading once the request is done
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="flex flex-col md:flex-row gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Kontakta Oss
              </h2>
              <p className="text-gray-600 mb-6">
                Har du frågor eller vill boka en tid? Fyll i formuläret så
                återkommer vi inom 24 timmar.
              </p>

              <div className="space-y-4">
                <ContactInfo icon="phone" label="Telefon" value="072-9729000" />
                <ContactInfo
                  icon="email"
                  label="E-post"
                  value="info@moreito.se"
                />
                <ContactInfo
                  icon="location"
                  label="Adress"
                  value="Skolgatan 12, Karlstad"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-1/2"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <InputField
                  id="name"
                  label="Ditt Namn"
                  type="text"
                  placeholder="För- och efternamn"
                  value={formData.name}
                  onChange={(val) => setFormData({ ...formData, name: val })}
                  required
                />

                <InputField
                  id="email"
                  label="Din E-post"
                  type="email"
                  placeholder="din@epost.se"
                  value={formData.email}
                  onChange={(val) => setFormData({ ...formData, email: val })}
                  required
                />

                <InputField
                  id="phone"
                  label="Ditt Telefonnummer"
                  type="tel"
                  placeholder="070-123 45 67"
                  value={formData.phone}
                  onChange={(val) => setFormData({ ...formData, phone: val })}
                />

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Meddelande
                  </label>
                  <textarea
                    id="message"
                    placeholder="Berätta om ditt projekt..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white text-lg py-2 px-6 rounded-lg font-medium transition relative"
                  disabled={loading} // Disable button when loading
                >
                  {loading ? (
                    <div className="absolute inset-0 flex justify-center items-center">
                      <div className="w-6 h-6 border-4 border-t-transparent border-orange-400 rounded-full animate-spin"></div>
                    </div>
                  ) : (
                    "Skicka Meddelande"
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

// 🟠 Subcomponents

type InputFieldProps = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
};

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  required = false,
}) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
    />
  </div>
);

type ContactInfoProps = {
  icon: "phone" | "email" | "location";
  label: string;
  value: string;
};

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, label, value }) => {
  const getIcon = () => {
    switch (icon) {
      case "phone":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        );
      case "email":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        );
      case "location":
        return (
          <>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </>
        );
    }
  };

  return (
    <div className="flex items-start">
      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-orange-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {getIcon()}
        </svg>
      </div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-medium text-gray-900">{value}</p>
      </div>
    </div>
  );
};
