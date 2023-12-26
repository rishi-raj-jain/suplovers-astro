export const languages = {
  es: "Es",
  en: "En",
};

export const defaultLang = "es";
export const showDefaultLang = false;

export const ui = {
  es: {
    "nav.home": "Inicio",
    "nav.tours": "Tours",
    "nav.classes": "Clases",
    "nav.rentals": "Alquileres",
    "nav.aboutUs": "Nosotros",
    "nav.contact": "Contacto",
    "nav.blog": "Blog",
  },
  en: {
    "nav.home": "Home",
    "nav.tours": "Tours",
    "nav.classes": "Classes",
    "nav.rentals": "Rentals",
    "nav.aboutUs": "About Us",
    "nav.contact": "Contact",
    "nav.blog": "Blog",
  },
} as const;

export const routes = {
  es: {
    home: "",
    tours: "tours",
    classes: "clases",
    rentals: "alquileres",
    aboutUs: "nosotros",
    contact: "contacto",
    blog: "blog",
  },

  en: {
    home: "",
    tours: "tours",
    classes: "classes",
    rentals: "rentals",
    aboutUs: "about-us",
    contact: "contact",
    blog: "blog",
  },
};
