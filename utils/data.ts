export interface navLink {
    text: string;
    href: string;
}

export interface service {
    name: string;
    desc: string | string[];
    id: number;
}

export interface lastService extends service {
    desc: string[];
}

export interface doctor {
    name: string;
    specialty: string;
    img: string;
}

export const articles = [
    {
        tags: ["info", "important"],
        title: "Inovație! Proteza personalizată de genunchi – o intervenție exclusiv disponibilă la Spitalul Internațional Medpark",
        date: "05.12.2023"
    },
    {
        tags: ["lifehacks", "important"],
        title: "Inovație! Proteza personalizată de genunchi – o intervenție exclusiv disponibilă la Spitalul Internațional Medpark",
        date: "05.12.2023"
    },
    {
        tags: ["info", "important"],
        title: "Inovație! Proteza personalizată de genunchi – o intervenție exclusiv disponibilă la Spitalul Internațional Medpark",
        date: "05.12.2023"
    },
]

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

export const services: service[] = [
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
        id: 9
    },
    {
        name: "GINECOLOGIE",
        desc: "",
        id: 10
    },
    {
        name: "MAMOLOGIE",
        desc: "",
        id: 11
    },
    {
        name: "IMAGISTICĂ",
        desc: "",
        id: 12
    }
]

export const lastServices: lastService[] = [
    {
        name: "STATIONAR DE ZI",
        desc: [
            "În cadrul departamentului se efectuează triajul pacienților, pot fi apreciați parametrii vitali (puls, tensiunea arterială, saturația cu O2 a sângelui); dupa consultația medicului specialist, pot fi efectuate manipulări și aplicate măsuri de tratament (injecții i/m, i/v, perfuzii, inhalații, măsuri de rehidratare orală, pansamente, etc.).",
            "Tot în cadrul staționarului, pacienții clinicii se pot afla pentru monitorizare/supraveghere pe parcursul zilei, în perioada acută a bolii."
        ],
        id: 13
    },
    {
        name: "LABORATOR",
        desc: ["Oferim un spectru larg de analize, o parte din care pot fi disponibile în cel mai scurt timp (până la 1 h), pentru un diagnostic cât mai exact și un tratament corect ales!"],
        id: 14
    }
]


export const team: doctor[] = [
    {
        name: "Stratulat Mihail",
        specialty: "neonatolog/pediatru",
        img: "/Doctor1.jpg"
    },
    {
        name: "Leșco Silvia",
        specialty: "pediatru",
        img: "/Doctor2.jpg"
    },
    {
        name: "Botnari Ecaterina",
        specialty: "pediatru",
        img: "/Doctor1.jpg"
    },
    {
        name: "Bantaș Alina",
        specialty: "pediatru",
        img: "/Doctor1.jpg"
    },
    {
        name: "Cotovan Lia",
        specialty: "ORL",
        img: "/Doctor1.jpg"
    },
    {
        name: "Cornițel Rodica",
        specialty: "ORL",
        img: "/Doctor1.jpg"
    },
    {
        name: "Andoniev Iulia",
        specialty: "oftalmolog",
        img: "/Doctor1.jpg"
    },
    {
        name: "Verejan Victoria",
        specialty: "oftalmolog",
        img: "/Doctor1.jpg"
    },
    {
        name: "Rotari Adrian",
        specialty: "neurolog",
        img: "/Doctor1.jpg"
    },
    {
        name: "Sîrcu Svetlana",
        specialty: "pulmonolog",
        img: "/Doctor1.jpg"
    },
    {
        name: "Druță Ludmila",
        specialty: "dermatolog",
        img: "/Doctor1.jpg"
    },
    {
        name: "Moraru Anatol",
        specialty: "ortoped",
        img: "/Doctor1.jpg"
    },
    {
        name: "Grin Florin",
        specialty: "ortoped",
        img: "/Doctor1.jpg"
    },
    {
        name: "Antoci Iurie",
        specialty: "ortoped",
        img: "/Doctor1.jpg"
    },
    {
        name: "Chiriac Andrian",
        specialty: "endocrinolog",
        img: "/Doctor1.jpg"
    },
    {
        name: "Moroșan Valeriu",
        specialty: "imagist",
        img: "/Doctor1.jpg"
    },
    {
        name: "Caraman Anatolie",
        specialty: "imagist",
        img: "/Doctor1.jpg"
    },
    {
        name: "Ambros Igor",
        specialty: "chirurg",
        img: "/Doctor1.jpg"
    },
    {
        name: "Chelban Doina",
        specialty: "mamolog",
        img: "/Doctor1.jpg"
    },
    {
        name: "Stratulat Angela",
        specialty: "ginecolog",
        img: "/Doctor1.jpg"
    }
]