import type { Musicien, Credit, Chef } from "./types/dataConfig";

const musiciens: Musicien[] = [
    {
        nom: "Morger",
        prénom: "Lara",
        instrument: "Mezzo-soprano",
        bio: "La mezzo-soprano suisse Lara Morger se distingue par une grande expressivit\u00E9, une \u00E9nergie vibrante et un timbre vocal chaleureux et touchant. \n    \n    En tant que soliste, elle collabore avec des chefs tels que Jordi Savall, Ton Koopman et Shunske Sato, et se produit avec des ensembles comme Hesp\u00E8rion XXI, Le Concert des Nations, la Lautten Compagney Berlin, l'Orquestra Barroca Catalana et l'Orchestre National du Capitole de Toulouse. Depuis 2021, elle est \u00E9galement membre de la Capella Reial de Catalunya, o\u00F9 elle se produit en soliste sous la direction de Jordi Savall. \n    \n    En 2024, Lara a remport\u00E9 le 1er prix et le prix du public au 24e Concours international Bach de Leipzig. Elle a \u00E9galement re\u00E7u de nombreux prix et bourses, notamment de la Fondation Melante, de la Fondation Richard Wagner et de la Bourse Salvat Bach de la Fondation Bachcelona. \n    \n    Elle a fait ses d\u00E9buts \u00E0 l'op\u00E9ra en 2019 dans le r\u00F4le de Diane dans Les Aventures du Roi Pausole d'Arthur Honegger \u00E0 Fribourg-en-Brisgau. En 2022, elle a chant\u00E9 le r\u00F4le-titre d'Alessandro de Haendel \u00E0 l'ETA-Hoffmann-Theater de Bamberg sous la direction de Gottfried von der Goltz. Elle a termin\u00E9 ses \u00E9tudes avec distinction \u00E0 la Hochschule f\u00FCr Musik de Fribourg-en-Brisgau et \u00E0 la Hochschule der K\u00FCnste de Berne en 2024. Elle a notamment eu pour professeurs Tanja Ariane Baumgartner, Dorothea Wirtz, Marek Rzepka et Jeanette Favaro-Reuter.",
        portrait: {
            src: "/ensembleGallery/photos des musiciens/Morger Lara.jpg",
            alt: "Portrait de la mezzo-soprano Lara Morger",
        },
        modal: {
            src: "/ensembleGallery/photosFullModal/Morger_full.jpg",
            alt: "Portrait background Lara Morger"
        }
    },
    {
        nom: "Palacios",
        prénom: "Alberto",
        instrument: "Ténor",
        bio: "D\u00E8s son plus jeune \u00E2ge, il a commenc\u00E9 ses \u00E9tudes musicales par le piano, obtenant en 2017 le Dipl\u00F4me Sup\u00E9rieur de Musique et, en 2020, le Master de Lied \"Victoria de los \u00C1ngeles\". Toutefois, son parcours a toujours \u00E9t\u00E9 marqu\u00E9 par une intense et vari\u00E9e activit\u00E9 chorale, qui a jou\u00E9 un r\u00F4le d\u00E9terminant dans son d\u00E9veloppement en tant que chanteur.\n\nIl a rapidement d\u00E9cid\u00E9 d\u2019orienter sa carri\u00E8re vers le chant, terminant en 2022 le postgrade en Chant Historique \u00E0 l\u2019ESMuC (Barcelone), o\u00F9 il a obtenu son dipl\u00F4me avec mention, sous la direction de Lambert Climent et Assumpta Mateu. Cette m\u00EAme ann\u00E9e, son engagement a \u00E9t\u00E9 r\u00E9compens\u00E9 par la bourse Pilar Lorengar - Ciudad de Zaragoza.\n\nSon exp\u00E9rience chorale est vaste et diversifi\u00E9e. Ces derni\u00E8res ann\u00E9es, il a fait partie de prestigieux ensembles tels que les Basler Madrigalisten, le Bach Collegium Barcelona, le Saulus Ensemble, la Capella Nacional de Catalunya dirig\u00E9e par Jordi Savall et La Cetra dirig\u00E9e par Andrea Marcon. Il participe \u00E9galement \u00E0 des ensembles de format r\u00E9duit comme le Lorem Ipsum Ensemble, le Tetraphilla Ensemble, la Schola Cantorum Paradisi Portae et le cercle actuel des \u00E9tudiants du master AVES.\n\n        Il vient r\u00E9cemment de terminer un Master of Arts \u00E0 la FHNW (B\u00E2le), o\u00F9 il a \u00E9tudi\u00E9 sous la direction de Carlos Mena, avec qui il poursuit actuellement sa formation.\n",
        portrait: {
            src: "/ensembleGallery/photos des musiciens/Alberto Palacio.jpg",
            alt: "Portrait du ténor Alberto Palacio",
        },
        modal: {
            src: "/ensembleGallery/photosFullModal/Palacio_full.jpeg",
            alt: "Portrait background Alberto Palacio"
        }
    },
    {
        nom: "Rignol",
        prénom: "Gabriel",
        instrument: "Théorbe",
        bio: "N\u00E9 en 2001, Gabriel Rignol d\u00E9bute la guitare \u00E0 8 ans au CRR de Perpignan, remportant plusieurs prix. \u00C0 16 ans, il se consacre au luth au Conservatoire National Sup\u00E9rieur de Musique et de Danse de Lyon, sous la direction de Rolf Lislevand, obtenant son master en 2023. \n    \n    Gabriel Rignol est membre de diff\u00E9rents ensembles baroque prestigieux, enregistrant pour des labels prestigieux (Alpha Classics, Ricercar, Harmonia Mundi, Deutsche Grammophon, etc.). \n    \n    Laur\u00E9at du Concours International de Musique Ancienne Maurizio Pratola en 2021, il fonde \u00E9galement l'ensemble la N\u00E9buleuse, ax\u00E9 sur le r\u00E9pertoire fran\u00E7ais et italien du XVIIe si\u00E8cle.",
        portrait: {
            src: "/ensembleGallery/photos des musiciens/Gabriel Rignol.jpg",
            alt: "Portrait du théorbiste Gabriel Rignol",
        },
        modal: {
            src: "/ensembleGallery/photosFullModal/Rignol_full.jpg",
            alt: "Portrait background Gabriel Rignol"
        }
    },
    {
        nom: "Cartier",
        prénom: "Thierry",
        instrument: "Baryton",
        bio: "C'est \u00E0 Bordeaux que Thierry Cartier d\u00E9bute ses \u00E9tudes de chant lyrique, pour les poursuivre \u00E0 partir de septembre 2017 au Centre de Musique Baroque de Versailles, o\u00F9 il va se former sp\u00E9cifiquement \u00E0 l'approche des r\u00E9pertoires baroques. Il int\u00E8gre ensuite la classe de C\u00E9line Laly au conservatoire de Versailles afin de se perfectionner. Il b\u00E9n\u00E9ficie des conseils de Chantal Mathias, Sabine Devieilhe et Maarten Konigsberger lors de masterclasses, et se produit r\u00E9guli\u00E8rement sous la direction de diff\u00E9rents chefs comme S\u00E9bastien Dauc\u00E9 (Ensemble Correspondances), Louis-No\u00EBl Bestion de Camboulas (Les Surprises), Ga\u00E9tan Jarry (Marguerite Louise), Marie Van Rhijn (l'Assembl\u00E9e), enregistre l'int\u00E9grale des grands motets de Lully aux c\u00F4t\u00E9s de St\u00E9phane Fuget (Les Epop\u00E9es) et participe \u00E0 la production des Dialogues des Carm\u00E9lites de Poulenc \u00E0 l'op\u00E9ra de Bordeaux en 2023. \n\n        En 2025, Thierry suit le parcours de la Jeune sc\u00E8ne lyrique organis\u00E9 par l'Arcal, et int\u00E8gre la promotion 2025-2027 de l'Acad\u00E9mie de l'Op\u00E9ra Royal de Versailles.\n",
        portrait: {
            src: "/ensembleGallery/photos des musiciens/Thierry Cartier.jpg",
            alt: "Portrait du baryton Thierry Cartier",
        },
        modal: {
            src: "/ensembleGallery/photosFullModal/Cartier_full.jpg",
            alt: "Portrait background Thierry Cartier"
        }
    },
    {
        nom: "Cardonnet",
        prénom: "Lisa",
        instrument: "Alto",
        bio: "Originaire de Montpellier, Lisa Cardonnet commence l\u2019apprentissage de l\u2019alto avec Jacques Aupetit d\u00E8s son plus jeune \u00E2ge. \n    \n    Elle poursuit ses \u00E9tudes musicales au Conservatoire \u00E0 Rayonnement R\u00E9gional de Perpignan dans la classe d\u2019Antoine Dautry, au Conservatoire National Sup\u00E9rieur de Lyon dans la classe de Fran\u00E7oise Gn\u00E9ri et \u00E0 la Musikhochschule de Leipzig dans la classe de Tatjana Masurenko. Enfin, c\u2019est \u00E0 la Haute Ecole de Musique de Lausanne, site de Sion Valais-Wallis qu\u2019 elle obtient son dipl\u00F4me de Master of Arts en 2021 dans la classe de Tatjana Masurenko. \n    \n    Son activit\u00E9 artistique aux multiples facettes va de la musique baroque \u00E0 la musique contemporaine en passant par l\u2019improvisation, la cr\u00E9ation, la m\u00E9diation et l\u2019enseignement. \n    \n    Lisa se produit autant en soliste qu\u2019au sein de formations de musique de chambre. Ainsi, depuis 2019, elle joue dans l\u2019ensemble Edera dont elle est cofondatrice.",
        portrait: {
            src: "/ensembleGallery/photos des musiciens/Lisa Cardonnet.jpg",
            alt: "Portrait de l'altiste Lisa Cardonnet",
        },
        modal: {
            src: "/ensembleGallery/photosFullModal/Cardonnet_full.jpg",
            alt: "Portrait background Lisa Cardonnet"
        }
    },
    {
        nom: "Bouilloux",
        prénom: "Véronique",
        instrument: "Violon",
        bio: "Apr\u00E8s des \u00E9tudes de violon baroque \u00E0 l'ENM de Villeurbanne aupr\u00E8s de Simon Heyerick, V\u00E9ronique Bouilloux int\u00E8gre le CNSMD de Lyon dans la classe d'Odile Edouard o\u00F9 elle obtient son master en 2017. \n    \n    Elle a notamment eu l\u2019occasion de travailler avec Herv\u00E9 Niquet et Le Concert Spirituel (Fireworks, 2015), Christophe Coin (OFJ 2013), Amandine Beyer, Olivier Schneebeli, Barthold Kuijken et Alessandro Moccia. \n    \n    Elle donne par ailleurs des cours de violon en r\u00E9gion lyonnaise et est l\u2019auteur d\u2019un m\u00E9moire de recherches sur \u00AB Les apports d'un retour aux postures historiques dans la pratique du violon \u00BB (CNSMDL 2017).",
        portrait: {
            src: "/ensembleGallery/photos des musiciens/Veronique Bouilloux.jpg",
            alt: "Portrait de la violoniste Véronique Bouilloux",
        },
        modal: {
            src: "/ensembleGallery/photosFullModal/Bouilloux_full.jpg",
            alt: "Portrait background Véronique Bouilloux"
        }
    },
    {
        nom: "Erzberger",
        prénom: "David",
        instrument: "Continuo",
        bio: "David Erzberger est claveciniste, organiste et continuiste. Il a d'abord \u00E9tudi\u00E9 la litt\u00E9rature anglaise \u00E0 Aberdeen, en \u00C9cosse, avant de se consacrer enti\u00E8rement \u00E0 la musique. Ses \u00E9tudes de clavecin, de th\u00E9orie musicale, d'improvisation historique et d'orgue/musique sacr\u00E9e l'ont conduit \u00E0 Leipzig, B\u00E2le, Lucerne et Fribourg, o\u00F9 il a eu pour professeurs Nicholas Parle et Jean-Christophe Dijoux.\n        \n    David se produit r\u00E9guli\u00E8rement avec divers ensembles et orchestres et occupe les fonctions d'organiste et de chef de ch\u0153ur \u00E0 Sachseln (Suisse). \n    \n    Il a enseign\u00E9 la th\u00E9orie musicale \u00E0 l\u2019Universit\u00E9 de musique de Fribourg et \u00E0 Karlsruhe, et travaille actuellement comme accompagnateur au clavecin \u00E0 l'Universit\u00E9 de musique de Lucerne tout en enseignant le clavecin \u00E0 l'\u00C9cole de musique de Zoug.\n",
        portrait: {
            src: "/ensembleGallery/photos des musiciens/David Erzberger.jpg",
            alt: "Portrait du claveciniste David Erzberger",
        },
        modal: {
            src: "/ensembleGallery/photosFullModal/Erzberger_full.jpg",
            alt: "Portrait background David Erzberger"
        }
    },
    {
        nom: "Papasergio",
        prénom: "Manon",
        instrument: "Viole",
        bio: "Musicienne poly-instrumentiste, Manon Papasergio choisit le vaste univers de la musique ancienne pour laisser s\u2019\u00E9panouir les diff\u00E9rentes facettes de sa personnalit\u00E9 musicale.\n\nAttir\u00E9e d\u2019abord par le violoncelle, qu\u2019elle \u00E9tudie \u00E0 Caen, elle d\u00E9bute ensuite la harpe et la viole de gambe au conservatoire de Tours. Charm\u00E9e par la pluralit\u00E9 des voies artistiques qui s\u2019ouvrent \u00E0 elle, elle choisit de s\u2019y consacrer au Conservatoire National Sup\u00E9rieur de musique et de danse de Lyon. Elle y \u00E9tudie entre 2019 et 2025 le violoncelle baroque, la harpe ancienne et la viole de gambe aupr\u00E8s d\u2019Emmanuel Balssa, Ang\u00E9lique Mauillon et Myriam Rignol.\n\nCet enseignement est enrichi de rencontres musicales et humaines qui la poussent \u00E0 co-fonder des ensembles tels que le consort de violons Renaissance La Capriola, avec lequel elle obtient un master de musique de chambre en 2024, ou le trio m\u00E9di\u00E9val Ecco la Primavera, sp\u00E9cialis\u00E9 dans l\u2019\u00E9laboration de contes musicaux.\n        \nAppr\u00E9ci\u00E9e pour ses qualit\u00E9s de continuiste, Manon est appel\u00E9e en tant que violiste, harpiste ou violoncelliste par de nombreux ensembles de musique ancienne parmi lesquels les Musiciens de Saint-Julien, la Guilde des Mercenaires, la N\u00E9buleuse ou encore Cappella Mediterranea. Remarqu\u00E9e en 2023 lors du concours international de viole de gambe Bach-Abel, dont elle obtient le premier prix, Manon se tourne naturellement vers cet instrument pour son premier enregistrement en tant que soliste, qui lui donne l\u2019occasion d\u2019explorer le r\u00E9pertoire flamboyant et intrigant de la viola bastarda italienne.",
        portrait: {
            src: "/ensembleGallery/photos des musiciens/Manon Papasergio.jpg",
            alt: "Portrait de la gambiste Manon Papasergio",
        },
        modal: {
            src: "/ensembleGallery/photosFullModal/Papasergio_full.jpg",
            alt: "Portrait background Manon Papasergio"
        }
    },
    {
        nom: "Robinne",
        prénom: "Maëlys",
        instrument: "Soprano",
        bio: "Ma\u00EBlys Robinne a commenc\u00E9 sa formation artistique en France, o\u00F9 elle s\u2019est initi\u00E9e \u00E0 la fois \u00E0 la danse et au chant. Sa passion pour la musique ancienne l\u2019a conduite \u00E0 rejoindre le prestigieux Centre de Musique Baroque de Versailles. Elle a poursuivi ses \u00E9tudes de chant lyrique au P\u00F4le Sup\u00E9rieur de Paris et \u00E0 l\u2019\u00C9cole Sup\u00E9rieure de Musique de Catalogne, \u00E0 Barcelone, en interpr\u00E9tation classique et en op\u00E9ra. R\u00E9cemment, elle a achev\u00E9 sa formation vocale et musicale avec Carlos Mena \u00E0 la Schola Cantorum de B\u00E2le.\n\n    Ma\u00EBlys travaille avec des ensembles internationaux tels que la Capella Nacional (Jordi Savall), le Bach Collegium Japan (Masaaki Suzuki), le Bachcelona Consort (Daniel Tarrida), La Cetra (Andrea Marcon), le Bach Collegium Barcelona (Pau Jorquera) ou Vox Luminis (Lionel Meunier), parmi d\u2019autres. En soliste, elle interpr\u00E8te des \u0153uvres de Vivaldi, Haendel, Pergolesi, Haydn, Mozart, Schubert, Bach, Faur\u00E9, Mendelssohn, etc. \n    \n    Son engagement pour l\u2019excellence musicale l\u2019a conduite \u00E0 recevoir la Bourse Salvat Bach 2023, une distinction qui r\u00E9compense sa ma\u00EEtrise du r\u00E9pertoire vocal de Bach.\n",
        portrait: {
            src: "/ensembleGallery/photosFullModal/Robinne_full.jpg",
            alt: "Portrait de la chanteuse Maëlys Robinne",
        },
        modal: {
            src: "/ensembleGallery/photosFullModal/Robinne_full.jpg",
            alt: "Portrait background Maëlys Robinne"
        }
    },
    {
        nom: "Mourault",
        prénom: "Christophe",
        instrument: "Violon",
        bio: "Violoniste, Christophe Mourault se forme aupr\u00E8s de Fran\u00E7ois-Marie Drieux, Marie Rouqui\u00E9 (p\u00F4le Ali\u00E9nor, Poitiers), Enrico Gatti (Conservatorio di Bologna), et Odile \u00C9douard (CNSMD de Lyon). \n    \n    Particuli\u00E8rement int\u00E9ress\u00E9 par les premiers r\u00E9pertoires violonistiques, il r\u00E9dige un m\u00E9moire de recherche sur la diminution et l\u2019ornementation chez les violonistes, au d\u00E9but du 17\u00E8me si\u00E8cle, en Italie.\n       \n    Il se produit r\u00E9guli\u00E8rement en concert au sein de diverses formations telles que le quatuor \u00E0 cordes I Folletti, le trio contr\u2019Arco, et les ensembles Correspondances, Il Caravaggio, Les Surprises, Acanthus baroque, Saint Honor\u00E9 et Aurea Antiqua.\n",
        portrait: {
            src: "/ensembleGallery/photos des musiciens/Christophe Mourault.png",
            alt: "Portrait du violoniste Christophe Mourault",
        },
        modal: {
            src: "/ensembleGallery/photos des musiciens/Christophe Mourault.png",
            alt: "Portrait background Christophe Mourault"
        }
    },
];




