/* =========================================================
   S & I DENTAL CLINIC — CONFIG
   config.js → shared constants used across pages
   ========================================================= */

const SI_CONFIG = {
  clinicName: "S & I Dental Clinic",
  phonePrimary: "+917979907496",
  phoneSecondary: "+917667682481",
  phonePrimaryDisplay: "+91 79799 07496",
  phoneSecondaryDisplay: "+91 76676 82481",
  whatsappNumber: "917979907496",
  whatsappMessage: "Hello S & I Dental Clinic, I'd like to book an appointment.",
  address: {
    line1: "1st Floor, beside Rominus Pizza, Opposite HDFC Bank,",
    line2: "Near Sabajpura, Fiya Colony, Khagaul Road,",
    line3: "Phulwari Sharif, Patna – 801505",
  },
  hours: "Mon – Sun, 9:00 AM – 8:00 PM",
  social: {
    instagram: "https://www.instagram.com/s_and_i_dentalclinic/",
    facebook: "https://www.facebook.com/profile.php?id=61593747390566&mibextid=rS40aB7S9Ucbxw6v",
    linkedin: "https://www.linkedin.com/in/naghma-hena-noori/",
    googleBusiness: "https://maps.app.goo.gl/NCQa6WLJMNJQxua57",
  },
};

// Convenience helper: builds a wa.me link with the default message
function siWhatsAppLink() {
  const base = `https://wa.me/${SI_CONFIG.whatsappNumber}`;
  const text = encodeURIComponent(SI_CONFIG.whatsappMessage);
  return `${base}?text=${text}`;
}
