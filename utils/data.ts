export interface navLink {
    text: string;
    href: string;
}

export interface service {
    name: string;
    desc: string | string[];
    id: number;
    shortDesc?: string;
}

export interface busDirection {
    location: string;
    routes: number[]
}

export interface lastService extends service {
    desc: string[];
}

export interface doctor {
    name: string;
    specialty: string;
    img: string;
}

export interface contact {
    name: string;
    href: string;
    icon: string;
}

export interface phoneNumber {
    href: string;
    phone: string;
    viber?: string;
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
        href: "#services",
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
        href: "#footer",
    },
];

export const services: service[] = [
    {
        name: "PEDIATRIE/NEONATOLOGIE",
        desc: "",
        id: 1,
        shortDesc: `Consultațiile pediatrice sunt importante pentru a urmări starea de sănătăte a copiilor. Acestea nu numai că ajută la monitorizarea
                    creșterii și dezvoltării copilului, ci și la detectarea precoce a problemelor de sănătate și la prevenirea afecțiunilor posibile.
                    În general, ar trebui să programați o consultație pediatrică pentru copilul dumneavoastră imediat după naștere, apoi la vârsta de 1
                    lună, 2 luni, 4 luni, 6 luni, 9 luni, 12 luni și apoi anual până la vârsta adolescenței.`
    },
    {
        name: "ORL",
        desc: "",
        id: 2,
        shortDesc: `Otorinolaringologia sau ORL este specialitatea care face diagnosticul și tratează afecțiunile urechilor , nasului și gâtului atât la copii
                    cât și la maturi .`
    },
    {
        name: "OFTALMOLOGIE",
        desc: "",
        id: 3,
        shortDesc: `Oftalmologii sunt responsabili pentru diagnosticul, prevenirea și tratamentul afecțiunilor ochilor și problemelor de vedere la copii și
                    adulți.`
    },
    {
        name: "NEUROLOGIE PEDIATRICĂ",
        desc: "",
        id: 4,
        shortDesc: `Un neurolog este medicul specializat în tratarea afecțiunilor sistemului nervos central și periferic. Neurologia pediatrică este o
                    ramură a medicinei care se ocupă cu diagnosticul și gestionarea bolilor neurologice la nou-născuți, sugari, copii și adolescenți.`
    },
    {
        name: "PNEUMOLOGIE",
        desc: "",
        id: 5,
        shortDesc: `Pneumologia este specialitatea medicală care se ocupa cu prevenirea, diagnosticarea și tratarea bolilor plămânilor, bronhiilor,
                    pleurei și mediastinului.`
    },
    {
        name: "ORTOPEDIE",
        desc: "",
        id: 6,
        shortDesc: `Sistemul osteo-articular este cel ce ne dă posibilitate să ne mişcăm, de aceea sănătatea oaselor şi a muşchilor nu trebuie tratată
                    superficial. Ortopedul este medicul care se ocupă de diagnosticarea, tratarea și prevenirea bolilor și deformațiilor ale sistemului
                    musculo-scheletic, sistem care include oasele, articulatiile, muschii, tendoanele si ligamentele.`
    },
    {
        name: "DERMATOLOGIE",
        desc: "",
        id: 7,
        shortDesc: `Dermatologia este specialitatea medicală care se ocupă cu studiul afecțiunilor pielii, anexelor acestia (păr, unghii, glande
                    sudoripare, glande sebacee) și ale mucoaselor adiacente (cavitate bucală și organe genitale).`
    },
    {
        name: "ENDOCRINOLOGIE",
        desc: "",
        id: 8,
        shortDesc: `Dermatologia este specialitatea medicală care se ocupă cu studiul afecțiunilor pielii, anexelor acestia (păr, unghii, glande
                    sudoripare, glande sebacee) și ale mucoaselor adiacente (cavitate bucală și organe genitale).`
    },
    {
        name: "CHIRURGIE PEDIATRICĂ",
        desc: "",
        id: 9,
        shortDesc: `Chirurgia pediatrică se ocupă cu patologia chirurgicală congenitală sau dobândită a copiilor - din perioada neonatală până la
                    pubertate. Un copil nu poate fi tratat în același mod ca un pacient adult de talie mai mică. Deși copilul prezintă aceleași organe și
                    structuri, maturitatea și consistența lor sunt diferite.`
    },
    {
        name: "GINECOLOGIE",
        desc: "",
        id: 10,
        shortDesc: `Ginecolog - este medicul specializat pe diagnosticarea, prevenirea, monitorizarea și tratarea bolilor sistemului reproductiv
                    feminin, inclusiv a celor care implică hormonii sexuali feminini.`
    },
    {
        name: "MAMOLOGIE",
        desc: "",
        id: 11,
        shortDesc: `Mamologia este o ramură a medicinei care se ocupă cu diagnosticul, tratamentul și profilaxia afecțiunilor sânului.
                    Competența unui medic mamolog include diagnosticul și tratamentul mai multor boli, așa ca: lactostaza, mastopatiile, chisturile,
                    fibroamele și cancerul mamar.`
    },
    {
        name: "IMAGISTICĂ",
        desc: "",
        id: 12,
        shortDesc: `Mamologia este o ramură a medicinei care se ocupă cu diagnosticul, tratamentul și profilaxia afecțiunilor sânului.
                    Competența unui medic mamolog include diagnosticul și tratamentul mai multor boli, așa ca: lactostaza, mastopatiile, chisturile,
                    fibroamele și cancerul mamar.`
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

export const busDirections: busDirection[]  = [
    {
        location: "Din sectorul Botanica",
        routes: [1, 5, 8, 20, 22]
    },
    {
        location: "Din sectorul Buiucani",
        routes: [3, 4, 22, 35]
    },
    {
        location: "Din sectorul Râșcani",
        routes: [25, 32]
    },
    {
        location: "Din sectorul Telecentru",
        routes: [3, 9, 24, 34]
    },
    {
        location: "Din sectorul Ciocana",
        routes: [10, 13, 16]
    },
]

export const phoneNumbers: phoneNumber[] = [
    {
        href: "(+373) 22 111 060",
        phone: "022 111 060"
    },
    {
        href: "(+373) 22 111 061",
        phone: "022 111 061"
    },
    {
        href:  "(+373) 78 222 080",
        phone: "078 222 080"
    },
    {
        href:  "(+373) 78 222 060",
        phone:  "078 222 060",
        viber: "37378222060"
    }
]

export const contacts: contact[] = [
    {
        name: "kindermed19@gmail.com",
        href: "mailto:kindermed19@gmail.com",
        icon: "/icons/Mail.svg"
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/kindermedmd/",
        icon: "/icons/InstagramWhite.svg"
    },
    {
        name: "Facebook",
        href: "https://www.facebook.com/KinderMedMD/",
        icon: "/icons/FacebookWhite.svg"
    }
]

export const footerLinks: navLink[] = [
    {
        text: "KinderTeam",
        href: "#team",
    },
    {
        text: "Servicii",
        href: "#servicii",
    },
    {
        text: "Orarul medicilor",
        href: "/orar",
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

interface schedule {
    monToFri: string;
    sat: string;
    sun: string;
}
export const schedule:schedule = {
    monToFri: "8:30-18:30",
    sat: "09:00-18:00",
    sun: "Zi liberă"
}

export const country_prefixes = {
    "Albania": "+355",
    "Andorra": "+376",
    "Armenia": "+374",
    "Austria": "+43",
    "Azerbaijan": "+994",
    "Belarus": "+375",
    "Belgium": "+32",
    "Bosnia and Herzegovina": "+387",
    "Bulgaria": "+359",
    "Croatia": "+385",
    "Cyprus": "+357",
    "Czech Republic": "+420",
    "Denmark": "+45",
    "Estonia": "+372",
    "Finland": "+358",
    "France": "+33",
    "Georgia": "+995",
    "Germany": "+49",
    "Greece": "+30",
    "Hungary": "+36",
    "Iceland": "+354",
    "Ireland": "+353",
    "Italy": "+39",
    "Kazakhstan": "+7",
    "Kosovo": "+383",
    "Latvia": "+371",
    "Liechtenstein": "+423",
    "Lithuania": "+370",
    "Luxembourg": "+352",
    "Malta": "+356",
    "Moldova": "+373",
    "Monaco": "+377",
    "Montenegro": "+382",
    "Netherlands": "+31",
    "North Macedonia": "+389",
    "Norway": "+47",
    "Poland": "+48",
    "Portugal": "+351",
    "Romania": "+40",
    "Russia": "+7",
    "San Marino": "+378",
    "Serbia": "+381",
    "Slovakia": "+421",
    "Slovenia": "+386",
    "Spain": "+34",
    "Sweden": "+46",
    "Switzerland": "+41",
    "Turkey": "+90",
    "Ukraine": "+380",
    "United Kingdom": "+44",
    "Vatican City": "+379"
}