const chef: Chef = {
  nom: "Chapolard",
  prénom: "Noé",
  role: "Chef d'orchestre",
  portrait: {
    src: "/ensembleGallery/photos des musiciens/noe_portrait.png",
    alt: "Photo portrait de Noé Chapolard",
  },
  modal: {
    src: "/ensembleGallery/photosFullModal/noe_background.png",
    alt: "Noé Chapolard et l'ensemble Phaenomen",
  }
}

const crédit: Credit[] = [
  {
    nom: "Canals",
    prénom: "Elisanda",
    role: "Photographe",
  },
  {
    nom: "Grilc",
    prénom: "Andrej",
    role: "Photographe",
  },
  {
    nom: "Montezuma",
    prénom: "Ana-lucia",
    role: "Photographe",
  },
  {
    nom: "Bermudez",
    prénom: "Sergio",
    role: "Photographe",
  },
  {
    nom: "Lepeltier-Kovacs",
    prénom: "Dorine",
    role: "Photographe",
  },
  {
    nom: "Muller",
    prénom: "Matthias",
    role: "Photographe",
  },
  {
    nom: "Guignard",
    prénom: "Elise",
    role: "Photographe",
  },
  {
    nom: "Cherki",
    prénom: "Julie",
    role: "Photographe",
  },
  {
    nom: "",
    prénom: "",
    role: "Photographe",
  },
  {
    nom: "",
    prénom: "",
    role: "Photographe",
  },
];

const data = { musiciens, crédit, chef };
export default data;
