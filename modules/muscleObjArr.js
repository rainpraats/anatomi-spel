export const musclesObjectsArr = [
    // the muscles should apear in the same order as they are listed in the picture.
    {
        name: "triceps brachii",
        orgin: ["caput longum - tuberculum infraglenoidale scapulae", "caput mediale - os humerus baksida", "caput laterale - os humerus utsida"],
        attachment: ["olecaron, ledkapseln i art cubiti"],
        action: {"art humeri ( caput longum )": ["extention", "adduktion"], "art cubiti ( alla delar )": ["extention, spänner ledkapseln"]}, 

    },
    {
        name: "erector spinae",
        orgin: [
            "os sacrum",
            "crista iliaca",
            "columna vertebralis",
            "samtliga kotors processus spinosus", 
            "samtliga kotors processus transversus",
            "samtliga os costae",
        ],   
        attachment: [
            "columna vertebralis", 
            "samtliga kotors processus spinosus", 
            "samtliga kotors processus transversus",
            "samtliga os costae",
            "linea nuchae superior till processus mastoideus",
            "nackrosetten når linea nuchae inferior"
        ],
        action: {
            "columna bilateralt": "extention",
            "columna unilateralt": [
                "lateralflexion", 
                "ipsilateral rotation", 
                "kontralateral roattion", 
                "stabiliserar columna vertebralis"
        ]},
    },
    {
        name: "gluteus maximus",
        orgin: [
            "crista iliaca",
            "os sacrum",
            "os coccygis",
            "lig sactoruberale",
        ],
        attachment: [
            "tuberositas glutea",
            "trochanter major",
            "via tractus iliotibialis",
            "condylus lateralis tibiae",
        ],
        action: {
            "art coxae": [
                "extension",
                "utåtrotation",
                "abduktion",
                "adduktion",
                "horisonal abduktion",
            ],
            "art genus": [
                "aktiv stabilisation av lateralsidan",
                "utåtrotation",
            ],
        },
    },
]