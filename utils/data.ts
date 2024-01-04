export interface navLink {
    text: string;
    href: string;
}

export interface service {
    name: string;
    desc: string | string[];
    id: number;
    shortDesc?: string;
    longDesc?: string;
    img?:string;
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
        text: "KinderMed Team",
        href: "#team",
    },
    {
        text: "Servicii",
        href: "#services",
    },
    {
        text: "Pachete",
        href: "/pachete",
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
                    creșterii și dezvoltării copilului, ci și la detectarea precoce a problemelor de sănătate și la prevenirea afecțiunilor posibile.`,
        longDesc: `Consultațiile pediatrice sunt importante pentru a urmări starea de sănătăte a copiilor. Acestea nu numai că ajută la monitorizarea
                    creșterii și dezvoltării copilului, ci și la detectarea precoce a problemelor de sănătate și la prevenirea afecțiunilor posibile.
                    În general, ar trebui să programați o consultație pediatrică pentru copilul dumneavoastră imediat după naștere, apoi la vârsta de 1
                    lună, 2 luni, 4 luni, 6 luni, 9 luni, 12 luni și apoi anual până la vârsta adolescenței.
                    O subspecialitate îngustă a Pediatriei este – Neonatologia, care se ocupa cu diagnosticarea, tratarea si monitorizarea afectiunilor
                    nou-nascutului.
                    Ingrijirile medicale neonatale sunt acordate în prima luna de viata a nou-nascutului sanatos si în primele 6 luni de viata pentru
                    nou-nascutul prematur.
                    La clinica KinderMed Pediatric & Family Care, vă puteți programa de luni până sâmbătă la unul pediatrii clinicii, atât pentru o
                    consultație de rutină, cât și pentru o consultație de urgență, în cazul unei eventuale probleme de sănătate a micuțului
                    dumneavoastră.`
    },
    {
        name: "ORL",
        desc: "",
        id: 2,
        shortDesc: `Otorinolaringologia sau ORL este specialitatea care face diagnosticul și tratează afecțiunile urechilor , nasului și gâtului atât la copii
                    cât și la maturi .`,
        longDesc: `Otitele ,amigdalitele, sinuzitele sau rinitele sunt afecțiuni frecvente care pot apărea indiferent de sezon și care, în lipsa
                    administrării unui tratament adecvat pot duce la complicații.
                    Motive pentru a consulta un medic specialist ORL apar frecvent, de la o durere de ureche, una înfundată sau cu un țiuit, la o
                    durere în gât, o răgușeală care nu mai trece sau un nas care curge neîncetat. Important este ca aceste simptome sa nu fie
                    ignorate, dacă nu trec în câteva zile, sau se agravează, și să fie solicitat un consult ORL cât mai repede!
                    Examenul clinic ORL, deși crează un sentiment de panică pentru pacient din cauza instrumentarului utilizat pentru examinare,
                    trebuie menționat că nu durează mult și nu este deloc dureros, mai ales că acum la KinderMed Pediatric & Family Care utilizam
                    cel mai modern aparataj.
                    Endoscopie ORL de ultima generatie
                    Unicul video procesor PENTAX CP - 1000 din Republica Moldova, garantează o calitate digitală ridicată a imaginii HD. Tehnologia
                    modernă VIVIDEO, care însoțește procesul de endoscopie, face ușoară trecerea de la endoscopia cu fibre la endoscopia video.
                    Folosind procesorul video Pentax CP-1000, examinările de diagnostic în domeniul otolaringologiei devin mai confortabile și mai
                    sigure atât pentru pacient, cât și pentru medic.`
    },
    {
        name: "OFTALMOLOGIE",
        desc: "",
        id: 3,
        shortDesc: `Oftalmologii sunt responsabili pentru diagnosticul, prevenirea și tratamentul afecțiunilor ochilor și problemelor de vedere la copii și
                    adulți.`,
        longDesc: `De la naștere până la adolescență, ochii copiilor cresc și se modifică rapid, de aceea un prim consult oftalmologic este recomandat
                    încă în primele luni de viață, urmate de vizite la 1, 3, (5) ani. De asemenea, un consult oftalmologic este necesar și înainte de a
                    
                    începe clasa I-a ( 7ani). Vizite ulterioare vor avea loc la 15, 18 ani, apoi vizite de rutină la fiecare 2 ani, pe parcursul vieții adulte.
                    În afara vizitei de rutină, un părinte neapărat trebuie să programeze o consultație la oftalmolog în următoarele cazuri:
                    -dimensiuni prea mari sau prea mici ale ochiului;
                    -anomalie, inflamație a pleoapelor;
                    -pupila de formă diferită, de altă culoare (gri, albă),de dimensiuni diferite una față de cealaltă;
                    -copilul pare că nu vede;
                    -ochii care „fug” (unul sau amândoi) – după vârsta de 6 luni; strabismul (fuga ochilor) instalat brusc (strabismul acut), indiferent de
                    vârstă, reprezintă o urgenţă, deoarece poate fi expresia unei boli neurologice;
                    -fotofobie (copilul se ferește de lumină);
                    -lăcrimare abundentă, etc.
                    Cabinetul oftalmologic al KinderMed Pediatric & Family Care este dotat cu aparataj modern, astfel putând fi efecutate examinari
                    complexe.
                    Suntem mândri să avem în dotare Auto Refracto-Keratometru - dispozitiv medical de ultimă oră, conceput pentru a îmbunătăți
                    abordarea medicului oftalmolog față de îngrijirea pacienților noștri, inclusiv ADULȚI.
                    Auto Refracto-Keratometru este un instrument de înaltă precizie pentru măsurarea obiectivă a ochilor pacientului, cu sistem optic
                    unic în interior, analiză și procesare a imaginilor precise în tehnologia Hartman. Este folosit în principal pentru a măsura dioptriile
                    pacientului, pentru tratarea patologiilor oculare și alegerea ochelarilor.`,
    },
    {
        name: "NEUROLOGIE PEDIATRICĂ",
        desc: "",
        id: 4,
        shortDesc: `Un neurolog este medicul specializat în tratarea afecțiunilor sistemului nervos central și periferic. Neurologia pediatrică este o
                    ramură a medicinei care se ocupă cu diagnosticul și gestionarea bolilor neurologice la nou-născuți, sugari, copii și adolescenți.`,
        longDesc: `Neurologia pediatrică diferă de cea a maturilor, de aceea este foarte important în primul an de viață să consultăm specialistul
                    neurolog chiar și dacă nu observăm careva schimbări în dezvoltarea copilului.
                    O evaluare neurologică completă constă în obținerea unui istoric medical cât mai amănunțit, recunoașterea etapelor normale ale
                    dezvoltării motorii și cognitive a copilului și un examenul
                    neurologic adaptat vârstei copilului.
                    Prima consultație la neurolog se recomandă a fi efectuată în jurul vârstei de 3 luni.
                    Atunci se va urmări interacțiunea sugarului cu examinatorul, apariția zâmbetului social, urmărirea cu privirea, etc. Ulterior, vizitele la
                    medicul specialist se recomanda din 3 în 3 luni, momente cheie când se urmărește achiziționarea poziției șezând, mersul
                    independent, dezvoltarea limbajului, achizițiile cognitive, interacțiunea socială,etc.
                    Astfel, chiar dacă copilul este sănătos, se recomandă să consultați medicul neurolog, în scopuri profilactice la vârsta de: 3, 6, 9 luni
                    și 1, 2, 3, 6 ani.
                    Orice schimbare pe care o observăm în dezvoltarea copilului trebuie să ne orienteze către un sfat avizat. In urma unui consult, la
                    indicația medicului neuropediatru, pot fi necesare și măsuri de diagnostic funcțional (investigații).
                    O consultatie la neurologul pediatru este necesara si in caz de:
                    - prezența unor simptome neurologice, așa ca: dureri de cap, pierderea stării de conștiență, dereglări ale somnului,
                    somnambulism (stare patologică care se manifestă prin executarea automată și inconștientă, în timpul somnului, a unei
                    activități, de care bolnavul nu-și amintește la trezire), ticuri nervoase (mișcări necoordonate ale corpului și ale feței), stări
                    convulsive, dereglări motorii ( de mișcare).
                    - prezența unor probleme de dezvoltare a copiilor, precum: dezvoltare întârziată a vorbirii; logonevroză (bâlbâială); enurezis
                    (eliminare spontană și inconștientă a urinei); hiperactivitate; tulburarea de deficit de atenție și hiperactivitate ADHD (tulburare
                    de neurodezvoltare), etc.`
    },
    {
        name: "PNEUMOLOGIE",
        desc: "",
        id: 5,
        shortDesc: `Pneumologia este specialitatea medicală care se ocupa cu prevenirea, diagnosticarea și tratarea bolilor plămânilor, bronhiilor,
                    pleurei și mediastinului.`,
        longDesc: `Medicii specializați în acest domeniu se numesc pneumologi, care pot să determine starea plămânilor unei persoane după modul
                    în care aceasta respiră. Specialitatea medicală care se ocupă cu tratamentul tuberculozei pulmonare se numește
                    pneumoftiziologie, care este în prezent considerată parte integrantă a pneumologiei.
                    Pneumologia cuprinde diagnosticul și tratamentul bolilor sistemului respirator, asa ca: traheobronsite acute, pneumonii, pleurezii,
                    astm bronșic, emfizem, tuberculoză. Alte patologii includ insuficientele respiratorii, tulburarile respiratorii din timpul somnului,
                    sindrom de apnee in somn, ș.a.
                    Prezența următoarelor simptome/patologii necesită un consult al medicului pneumolog:
                    - tuse
                    
                    - expectorație
                    - dificultate la respirație
                    - respirație șuierătoare
                    - durere toracică
                    - diverse boli pulmonare cronice ce necesita monitorizare.`
                        },
    {
        name: "ORTOPEDIE",
        desc: "",
        id: 6,
        shortDesc: `Sistemul osteo-articular este cel ce ne dă posibilitate să ne mişcăm, de aceea sănătatea oaselor şi a muşchilor nu trebuie tratată
                    superficial. Ortopedul este medicul care se ocupă de diagnosticarea, tratarea și prevenirea bolilor și deformațiilor ale sistemului
                    musculo-scheletic, sistem care include oasele, articulatiile, muschii, tendoanele si ligamentele.`,
        longDesc: `Din cauza creșterii și dezvoltării rapide a corpului, pe parcursul primului an de viață, copilul necesită a fi consultat de ortoped de cel
                    puțin 4 ori: la 1 lună, 3 luni, 6 luni și 1 an.
                    În cadrul vizitei, specialistul va stabili dacă nu există malformatii congenitale ale sistemului musculo-scheletal: luxații, picior
                    strâmb, displazie de șold etc. Dacă sunt depistate la o vârstă fragedă, cele mai multe dintre problemele otopedice, pot fi corectate
                    fără intervenții chirurgicale.
                    Pe parcursul vieții, sistemele osteo-articular si muscular sunt supuse uzurii naturale, dar la fel pot fi afectate de acţiunile nocive
                    ale factorilor fizici, chimici, traumatici, infecţioşi iar manifestările pot ramane, o perioadă de timp, asimptomatice.
                    La vârsta adultă, consultația medicului ortoped-traumatolog este necesară în cazul apariției următoarelor acuze: dureri articulare
                    și/sau musculare, dureri in timpul mersului, mișcare rigidă, discomfort sau trosnete în articulații, deformarea acestora. Toate
                    acestea pot fi simptome ale unor patologii asa ca: fracturi, luxații, leziuni sau inflamații articulare si ale ligamentelor (artrite,
                    bursite), boli ale coloanei vertebrale (hernie de disc, scolioza, osteocondroza).
                    Multe afecțiuni ale aparatului locomotor se pot trata fără o intervenție chirurgicală, cu ajutorul medicamentelor, exercițiilor fizice și a
                    terapiilor de recuperare.
                    Pentru a evita intervențiile complicate și agravarea maladiilor este foarte important să ne adresăm la timp la un specialist.`
    },
    {
        name: "DERMATOLOGIE",
        desc: "",
        id: 7,
        shortDesc: `Dermatologia este specialitatea medicală care se ocupă cu studiul afecțiunilor pielii, anexelor acestia (păr, unghii, glande
                    sudoripare, glande sebacee) și ale mucoaselor adiacente (cavitate bucală și organe genitale).`,
        longDesc: `Pielea reprezinta cel mai mare organ al corpului, constituind o barieră naturală, care protejează țesuturile subiacente și organele
                    interne de agresiunile din mediu și microbi.
                    Consultația dermatologică vă poate ajuta să aflați mai multe despre tipul de piele pe care îl aveți și despre îngrijirea lui corectă,
                    pentru a menține sănătatea și frumusețea acesteia. Dermatologul poate evalua starea pielii, pune un diagnostic acolo unde este
                    cazul, și vă poate ghida către investigațiile necesare, pentru stabilirea unui diagnostic cert.
                    Patologiile dermatologice se întâlnesc în egală masură la copii, adolescenți cât și la adulți. Aceastea pot aparea prin acțiunea
                    directă a unor factori nocivi, cu apariția unor leziunilor locale, însă pot fi cauzate și de unele afecțiuni interne.
                    Adresările cu afecțiuni dermatologice au la bază atât motive estetice, cât și de sănătate. Printre cele mai frecvent întâlnite afecțiuni
                    sunt: erupțiile cutanate, urticariile, acneea, foliculite, dermatite (seboreică, atopică), infecții ale pielii (virale, bacetriene,
                    fungice), rozacea, eczeme, psoriazis, negi, papiloame, veruci, alunițe, probleme ale părului și unghiilor, etc.
                    Toate persoanele posesoare de alunițe trebuie să le monitorizeze. Recomandat este să se facă un control dermatologic anual, de
                    preferat la finalul sezonului cald, după ce pielea este expusă excesiv la radiațiile UV.
                    Orice modificare de formă sau culoare a aluniţelor, zgârieturi, sângerări, ruperi trebuie să ne trimită la medicul dermatolg de
                    urgenţă.
                    Multe persoane încearcă să trateze unele afecțiuni dermatologice de sinestătător, iar adresarea la medicul dermatolog este tardivă,
                    când apar multiple complicații și acestea devin dificil de tratat.`
    },
    {
        name: "ENDOCRINOLOGIE",
        desc: "",
        id: 8,
        shortDesc: `Endocrinologia este o ramură a medicinei care se ocupă de sistemul endocrin și de bolile acestuia. Domeniul se concentrează pe
                    glandele endocrine și pe secrețiile acestora, numite hormoni.`,
        longDesc: `Glandele care alcătuiesc sistemul endocrin sunt: hipotalamusul, epifiza și hipofiza, glanda tiroidă și glandele paratiroidiene,
                    timusul, suprarenalele, pancreasul, ovarele (la femei), testiculele (la bărbați).
                    Hormonii secretati de glandele endocrine acționează asupra funcțiilor și proceselor corporale, precum creșterea și dezvoltarea,
                    metabolismul, funcția sexuală, funcția cognitivă și dispoziția, menținerea temperaturii corpului.
                    Medicul endocrinolog tratează bolile asociate cu dezechilibrele hormonale. Când apare un dezechilibru hormonal, înseamnă că în
                    corp există prea mult sau prea puțin dintr-un anumit hormon. Chiar și modificările extrem de mici pot avea efecte grave în întregul
                    organism.
                    Bolile endocrine pot afecta atât adulții, cât și copiii, și pot fi de mai multe feluri: cauzate de hiposecreția glandelor endocrine sau
                    de hipersecreția acestora, fie când se dezvoltă noduli sau tumori în sistemul endocrin.
                    Printre cele mai răspândite tulburări endocrine se numără: hipotiroidismul și hipertiroidismul, diabetul,infertilitatea, sindromul
                    ovarelor polichistice, osteoporoza, menopauza, tulburari de metabolism, tulburari de creștere.
                    În urma diagnosticării, endocrinologul va sugera un plan de tratament, care va depinde de afecțiunea de bază.`
    },
    {
        name: "CHIRURGIE PEDIATRICĂ",
        desc: "",
        id: 9,
        shortDesc: `Chirurgia pediatrică se ocupă cu patologia chirurgicală congenitală sau dobândită a copiilor - din perioada neonatală până la
                    pubertate. Un copil nu poate fi tratat în același mod ca un pacient adult de talie mai mică. Deși copilul prezintă aceleași organe și
                    structuri, maturitatea și consistența lor sunt diferite.`,
        longDesc: `Chirurgia pediatrică nu este limitată la o arie anatomică a corpului, cum ar fi toracele sau abdomenul, acoperind o serie întreagă
                    de boli unice copiilor, ce necesita tratament specific.
                    Această specialitate poate fi definită ca o combinație de chirurgie generală, chirurgie plastică, chirurgie toracică și urologie, ce se
                    adresează pacientului pediatric.
                    La KinderMed Pediatric and Family Care, Departamentul de chirurgie pediatrică activează în regim de ambulator, asigurând
                    diagnosticul patologiei chirurgicale și interveții din mica chirurgie. Pentru aceste manopere se utilizeaza tehnici de anestezie
                    loco-regională.
                    Astfel, pe lânga consultația chirurgului pediatru, copii dumneavoastră pot beneficia de următoarele mini-intervenții:
                    Frenotomie
                    ● Extragerea căpușei
                    ● Extragerea corpului străin din țesuturile moi
                    ● Anestezie locală
                    ● Pansament chirurgical complex
                    ● Sutura plăgilor superficiale
                    ● Tratamentul plăgilor superficiale (steri-strip)
                    ● Deschiderea și drenarea focarelor piogene
                    ● Unghie încarnată -înlăturare uni/bilaterală
                    ● Sanare(tratament ) panariciu
                    ● Înlaturarea suturilor, ateroamelor, etc.
                    ● Decalotare chirurgicală
                    ● Decalotare pediatrică
                    ● Liza aderențelor prepuțiale`
    },
    {
        name: "GINECOLOGIE",
        desc: "",
        id: 10,
        shortDesc: `Ginecolog - este medicul specializat pe diagnosticarea, prevenirea, monitorizarea și tratarea bolilor sistemului reproductiv
                    feminin, inclusiv a celor care implică hormonii sexuali feminini.`,
        longDesc: `Protocoalele moderne recomandă câte o vizită de rutină la ginecolog - la fiecare 6 luni, pentru femeile de vârstă fertilă și vizite
                    anuale, pentru femeile aflate în menopauză.
                    Primul examen ginecologic este recomandat fetelor la vârsta de 14-16 ani, încă înainte de începerea vieții sexuale. O vizită de
                    rutină este recomandată și după terminarea perioadei de lăuzie – la 6-8 săptăpmâni după nastere.
                    Perioadă optimă pentru efectuarea examinării este după terminarea sângerării menstruale (pentru femeile de vârstă fertilă). Cu
                    minim 24 ore înainte de consult, se renunță la instilații vaginale, administrarea ovulelor, cremelor speciale sau a tampoanelor
                    vaginale. De asemenea, va trebui să se evite contactul sexual.
                    
                    Consultația ginecologică are mai mult etape și poate fi urmată, după caz, și de alte manopere sau investigații.
                    O consultație va începe cu o discuție cu medicul ginecolog, pentru colectarea istoricului medical (anamnesticului) al
                    dumneavoastră, inclusiv date referitor la ciclul menstrual, numarul de sarcini, nasteri, posibilele intervenții și boli suportate anterior.
                    Consultul clinic propriu-zis reprezintă examinarea zonei genitale externe (vulva) și a zonei interne (vagin și col uterin) prin
                    examinare cu valvele (specule), apoi prin palpare bimanuală (tușeu vaginal).
                    La acestă etapă pot fi recoltate specimene de secreții uretrale/vaginale/cervicale pentru examinări bacteriologice, fungice,
                    virale și/sau citologice(PAP test, testare HPV), pentru depistarea eventualelor infecții, bolilor cu transmitere sexuală și
                    screeningul cervical (depistarea modificărilor precanceroase ale colului uterin).
                    Tușeul vaginal stabilește poziția, mobilitatea si sensibilitatea, conturul si dimensiunile organelor reproducătoare interne. Prin
                    intermediul acestuia pot fi depistate eventuale probleme ale uterului și anexelor genitale (trompe uterine și ovare).
                    In cadrul consultației mai pot fi efectuate examinari suplimentare precum videocolpscopia colului uterin si vulvei sau examinarea
                    ecografică pelvină (USG).
                    Apariția unor simptome precum: întârzierea/ lipsa totală a menstruație (amenoreea), sângerare anormală la menstruație sau în
                    afara ei, dereglări ale ciclului menstrual, infertilitatea, modificarea secrețiilor vaginale, însoțite de iritații, mâncărimi; durere
                    pelvină, disconfort la urinare, anormalități ale testului Babeș-Papanicolau (PAP test) , tulburările menopauzei - sunt semne de
                    patologie ginecologică, care necesită o adresare la specialist.
                    Tot ginecologul va poate ajuta în problemele de planificare familială, prin alegerea metodei optime de contraceptie (de urgență,
                    temporară, de ungă durată (montare/extracție dispozitive intrauterine), pregătirea pentru sarcină și consultul ginecologic
                    postnatal.
                    Astfel de probleme sunt un subiect delicat și au nevoie de un tratament profesionist și individualizat.`
    },
    {
        name: "MAMOLOGIE",
        desc: "",
        id: 11,
        shortDesc: `Mamologia este o ramură a medicinei care se ocupă cu diagnosticul, tratamentul și profilaxia afecțiunilor sânului.
                    Competența unui medic mamolog include diagnosticul și tratamentul mai multor boli, așa ca: lactostaza, mastopatiile, chisturile,
                    fibroamele și cancerul mamar.`,
        longDesc: `Drept factori de risc pentru patologia mamară pot servi:
                    începutul timpuriu al menstruaţiei (până la 12 ani) şi menopauză târzie (după 55 ani);
                    prima sarcină târzie sau naşterea primului copil după 30 ani;
                    avorturi multiple;
                    renunțarea la lactaţie sau perioada scurtă a acesteia;
                    prezența cazurilor de cancer de sân în familie;
                    tulburări hormonale cauzate de boli ginecologice și endocrine (hipofizei, glandei tiroide, suprarenalelor, etc.)
                    administrarea necontrolată a preparatelor contraceptive,
                    obezitatea; modul sedentar de viaţă; consumul de alcool, fumatul;
                    expunere la radiaţii;
                    stresul fizic și psihic prelungit,
                    Autoexaminarea sânilor - este o procedură care poate fi efectuată de sine stătător, de fiecare femeie în parte. Sânii se
                    examinează în a 7-10-a zi a ciclului menstrual, iar în menopauză – cu o periodicitate lunară, în orice zi. Autoexaminarea
                    regulată este o metodă simplă de profilaxie și diagnostic precoce a patologiei mamare.
                    Apariția oricărei schimbări a formei, simetriei sânilor, stării tegumentului (pielii), aspectului mamelonului si/sau a areolei,
                    eliminarilor mamelonare, depistarea unui nodul atât în țesutul glandei mare, cât și în regiunea axilară sau supraclaviculară,
                    necesită o adresare urgentă la specialistul mamolog.
                    În afară de autoexaminare, este recomadat consultul profilactic anual la medicului-mamolog, mai ales pentru femeile după 35 -40
                    ani. Intreruperea lactației (adlactarea) și survenirea menopauzei, sunt la fel momente oportune de a consulta medicul mamolog.
                    Depistarea precoce a afecțiunilor glandelor mamare este esențială pentru un tratament timpuriu și eficient!`
    },
    {
        name: "IMAGISTICĂ",
        desc: "",
        id: 12,
        shortDesc: `Ecografia este metoda prin care se pot vizualiza diferite structuri anatomice cu ajutorul ultrasunetelor.`,
        longDesc: `La momnet, ecografia este principala metodă de screening în medicină, datorită avantajelor pe care le oferă: rapiditatea obținerii
                    unui diagnostic pozitiv sau de excludere, inofensivitatea, posibilitatea de repetare, practic nelimitată, ca număr de examinări și timp,
                    obținerea de planuri multiple de examinare ale aceluiași organ, preț de cost și întreținere redus.
                    Cu ajutorul explorării ecografice pot fi depistate diferite modificări în structura organelor, cum ar diferitele formațiuni tumorale. În
                    afara modificărilor structurale, ecografia poate depista și modificări în funcționalitatea unor organe, prin vizualizarea în timp real a
                    acestora, fiind foarte utilă în studiul tubului digestiv, al inimii, al activității musculare, etc.
                    Suplimentar vizualizării structurilor anatomice și a funcționalității acestora, există și o serie de aplicații care permit depistarea
                    fluxurilor de sange și studierea acestora - metoda Doppler. Aceasta metoda este utila în studierea vascularizării organelor și a
                    formațiunilor tumorale, precum și calității vaselor de sange și a afectării acestora, în cadrul unor boli sistemice, cum ar fi
                    hipercolesterolemiile, diabetul zaharat, etc.
                    În investigația ecografică, pe piele se aplică un gel, care face contactul dintre tegument și transductor. Gelul ultrasonografic are
                    rolul de a preveni fricțiunea și facilitează mișcarea sondei pe piele. Undele ultrasonice nu circulă în aer, iar gelul permite ca acestea
                    să fie transmise de la sondă către piele. În general gelul conține polipropilen glicol, apă și ocazional colorant, care nu are rol de
                    utilitate, doar de aspect. De cele mai multe ori gelul este transparent și dens (lipicios).
                    Exista mai multe tipuri de ecografii, în funcţie de regiunea corpului care este scanată:
                    Ultrasonografie externă – transductorul este deplasat pe piele;
                    Ultrasonografie internă – transductorul este inserat în interiorul organismului, printr-o cavitate (transvaginal, transrectal,
                    transesofagian);`
    }
]

export const lastServices: lastService[] = [
    {
        name: "STATIONAR DE ZI",
        desc: [
            "În cadrul departamentului se efectuează triajul pacienților, pot fi apreciați parametrii vitali (puls, tensiunea arterială, saturația cu O2 a sângelui); dupa consultația medicului specialist, pot fi efectuate manipulări și aplicate măsuri de tratament (injecții i/m, i/v, perfuzii, inhalații, măsuri de rehidratare orală, pansamente, etc.).",
            "Tot în cadrul staționarului, pacienții clinicii se pot afla pentru monitorizare/supraveghere pe parcursul zilei, în perioada acută a bolii."
        ],
        shortDesc: `În cadrul departamentului se efectuează triajul pacienților, pot fi apreciați parametrii vitali (puls, tensiunea arterială, saturația cu O2 a sângelui); dupa consultația medicului specialist, pot fi efectuate manipulări și aplicate măsuri de tratament (injecții i/m, i/v, perfuzii, inhalații, măsuri de rehidratare orală, pansamente, etc.).
            Tot în cadrul staționarului, pacienții clinicii se pot afla pentru monitorizare/supraveghere pe parcursul zilei, în perioada acută a bolii.`,
        id: 13
    },
    {
        name: "LABORATOR",
        desc: ["Oferim un spectru larg de analize, o parte din care pot fi disponibile în cel mai scurt timp (până la 1 h), pentru un diagnostic cât mai exact și un tratament corect ales!"],
        shortDesc: `Oferim un spectru larg de analize, o parte din care pot fi disponibile în cel mai scurt timp (până la 1 h), pentru un diagnostic cât mai exact și un tratament corect ales!`,
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
        name: " Ciumac Olesea",
        specialty: "oftalmolog",
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
        name: "info.kindermed@gmail.com",
        href: "mailto:info.kindermed@gmail.com",
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
        text: "KinderMed Team",
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