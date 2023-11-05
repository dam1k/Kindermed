export interface navLink {
  text: string;
  href: string;
}

export interface service {
  name: string;
  desc: string | string[];
  id: number;
}

export const navLinks: navLink[] = [
  {
    text: "Orarul medicilor",
    href: "/orar",
  },
  {
    text: "KinderTeam",
    href: "#team",
  },
  {
    text: "Servicii",
    href: "#servicii",
  },
  {
    text: "Pachete",
    href: "#pachete",
  },
  {
    text: "Vaccinare",
    href: "/vaccinare",
  },
  {
    text: "Blog",
    href: "/blog",
  },
  {
    text: "Contacte",
    href: "#contacts",
  },
];

export const services:service[] = [
  {
    name: "PEDIATRIE/NEONATOLOGIE",
    desc: "",
    id: 1
  },
  {
    name: "ORL",
    desc: "",
    id: 2
  },
  {
    name: "OFTALMOLOGIE",
    desc: "",
    id: 3
  },
  {
    name: "NEUROLOGIE PEDIATRICĂ",
    desc: "",
    id: 4
  },
  {
    name: "PNEUMOLOGIE",
    desc: "",
    id: 5
  },
  {
    name: "ORTOPEDIE",
    desc: "",
    id: 6
  },
  {
    name: "DERMATOLOGIE",
    desc: "",
    id: 7
  },
  {
    name: "ENDOCRINOLOGIE",
    desc: "",
    id: 8
  },
  {
    name: "CHIRURGIE PEDIATRICĂ",
    desc: "",
    id: 8
  },
  {
    name: "GINECOLOGIE",
    desc: "",
    id: 9
  },
  {
    name: "MAMOLOGIE",
    desc: "",
    id: 10
  },
  {
    name: "IMAGISTICĂ",
    desc: "",
    id: 11
  },
  {
    name: "STATIONAR DE ZI",
    desc: [
        "În cadrul departamentului se efectuează triajul pacienților, pot fi apreciați parametrii vitali (puls, tensiunea arterială, saturația cu O2 a sângelui); dupa consultația medicului specialist, pot fi efectuate manipulări și aplicate măsuri de tratament (injecții i/m, i/v, perfuzii, inhalații, măsuri de rehidratare orală, pansamente, etc.).",
        "Tot în cadrul staționarului, pacienții clinicii se pot afla pentru monitorizare/supraveghere pe parcursul zilei, în perioada acută a bolii."
    ],
  id: 12
  },
  {
    name: "LABORATOR",
    desc: "Oferim un spectru larg de analize, o parte din care pot fi disponibile în cel mai scurt timp (până la 1 h), pentru un diagnostic cât mai exact și un tratament corect ales!",
    id: 13
  }
]
