// TODO
// action spec - the plus doesnt dissapear even though its all filled out.
// sort the search list array in alphabetical order.

// klickar du på en tom blank utan att ha valt latin namn kan du skriva in namnet och den blir grön när det ör rätt.
// den blir röd när du klickar av och det finns text men texten är fel.

// om du skriver 1 ( etta ) i sökrutan dyker adduktorer korta ( plats 1 ) upp direkt.

// wikipedia link direkt till varje latinska namn som man kan klicka på när man musar över namnet.

// the muscles should apear in the same order as they are listed in the picture.
const musclesObjectsArr = [
    {
        "name": "Adduktorer långa",
        "origin": [
            "ramus superior pubis"
        ],
        "attachment": [
            "linea aspera "
        ],
        "action": {
            "Höftleden": [
                "adduktion ",
                "utåtrotation",
                "lätt flexion"
            ]
        }
    },
    {
        "name": "Adduktorer korta",
        "origin": [
            "ramus inferior pubis"
        ],
        "attachment": [
            "linea aspera"
        ],
        "action": {
            "Höftleden": [
                "adduktion ",
                "utåtrotation"
            ]
        }
    },
    {
        "name": "Biceps Brachii",
        "origin": [
            "tuberculum supraglenoidale ner i sulcus intertubularis"
        ],
        "attachment": [
            "tuberositas radii"
        ],
        "action": {
            "Armbågsleden": [
                "flexion ",
                "supination"
            ],
            "Axelleden ": [
                "abduktion",
                "inåtrotation ",
                "flexion",
                "adduktion"
            ]
        }
    },
    {
        "name": "Erector Spinae",
        "origin": [
            "os sacrum",
            "crista illiaca",
            "processus spinosus",
            "iliocostalis lumborum",
            "iliocostalis lumborum:",
            "6 nedre revben till 6 övre",
            "från 6 nedre revbenen till 6 övre",
            "costae 6-3",
            "l!-l5",
            "processus transversus th7-th12",
            "processus transversus th1-th6",
            "processus transversus th3-th5 och c5-c7",
            "processus spinosus th3-th5",
            "processus spinosus c4-c7 och th1-th3",
            "l1-l5"
        ],
        "attachment": [
            "costae 5-12",
            "från 6 nedre revbenen till 6 övre",
            "processus transversus c6-c4 ",
            "costae 1 eller 2 ",
            "processus transversus c2-c5",
            "processus mastoideus ",
            "processus transversus c1-c2"
        ],
        "action": {
            "Ryggraden": [
                "extension",
                "lateralflexion",
                "utjämnar thorakalkyfosen"
            ],
            "Huvud": [
                "rotation ",
                "extension"
            ]
        }
    },
    {
        "name": "Extensorer i underarmen",
        "origin": [
            "humerus laterala epikondyl",
            "proximala ulna",
            "radius dorsalt",
            "ulna ",
            "membrana interossea",
            "dorsalt ulna",
            "dorsalt distala ulna"
        ],
        "attachment": [
            "bas på metacarpalben 3 dorsalt",
            "bas på metacarpalben 2 dorsalt",
            "bas på distala falanx 2-5",
            "bas på distala falanx 2 till 5",
            "dorsalaponeurosen på falanx 5 ",
            "bas av metacarpalben 5 dorsalt"
        ],
        "action": {
            "Extension": [
                "phalanx 2 ",
                "pollux"
            ],
            "Abduktion": [
                "pollux"
            ],
            "Handleden ": [
                "radialdeviation"
            ]
        }
    },
    {
        "name": "Flexorer i underarmen",
        "origin": [
            "mediala humerus epikondylen",
            "processus coronoideus på ulnae och proximala radius",
            "övre halvan av ulnae och membrana interossea ",
            "radius anteriort och membrana interossea"
        ],
        "attachment": [
            "distal phalanx på pollux",
            "distal phalanx 2-5 ",
            "phalanx 2-5",
            "pisiforme,hamtum och basen av metacarpalben 5",
            "palmart på bas 2 av metacarpalbenet",
            "metacarpalben 2-5",
            "lateralt på radius mitt"
        ],
        "action": {
            "Armbågsleden": [
                "lite flexion",
                "pronation"
            ],
            "Handleden": [
                "palmarflexion och radialdeviation",
                "palmarflexion och ulnardeviation",
                "spänner palmaraponeurosen",
                "flexion av phalanx 2-5",
                "flexion av pollux"
            ],
            "Armbågen": [
                "lite flexion och pronation",
                "pronation",
                "flexion"
            ]
        }
    },
    {
        "name": "Iliopsoas",
        "origin": [
            "ilium ",
            "th12-l1-l4",
            "processus transverses ",
            "processus transversus l1-l5"
        ],
        "attachment": [
            "trochanter minor"
        ],
        "action": {
            "Höftleden": [
                "flexion",
                "utåtrotation",
                "inåtrotation",
                "inåtrotation"
            ],
            "Bål": [
                "lateralflexion"
            ]
        }
    },
    {
        "name": "Infraspinatus",
        "origin": [
            "fossa infraspinata"
        ],
        "attachment": [
            "tuberculum majus på humerus"
        ],
        "action": {
            "Axelleden": [
                "stabilisering ",
                "utåtrotation"
            ]
        }
    },
    {
        "name": "Levator Scapulae",
        "origin": [
            "processus transversus c1-c4"
        ],
        "attachment": [
            "angulus superior scapulae "
        ],
        "action": {
            "Scapulae": [
                "elevation",
                "inåtrotation"
            ]
        }
    },
    {
        "name": "Pectoralis major",
        "origin": [
            "mediala claviculae",
            "sternum",
            "rectusskidan "
        ],
        "attachment": [
            "laterala sidan av proximala humerus(nedan tuberculum majus)"
        ],
        "action": {
            "Armen": [
                "adduktion ",
                "inåtrotation"
            ],
            "Thorax": [
                "hjälper till vid andning"
            ]
        }
    },
    {
        "name": "Pectoralis minor",
        "origin": [
            "costae 3-5"
        ],
        "attachment": [
            "processus coracoideus"
        ],
        "action": {
            "Scapulae": [
                "depression",
                "rotation"
            ],
            "Costae": [
                "elevation"
            ]
        }
    },
    {
        "name": "Quadratus Lumborum",
        "origin": [
            "costae 12 ",
            "processus transversus l1-l5"
        ],
        "attachment": [
            "crista iliaca"
        ],
        "action": {
            "Bål": [
                "lateralflexion"
            ]
        }
    },
    {
        "name": "Rectus femoris",
        "origin": [
            "spina iliaca anterior inferior",
            "övre kant acetabulum "
        ],
        "attachment": [
            "tuberositas tibiae via lig patella"
        ],
        "action": {
            "Knäled": [
                "extension"
            ],
            "Höftled": [
                "flexion"
            ]
        }
    },
    {
        "name": "Rhomboideii",
        "origin": [
            "processus spinosus c6-c7",
            "processus spinosus th1-th4"
        ],
        "attachment": [
            "margo medialis scapulae "
        ],
        "action": {
            "Scapulae": [
                "retraktion",
                "inåtrotation",
                "stabilisering "
            ],
            "thorax": [
                "pressas mot scapulae"
            ]
        }
    },
    {
        "name": "Supraspinatus",
        "origin": [
            "fossa supraspinata"
        ],
        "attachment": [
            "tuberculum majus humerus "
        ],
        "action": {
            "Axelleden": [
                "abduktion",
                "utåtrotation",
                "stabilisering"
            ]
        }
    },
    {
        "name": "Subscapularis",
        "origin": [
            "fossa subscapularis"
        ],
        "attachment": [
            "tuberculum minus humerus"
        ],
        "action": {
            "Axelleden": [
                "inåtrotation"
            ]
        }
    },
    {
        "name": "Teres major",
        "origin": [
            "lateralt på scapulae vid angulus inferior "
        ],
        "attachment": [
            "nedanför tuberculum minus "
        ],
        "action": {
            "Axelleden": [
                "inåtrotation",
                "adduktion"
            ]
        }
    },
    {
        "name": "Teres minor",
        "origin": [
            "margo lateralis på scapulae "
        ],
        "attachment": [
            "tuberculum majus på humerus "
        ],
        "action": {
            "Axelleden": [
                "utåtrotation"
            ]
        }
    },
    {
        "name": "Tibialis anterior",
        "origin": [
            "laterala tibia och membrana interossea"
        ],
        "attachment": [
            "basen av metatarsale 1 ",
            "cuneiforme mediale"
        ],
        "action": {
            "Fotleden ": [
                "dorsalflexion",
                "supination"
            ]
        }
    },
    {
        "name": "Mm. Vastii",
        "origin": [],
        "attachment": [],
        "action": {}
    },
    {
        "name": "Latissimus Dorsi",
        "origin": [
            "via thoracolumbalfascian från processus spinosus th7-th12,l1-l5,costae 9-12 och crista iliaca"
        ],
        "attachment": [
            "caudalt om tuberculum minus anteriort"
        ],
        "action": {
            "Adduktion av armen i adderat läge": [],
            "Thorax": [
                "forcerad utandning vid hosta"
            ],
            "Axelleden": [
                "adduktion vid adducerat läge",
                "inåtrotation",
                "extension"
            ]
        }
    },
    {
        "name": "Trapezius",
        "origin": [
            "occipitalis ",
            "lig nuchae",
            "processus spinosus c7-th3",
            "processus th3-th12"
        ],
        "attachment": [
            "lateralt clavicula",
            "acromion",
            "spina scapulae"
        ],
        "action": {
            "Scapula": [
                "stabilisering",
                "retraktion",
                "elevation",
                "utåtrotation",
                "inåtrotation",
                "depression"
            ]
        }
    },
    {
        "name": "Gluteus Maximus",
        "origin": [
            "spina iliaca posterior superior",
            "lateralt på scarum",
            "lateralt på sacrum",
            "coccygis"
        ],
        "attachment": [
            "tractus iliotibialis ",
            "distalt på femur",
            "proximalt posteriort femur"
        ],
        "action": {
            "Höftleden": [
                "extension",
                "utåtrotation",
                "adduktion",
                "abduktion"
            ]
        }
    },
    {
        "name": "Gluteus Medius",
        "origin": [
            "posteriort på illium mellan linea glutea anterior och linea glutea inferior",
            "posteriort på illium",
            "posteriort på ilium",
            "posteriort på ilium mellan linea glutea anterior och linea glutea inferior"
        ],
        "attachment": [
            "trochanter major"
        ],
        "action": {
            "Höftleden": [
                "abduktion",
                "flextion",
                "inåtrotation",
                "extension"
            ]
        }
    },
    {
        "name": "Hamstrings",
        "origin": [
            "tuber ischiadicum",
            "linea aspera"
        ],
        "attachment": [
            "pes anserius ",
            "mediala tibiacondylen",
            "caput fibulae"
        ],
        "action": {
            "Höftleden": [
                "extension",
                "inåtrotation"
            ],
            "Knäleden": [
                "flexion"
            ],
            "Underbenet": [
                "inåtrotation",
                "utåtrotation"
            ]
        }
    },
    {
        "name": "Quadriceps Femoris",
        "origin": [
            "proximalt, medialt femur",
            "proximalt femurs mitt/lateralt",
            "proximalt,lateralt femur"
        ],
        "attachment": [
            "proximalt femurs mitt/lateralt",
            "tuberositas tibae via lig patella"
        ],
        "action": {
            "Knäleden": [
                "extension"
            ]
        }
    },
    {
        "name": "Tensor Fasciae Latae",
        "origin": [
            "spina iliaca anterior superior ",
            "anteriort om trochanter major över i tractus iliotibialis"
        ],
        "attachment": [
            "laterala tibiakondylen"
        ],
        "action": {
            "Höftleden": [
                "flexion",
                "abduktion",
                "viss inåtrotation"
            ],
            "Knäleden": [
                "extension"
            ]
        }
    },
    {
        "name": "Triceps Surae",
        "origin": [
            "mediala femurcondylen",
            "laterala femurcondylen",
            "caput fibulae ",
            "proximalt på tibiae"
        ],
        "attachment": [
            "achillessenan på tuber calcanei"
        ],
        "action": {
            "Fotleden": [
                "plantarflexion ",
                "supination"
            ],
            "Knäleden": [
                "flexion"
            ]
        }
    },
    {
        "name": "Sartorius",
        "origin": [
            "spina iliaca anterior superior"
        ],
        "attachment": [
            "pes anserinus "
        ],
        "action": {
            "Höftleden": [
                "flexion",
                "abduktion",
                "utåtrotation"
            ],
            "Knäleden": [
                "flexion"
            ],
            "Underbenet": [
                "inåtrotation"
            ]
        }
    },
    {
        "name": "Triceps Brachii",
        "origin": [
            "tuberculum infraglenoidale scapulae",
            "medialt humerus dorsala yta ",
            "lateralt humerus dorsala yta"
        ],
        "attachment": [
            "olecranon "
        ],
        "action": {
            "Armbågen": [
                "extension"
            ],
            "Axelleden": [
                "adduktion"
            ]
        }
    },
    {
        "name": "Deltoideus",
        "origin": [
            "laterala claculae",
            "acromion ",
            "spina scapulae"
        ],
        "attachment": [
            "tuberositas deltoidea humerus"
        ],
        "action": {
            "Axelleden": [
                "abduktion"
            ]
        }
    }
]

const latinArrObj = { // for the latin names to be displayed depending on what page we selected.
    skeleton: ['Os zygomaticum', 'Processus mastoideus', 'Os mandibularis', 'Processus transversus C1', 'Processus spinosus C2', 'Processus spinosus C7', 'Costa XII', 'Crista iliaca', 'Incisura jugularis', 'Linea alba', 'Processus xiphoideus', 'Linea nuchae superior', 'Protuberantia occipitalis externa', 'Processus coracoideus', 'Spina scapulae', 'Acromion', 'Fossa supraspinata', 'Fossa infraspinata', 'Margo medialis scapulae', 'Margo lateralis scapulae', 'Angulus superior scapulae', 'Angulus inferior scapulae', 'Tuberculum majus humeri', 'Tuberculum minus humeri', 'Sulcus intertubercularis', 'Tuberositas deltoidea', 'Epicondylus lateralis humeri', 'Epicondylus medialis humeri', 'Olecranon', 'Caput radii', 'Processus styloideus radii', 'Processus styloideus ulnae'],
    musclesFront: ['Adduktorer långa', 'Adduktorer korta', "Infraspinatus", 'Biceps Brachii', 'Erector Spinae', 'Extensorer i underarmen', 'Flexorer i underarmen', 'Iliopsoas', 'Levator Scapulae', 'Pectoralis major', 'Pectoralis minor', 'Quadratus Lumborum', 'Rectus femoris', 'Supraspinatus', 'Subscapularis', 'Teres major', 'Teres minor', 'Tibialis anterior', 'Mm. Vastii', 'Latissimus Dorsi', 'Rhomboideii', 'Trapezius', 'Gluteus Maximus', 'Gluteus Medius', 'Hamstrings', 'Quadriceps Femoris', 'Tensor Fasciae Latae', 'Triceps Surae', 'Sartorius', 'Triceps Brachii', 'Deltoideus'],
    musclesBack: [],
    musclesDeep: [],
}

const originsAndAttachmentsArr = getArrForFilterList("OrgAndAtt") // just creates a list of all origins and attachments // this is based on data from the musclesObjectsArr
const actionTitlesArr = getArrForFilterList("actionTitles")
const actionValuesArr = getArrForFilterList("actionValues")

const latinName = document.getElementById("latin-names")
const blankName = document.getElementById("blank-names")
const muscleFrontButton = document.getElementById("muscle-front-button")
const muscleBackButton = document.getElementById("muscle-back-button")
const skeletonButton = document.getElementById("skeleton-button")
const resetButton = document.getElementById("reset-button")
const searchBox = document.getElementById("search-box")

let currentPage = localStorage.getItem("currentPage") || "skeleton" // either skeleton or muscles and is used to keep track of what bodyparts to display.
let clickedSpecDiv; // stores the spec input div when it gets clicked. This gets used in the clickForInput function.

loadPage(currentPage)
loadScore(latinArrObj) // do this once when the page loads. // count all the latin names and the score.

searchBox.addEventListener("keyup", findSearchMatches)
resetButton.addEventListener("click", confirmReset)
skeletonButton.addEventListener("click", function loadThePage() {
    loadPage("skeleton")
})
muscleFrontButton.addEventListener("click", function loadThePage() {
    loadPage("musclesFront")
})
muscleBackButton.addEventListener("click", function loadThePage() {
    loadPage("musclesBack")
})

console.log(localStorage)

function applyGamelogic() {
    // assign the divs.
    let latinDivArr = document.querySelectorAll("#latin-names div");
    const blankDivArr = document.querySelectorAll("#blank-names div");

    // apply the divs with the onclick functionality.
    latinDivArr = shuffleFlexItems(latinDivArr)

    let clickedLatin = {
        element: undefined, 
        clicked: false, // has clicked attribute that controls the if statements.
        name: undefined, // stores the name even if display is equal to none.
    };
    for (let i = 0; i < latinDivArr.length; i++) {
        const currentLatin = latinDivArr[i];
        currentLatin.addEventListener("click", function() {
            //we click a latin name.
            if (currentLatin != clickedLatin.element && clickedLatin.clicked == true) {
                // if any other element has already been selected and you press this element.
                
                //deselect old element.
                clickedLatin.clicked = false
                //change its color back to white.
                clickedLatin.element.style.removeProperty("background-color")
    
                //select the new clicked element.
                clickedLatin.element = currentLatin
                clickedLatin.clicked = true

                //change its color to orange.
                clickedLatin.element.style.backgroundColor = "orange"

                //store the name of the div you just clicked.
                clickedLatin.name = currentLatin.textContent

            } else if (clickedLatin.clicked == true) {
                // if we press the same element thats already been pressed.
    
                //deselect that element.
                clickedLatin.clicked = false
                clickedLatin.element.style.removeProperty("background-color")
                clickedLatin.element = undefined
                clickedLatin.name = undefined
            } else {
                //first time clicking a latin element.
    
                //select the new clicked element.
                clickedLatin.element = currentLatin
                clickedLatin.clicked = true
                clickedLatin.element.style.backgroundColor = "orange"
                clickedLatin.name = currentLatin.textContent
            }
        });
    };
    
    let legalBlanks = []; // if its in the array then we can manipulate it.
    for (let i = 0; i < blankDivArr.length; i++) {
        const currentBlank = blankDivArr[i];

        legalBlanks.push(currentBlank)

        currentBlank.addEventListener("click", function() {
            if (clickedLatin.clicked == true && currentBlank.style.backgroundColor != "limegreen") {
                // do nothing if no latin name is selected.
                // if its already green do nothing.
                if (legalBlanks.includes(currentBlank)) {
                    //if its not included in the array do nothing.

                    //remove any old red blanks.
                    checkForRedBlanks(blankDivArr)
                    let filtredLatin = replaceSpacesWithLines(clickedLatin.element.textContent)
                    if (filtredLatin.indexOf(currentBlank.id) > -1) {
                        // if the id matches the text.

                        //Change the text within blank.
                        insertParagraph(clickedLatin.element.textContent, currentBlank)

                        // save the answer to local storage.
                        pushToArrInLocalStorage(clickedLatin.element.textContent)

                        //remove the latin div.
                        clickedLatin.element.remove()

                        //reset the clicked latin data.
                        clickedLatin.element = undefined;
                        clickedLatin.clicked = false

                        //make the blank green.
                        currentBlank.style.backgroundColor = "limeGreen"

                        //remove it from the 
                        legalBlanks.splice(legalBlanks.indexOf(currentBlank), 1)

                        // lastly add +1 the scoreboard.
                        incrementScore()
                        
                    } else if (filtredLatin.indexOf(currentBlank.id) <= -1) {
                        //if its not right.

                        //Change the text within blank.
                        insertParagraph(clickedLatin.element.textContent, currentBlank)

                        //change the color to red.
                        currentBlank.style.backgroundColor = "red"
                    }
                }
            }
        })
    };
}

function loadPage(pageName) {
    // loads correct page based on the argument given.
    currentPage = pageName;

    // update localStorage currentPage
    localStorage.setItem("currentPage", currentPage)

    let counter = 1;

    const latinNameDivs = document.querySelectorAll("#latin-names div");
    const blankNameDivs = document.querySelectorAll("#blank-names div");

    const image = document.getElementById("image")

    const imageObj = {
        skeleton: "images/skeleton.png",
        musclesFront: "images/muscles-front.png",
        musclesBack: "images/muscles-back.png",
        musclesDeep: "images/muscles-deep.png",
    }

    image.src = imageObj[pageName]

    for (let i = 0; i < latinNameDivs.length; i++) {
        //delete latin divs.
        const currentLatin = latinNameDivs[i];
        currentLatin.remove()
    }

    for (let i = 0; i < blankNameDivs.length; i++) {
        // delete the blank divs.
        const currentBlank = blankNameDivs[i];
        currentBlank.remove()
    }

    for (let i = 0; i < latinArrObj[pageName].length; i++) {
        //repopulate the game names with bones.
        const currentName = latinArrObj[pageName][i];
        // create a div.
        const newDiv = document.createElement("div")

        // have it display the name of the muscle.
        insertParagraph(currentName, newDiv)
        latinName.appendChild(newDiv)

        // assign the muscle a spot in the blank divs.
        // create a new  blank div.
        const newBlank = document.createElement("div")
        insertParagraph(`${counter}. `, newBlank) // assign the number.
        counter++

        //assign the correct id to the blank.
        newBlank.setAttribute("id", replaceSpacesWithLines(currentName))
        blankName.appendChild(newBlank)
    }

    fillInCorrectAnswers()
    applyGamelogic()

    // only if we are on a muscle page and the muscle table doesnt exist yet.
    //  Load the muscle table.
    const muscleTable = document.querySelector(".muscle-table")
    if (pageName != "skeleton" && muscleTable == null) {
        loadMuscleTable()
    } else if ( pageName == "skeleton" && muscleTable != null) {
        deleteMuscleTable()
    } 
}

function shuffleFlexItems(arr) {
    arr.forEach(element => {
        element.style.order = Math.floor(Math.random() * (arr.length + 1));
    });
    return arr;
}

function checkForRedBlanks(elementArr) {
    elementArr.forEach(element => {
        if (element.style.backgroundColor == "red") {
            //check if there are any red blanks.

            //change them to white.
            element.style.backgroundColor = "white"

            //remove the text from the element.
                element.children[1].remove()
        }
    });
}

function createListItem(text) {
    // returns a lsit item with the given text.
    const newLi = document.createElement("li")

    //give it some text.
    const newContent = document.createTextNode(text);
    
    newLi.appendChild(newContent)

    return newLi;
}

function insertParagraph(text, parentDiv) {
    //create a parahraph
    const newP = document.createElement("p");

    //give it some text.
    const newContent = document.createTextNode(text);

    // enter the text into the paragraph
    newP.appendChild(newContent);

    //insert it into the blank div
    parentDiv.appendChild(newP)
}

function createParagraph(string) {
    // return a P element with the argument as text.
    const newP = document.createElement("p")
    const newText = document.createTextNode(string)
    newP.appendChild(newText)
    return newP;
}

function replaceSpacesWithLines(text) {
    // we use this to apply the ids the correct way.
    return text.replace(/\s/g, "-")
}

function countAllLatinNames(allLatinNamesObj) {
    let sumScore = 0;
    for (const array in allLatinNamesObj) {
        sumScore += allLatinNamesObj[array].length;
    }

    return sumScore;
}

function countAllMuscleSpecs(allMuscleSpecsObjArr) {
    // this loops through each of the muscle origins, attachments or each action.
    // then it counts how many items there are.
    let sumScore = 0;
    for (let i = 0; i < allMuscleSpecsObjArr.length; i++) {
        const muscleObject = allMuscleSpecsObjArr[i];
        
        const muscleSpecArr = ["origin", "attachment", "action",]

        for (let j = 0; j < muscleSpecArr.length; j++) {
            const muscleSpec = muscleSpecArr[j];

            if (Array.isArray(muscleObject[muscleSpec])) {
                sumScore += muscleObject[muscleSpec].length
            } else {
                for (property in muscleObject[muscleSpec]) {
                    // if the object has another object in it.
                    // count this title then the length of its value array.
                    sumScore += 1;
                    if (Array.isArray(muscleObject[muscleSpec][property])) {
                        sumScore += muscleObject[muscleSpec][property].length;

                    } else {
                        // the object only has one value
                        sumScore += 1;
                    }
                }
            }
        }
    }
    return sumScore;
}

function loadScore() {
    // updates score every time page is refreshed.
    const scoreboard = document.getElementById("score")
    
    let score = localStorage.getItem("points") || 0;

    let totalScore = countAllLatinNames(latinArrObj) + countAllMuscleSpecs(musclesObjectsArr);

    // update the scoreboard.
    scoreboard.innerText = `poäng: ${score} / ${totalScore}`
}

function incrementScore() {
    // add a point and uppdate the scoreboard.
    const scoreboard = document.getElementById("score")

    let score = localStorage.getItem("points") || 0;

    score++

    localStorage.setItem("points", score)

    // regexp to filter every number before a blank space.
    const pattern = /[0-9]+(?=\s)/;
    // remove everything before the blank space in scoreboard text.
    const newScore = scoreboard.innerText.replace(pattern, score)
    // update the scoreboard.
    scoreboard.innerText = `${newScore}`
}

function findSearchMatches() {
    // when you type a letter into the searchbox display only that which matches.
    const latinNameDivs = document.querySelectorAll("#latin-names div");
    const searchBox = document.getElementById("search-box")

    const filter = searchBox.value.toUpperCase()
    
    for (let i = 0; i < latinNameDivs.length; i++) {
        const currentLatin = latinNameDivs[i];
        if (currentLatin.innerText.toUpperCase().indexOf(filter) == -1) {
            currentLatin.style.display = "none"
        } else {
            currentLatin.style.display = ""
        }
    }
}

function regexpRemoveWhiteSpaces(text) {
    const pattern = /\S+/g // find all non whitespace caracters.
    return text.match(pattern)
}

function testRegexp() {
    let arr = document.querySelectorAll("#latin-names div")
    return regexpRemoveWhiteSpaces(arr[0].textContent)
}

function pushToArrInLocalStorage(correctName) {
    // take the correct latin name 
    // and push it to the correct names array in local storage.
    let correctNamesArr = JSON.parse(localStorage.getItem("correctNames")) || []
    correctNamesArr.push(correctName)
    localStorage.setItem("correctNames", JSON.stringify(correctNamesArr))
}

function fillInCorrectAnswers() {
    // remove latin divs that are correctly matched.
    // fill in blank divs that are correct.
    // loop through the data and match it to the page.

    const latinNameDivs = document.querySelectorAll("#latin-names div");
    const blankNameDivs = document.querySelectorAll("#blank-names div");

    // use the local storage correctNames data.
    let correctLatinArr = JSON.parse(localStorage.getItem("correctNames")) || [];
    // the correct latin arr remembers the previously applied correct answers.

    for (let i = 0; i < correctLatinArr.length; i++) {
        const correctLatin = correctLatinArr[i];

        for (let j = 0; j < latinNameDivs.length; j++) {
            const latinDiv = latinNameDivs[j];
            if (latinDiv.textContent == correctLatin) {
                // the correct answers are found.

                // delete the latin name from the webpage if its in the correct array.
                //alternatively we could stop it from being created.
                latinDiv.remove()
                
                //find the corresponding blank.
                const formatedLatin = replaceSpacesWithLines(correctLatin)

                for (let blank = 0; blank < blankNameDivs.length; blank++) {
                    const currentBlank = blankNameDivs[blank];
                    if (currentBlank.id == formatedLatin) {
                        currentBlank.style.backgroundColor = "limegreen"
                        // display the latin name within the blank div.
                        insertParagraph(latinDiv.textContent, currentBlank)
                    }
                }
            }
        }
    }
}

function filterSvenskaMassageWebsitePDFtoArray(text) {
    //filters from copy paste data from the kunskapskrav pdf to an array
    
    //remove /n newline
    // remove bullet using unicode filter U2022 \u2022
    // remove spacebar \s
    let filter = /\n\u2022\s/g

    // replace this with a ", "
    let filteredText = text.replace(filter, `", "`)
    return JSON.parse(`["${filteredText}"]`) // return as an array.
}

function getArrForFilterList(specType) {
    // loops through each muscle and adds its attachments and origins and adds that to an arr.

    let filterArr = []

    for (let i = 0; i < musclesObjectsArr.length; i++) {
        const muscleObject = musclesObjectsArr[i];

        if (specType == "OrgAndAtt") {
            filterArr = filterArr.concat(muscleObject["origin"])
            filterArr = filterArr.concat(muscleObject["attachment"])
        } else if (specType == "actionTitles") {
            filterArr = filterArr.concat(Object.keys(muscleObject["action"]))
        } else if (specType == "actionValues") {
            for (let i = 0; i < Object.values(muscleObject["action"]).length; i++) {
                const valueArr = Object.values(muscleObject["action"])[i];
                filterArr = filterArr.concat(valueArr)   
            }
        }
    }
    return filterArr.sort()
}

// MUSCLE TABLE PART

function loadMuscleTable() {
    // Once the page has loaded this shows the correct pairs of muscles.
    //  with origin, attatchments and functions.
    const mainElement = document.getElementsByTagName("main")[0]
    const muscleTable = document.createElement("article")

    muscleTable.className = "muscle-table"
    mainElement.appendChild(muscleTable)

    appendMuscleTitles(muscleTable)
    appendMuscleRows(musclesObjectsArr, muscleTable)
}

function appendMuscleTitles(muscleTable) {
    // create headlines for the muscle table.
    const titleRow = document.createElement("section")
    titleRow.className = "muscle-titles"

    // add each title.
    const titles = ["Muskel", "Ursprung", "Fäste", "Funktion",]
    for (let i = 0; i < titles.length; i++) {
        const title = titles[i];
        insertParagraph(title, titleRow)
    }

    // append the title row to the table
    muscleTable.appendChild(titleRow)
}

function appendMuscleRows(muscleObjectArr, muscleTable) {
    // creates a new muscle table row.
    // fill in the correct answers from local storage.
    // add an event listener for when a div gets clicked.

    for (let i = 0; i < muscleObjectArr.length; i++) {
        const muscleObject = muscleObjectArr[i];
        
        // insert the row into the muscle table.
        muscleTable.appendChild(createRow(muscleObject))
    }
}

function getTargetsSpecDiv(targetElement) {
    // finds the event targets closest spec div if it has any.
    // you either click the div directly or its child.
    if (targetElement.className != "spec-div") {
        return targetElement.closest(".spec-div")
    } else {
        return targetElement
    }
}

function checkSpecAnswer(inputElement, answersArr) {
    // checks the input value
    // compares to the correct answers
    // checks for whats already answered.
    // returns the answer if the answer is valid.
    for (let i = 0; i < answersArr.length; i++) {
        const answer = answersArr[i];
        if (inputElement.value.toUpperCase() == answer.toUpperCase() && !checkIfListed(inputElement, answer)) {
            // if answers are correct.
            // and the answer is not already listed i the div.
            return answer;
        }
    }

    function checkIfListed(target, answerToCheck) {
        // find all the paragraphs in the specInput (targets) parent div and check if it already has the answer writen.
        const pArr = target.closest(".spec-div").querySelectorAll(".spec-div > p")
    
        for (let i = 0; i < pArr.length; i++) {
            const paragraph = pArr[i].innerText;
            if (paragraph.toUpperCase() == answerToCheck.toUpperCase()) {
                return true;
            }
        }
    
        // if none match then its not listed.
        return false;
    }
}

function deleteMuscleTable() {
    const muscleTable = document.querySelector(".muscle-table")
    muscleTable.remove()
}

function createEmptyTable(latinParts) {
    // create an object out of each muscle.
    // for use in local storage for the muscle table.
    const emptyTable = []

    for (const page in latinParts) {
        if (page != "skeleton") {
            for (let i = 0; i < latinParts[page].length; i++) {
                const muscle = latinParts[page][i]; // stores a string like "gluteus maximus"
                const muscleObject = {
                    name: muscle,
                    origin: [],
                    attachment: [],
                    action: {},
                }
                emptyTable.push(muscleObject)
            }
        }
    }

    return emptyTable;
}

function createRow(muscleObject) {
    // Add a row to the table for a specific muscle.

    // get the local storage object for the muscle tables correct answers.
    const tableAnswers = JSON.parse(localStorage.getItem("tableAnswers")) || createEmptyTable(latinArrObj)
    const localMuscle = tableAnswers.find((muscle) => muscle.name.toUpperCase() == muscleObject.name.toUpperCase())
    const row = document.createElement("section") // stores a name and three divs for each of the spec.
    const muscleSpecArr = ["origin", "attachment", "action",] // creates divs for origins, attachments and actions.

    row.className = "muscle-row"
    row.id = muscleObject.name

    // create a paragraph for the name of the muscle.
    insertParagraph(muscleObject.name, row)

    // loop through muscleSpecArr and create a div for each of the three muscle features.
    for (let i = 0; i < muscleSpecArr.length; i++) {
        const muscleSpec = muscleSpecArr[i];
        
        // make a div for origins, one for attachments and one for actions. Later add an onclick for each div.
        // every div stores input, scorebox and all the correct answers.
        const infoDiv = document.createElement("div")
        infoDiv.id = muscleSpec;
        infoDiv.classList.add("spec-div")

        // in the infoDiv

        // add a section that stores input and a score box.
        const inputScoreBar = document.createElement("section")
        inputScoreBar.className = "input-score-bar"
        infoDiv.appendChild(inputScoreBar)

        // create the score box.
        const divScore = document.createElement("section")
        const scoreP = document.createElement("p")
        divScore.className = "score-box"
        inputScoreBar.appendChild(divScore)

        function createPlus() {
            const plus = document.createElement("p")
            plus.classList.add("plus")
            const plusText = document.createTextNode("+")
            plus.appendChild(plusText)
            return plus;
        }

        function replacePlus(event, targetForInput) {
            // removes the clicked plus, replaces it with a specInput
            // delete the other inputs if there are any.
            const specInputArr = document.querySelectorAll(".spec-input")
            specInputArr.forEach((specInput) => {
                // get the parent of a specInput
                const parentElement = specInput.parentElement
                
                // create a plus
                const newPlus = createPlus()
                // give it an event listener
                newPlus.addEventListener("click", (e) => {
                    replacePlus(e, parentElement)
                })
                // append the plus to the inputs parent
                parentElement.appendChild(newPlus)
                // delete the input
                specInput.remove()
            })

            // create a new spec input
            const newSpecInput = createNewInput()

            function createNewInput() {
                const newSpecInput = document.createElement("input")
                newSpecInput.type = "text"
                newSpecInput.classList.add("spec-input")
                return newSpecInput;
            }

            targetForInput.appendChild(newSpecInput)
            event.target.remove()
            newSpecInput.focus()

            newSpecInput.addEventListener("keyup", (e) => {
                const answer = e.target.value
                checkSpecInputAnswer(answer)
            })

            function checkSpecInputAnswer(answer) {
                const divForAnswers = getDivForAnswers() // either an action div or in the infoDiv.

                function getDivForAnswers() {
                    const specInput = document.querySelector(".spec-input")
                    let divForAnswers = specInput.closest(".action-div")
                    if (!divForAnswers) {
                        divForAnswers = specInput.closest(".spec-div")
                    }
                    return divForAnswers
                }

                const validAnswersArr = divForAnswers.validAnswers
                const validAnswersArrToUpper = validAnswersArr.map((word) => word.toUpperCase())

                // every time a letter gets typed into input check it.
                if (validAnswersArrToUpper.includes(answer.toUpperCase())) {
                    // if answers match then we insert them in the right place.
                    appendToActionDivOrArr(divForAnswers)
                    function appendToActionDivOrArr(targetDiv) {
                        // inside the targetDiv either an action div gets created or just a paragraph gets added.
                        if (targetDiv.id == "action") {
                            // create an action div with the correct specs. Se function createActionDiv.
                            divForAnswers.appendChild(createEmptyActionDiv(answer, targetDiv))
                            function createEmptyActionDiv(title, targetDiv) {
                                // create a div that stores the action title paragraph and its list of actions.
                                const actionDiv = document.createElement("div") // stores title div and a list of actions.
                                actionDiv.className = "action-div"
                                actionDiv.id = title
                                const titleDiv = document.createElement("div") // stores attachment paragraph and scorebox, and has an onclick input element.
                                titleDiv.className = "title-div"
                                const scoreBox = document.createElement("div") // stores a score paragraph
                                scoreBox.className = "score-box"
                                const scoreP = document.createElement("p")
                                const filterUl = document.createElement("ul")
                                filterUl.classList.add("filter-ul")
                
                                actionDiv.appendChild(titleDiv)
                                actionDiv.appendChild(filterUl)
                                titleDiv.appendChild(scoreBox)
                                scoreBox.appendChild(scoreP)
                
                                //titleDiv
                                atAttachment = `${title}:`
                                insertParagraph(atAttachment, titleDiv)
                
                                // actionDiv
                                const plus = createPlus() // clickable and becomes an input.
                                actionDiv.appendChild(plus)
                                // add an onclick to be able to input answers.
                                plus.addEventListener("click", (e) => {
                                    replacePlus(e, actionDiv)
                                })
            
                                const sumScore = setValidAnswersForActionDiv(targetDiv)
                            
                                function setValidAnswersForActionDiv(targetDiv) {
                                    // append a list of possible correct answers directly to the info div.
                                    // find the path.
                                    const muscle = targetDiv.closest(".muscle-row")
                                    const muscleObj = musclesObjectsArr.find((item) => item.name == muscle.id)
                                    console.log(muscleObj["action"][title])
                                    const validAnswers = muscleObj["action"][title]
            
                                    actionDiv.validAnswers = validAnswers

                                    return validAnswers.length
                                }
                
                                //scoreBox
                                const scoreText = document.createTextNode(`0 / ${sumScore}`)
                                scoreP.appendChild(scoreText)
                                
                                return actionDiv;
                            }
                        } else {
                            if (divForAnswers.classList.contains("action-div")) {
                                // if you are inside an actionDiv insert answer into the correct filter ul.
                                const filterUl = targetDiv.querySelector(".filter-ul")
                                filterUl.appendChild(createListItem(answer))
                            } else {
                                // the target div being an origin or attachment info div.
                                targetDiv.appendChild(createParagraph(answer))
                            }
                        }
                    }
                    // then have the div flash green.
                    flashGreen(divForAnswers)
                    function flashGreen(targetDiv) {
                        targetDiv.classList.add("pulse")
                        setTimeout(() => {targetDiv.classList.remove("pulse")}, "200")
                    }
                    // and add a point to the score of the div.
                    incrementSpecScore(divForAnswers)
                    function incrementSpecScore(targetDiv) {
                        // increment scoreBox score.
                        const targetsScoreBoxP = targetDiv.querySelector(".score-box > p")
                    
                        // regexp to filter every number before a blank space.
                        const pattern = /[0-9]+(?=\s)/;
                    
                        let score = targetsScoreBoxP.innerText.match(pattern)
                        score++
                        const newScore = targetsScoreBoxP.innerText.replace(pattern, score)
                        targetsScoreBoxP.innerText = newScore
                    }
                    incrementScore() // +1 to total score.
                    // and update the local answers.
                    updateLocalTableAnswers(divForAnswers, answer)
                    function updateLocalTableAnswers(targetDiv, answer) {
                        // add answer to the local storage table answers.
                        // get the items
                        localTableItems = JSON.parse(localStorage.getItem("tableAnswers")) || createEmptyTable(latinArrObj)
                        console.log(localTableItems)
        
                        // find the path.
                        const muscleName = targetDiv.closest(".muscle-row").id
                        const muscleObj = localTableItems.find((muscle) => 
                            muscle.name.toUpperCase() == muscleName.toUpperCase()
                        )
                        const muscleIndex = localTableItems.indexOf(muscleObj)
                        if (!targetDiv.classList.contains("spec-div")) {
                            // this is because its an actionDiv
                            const specDiv = targetDiv.closest(".spec-div")
                            const muscleSpec = specDiv.id
                        } else {
                            const muscleSpec = targetDiv.id
                        }
        
                        // update the items
                        if (muscleSpec == "origin" || muscleSpec == "attachment") {
                            localTableItems[muscleIndex][muscleSpec].push(answer.toLowerCase())
                        } else if (muscleSpec == "action") {
                            if (targetDiv.classList.contains("action-div")) { // if the answer is correct and inside an action div.
                                const actionTitle = targetDiv.id
                                localTableItems[muscleIndex][muscleSpec][actionTitle].push(answer.toLowerCase())
                            } else { // the answer is correct and inside action spec div.
                                localTableItems[muscleIndex][muscleSpec][answer.toLowerCase()] = [];
                            }
                        }
                        
        
                        // push items to local storage.
                        localStorage.setItem("tableAnswers", JSON.stringify(localTableItems))
                    }
                    // then we clear the input value.
                    event.target.value = ""

                    // lastly remove the correct answer from the valid answers.
                    divForAnswers.validAnswers.splice(divForAnswers.validAnswers.indexOf(answer.toLowerCase()), 1)

                    // remove the spec input
                    // if we remove the last valid answer.
                    if (divForAnswers.validAnswers.length <= 0) {
                        const specInput = document.querySelector(".spec-input")
                        specInput.remove()
                        const filterListDiv = document.querySelector(".filter-list-div")
                        filterListDiv.remove()
                    }
                }
            }

            // delete the other filter lists.
            const filterListArr = document.querySelectorAll(".filter-list")
            filterListArr.forEach((filterList) => {
                filterList.remove()
            })

            // create a new filter list.
            createNewFilterList(targetForInput, newSpecInput.value)
            function createNewFilterList(inputTargetElement) {
                // create a filter list array.
                const specType = getSpecType() // four possible types.
                function getSpecType() {
                    const actionDiv = inputTargetElement.closest(".action-div")
                    if (actionDiv) {
                        return "actionTitle"
                    } else {
                        const specDiv = inputTargetElement.closest(".spec-div")
                        return specDiv.id
                    }
                }

                const filterArr = getFilterArr(specType)
                function getFilterArr(specType) {
                    // fill the arr with strings from muscleObjectsArr
                    let filterArr = []
                    musclesObjectsArr.forEach((muscle) => {
                        if (specType == "actionTitle") {
                            Object.values(muscle["action"]).forEach((actionTitleArr) => {
                                filterArr = filterArr.concat(actionTitleArr)
                            })
                        } else {
                            if (Array.isArray(muscle[specType])) { // origin or attachment
                                filterArr = filterArr.concat(muscle[specType])
                            } else { // action
                                filterArr = filterArr.concat(Object.keys(muscle[specType]))
                            }
                        }
                    })

                    // remove duplicates from array.
                    filterArr = filterArr.filter((spec, index) => filterArr.indexOf(spec) == index)
                    return filterArr;
                }

                // create a filter div and fill it with paragraphs.
                const filterListDiv = document.createElement("div")
                filterListDiv.classList.add("filter-list-div")
                const filterDiv = document.createElement("div")
                filterDiv.classList.add("filter-list")

                filterArr.forEach((spec) => {
                    const specP = createParagraph(spec)
                    specP.tabIndex = "0"
                    specP.addEventListener("mouseover", (e) => e.target.focus())
                    specP.addEventListener("click", (e) => {
                        selectFilterP(e)
                    })
                    function selectFilterP(event) {
                        const specInput = document.querySelector(".spec-input")
                        specInput.value = event.target.innerText
                        checkSpecInputAnswer(specInput.value)
                    }
                    specP.addEventListener("keydown", (e) => {
                        enterKeyPressedOnP(e)
                    })
                    function enterKeyPressedOnP(event) {
                        if (event.keyCode == 13) {
                            selectFilterP(event)
                        }
                    }
                    filterDiv.appendChild(specP)
                })

                inputTargetElement.appendChild(filterListDiv)
                filterListDiv.appendChild(filterDiv)

                // enable filter searching.
                newSpecInput.addEventListener("keydown", (e) => {
                    filterAnswers(e.target.value)
                })
                function filterAnswers(inputValue) {
                    const filterParaArr = filterDiv.querySelectorAll("p")
                    filterParaArr.forEach((filterP) => {
                        if (filterP.innerText.toUpperCase().indexOf(inputValue.toUpperCase()) > -1) {
                            filterP.style.display = ""
                        } else {
                            filterP.style.display = "none"
                        }
                    })
                }
            }

            document.addEventListener("keydown", (e) => {
                const specInput = document.querySelector(".spec-input")
                if (e.key == "Escape" && specInput) {
                    
                    let divForNewPlus = specInput.closest(".action-div")
                    if (!divForNewPlus) {
                        divForNewPlus = specInput.closest(".input-score-bar")
                    }

                    const newPlus = createPlus()
                    divForNewPlus.appendChild(newPlus)
                    // add an onclick to be able to input answers.
                    newPlus.addEventListener("click", (event) => {
                        replacePlus(event, divForNewPlus)
                    })

                    const filterListDivArr = document.querySelectorAll(".filter-list-div")
                    filterListDivArr.forEach(filterListDiv => filterListDiv.remove())

                    specInput.remove()
                }
            })
        }

        if (Array.isArray(muscleObject[muscleSpec])) {
            // if the key has a value thats an array. Origins and attachments have arrays as values.
            // If theres any specs in the local storage for a muscles origin or attachment we display those in the div.
            for (let j = 0; j < localMuscle[muscleSpec].length; j++) {
                const localSpec = localMuscle[muscleSpec][j];
                insertParagraph(localSpec, infoDiv)
            }

            const scoreText = document.createTextNode(`${localMuscle[muscleSpec].length} / ${muscleObject[muscleSpec].length}`)
            scoreP.appendChild(scoreText)

            if (localMuscle[muscleSpec].length < muscleObject[muscleSpec].length) {
                const plus = createPlus() // clickable and becomes an input.
                inputScoreBar.appendChild(plus)
                // add the plus event listener.
                plus.addEventListener("click", (e) => {
                    replacePlus(e, inputScoreBar)
                })

                setValidAnswers()

                function setValidAnswers() {
                    // append a list of possible correct answers directly to the info div.
                    const validAnswers = muscleObject[muscleSpec].filter((item) =>
                        !localMuscle[muscleSpec].includes(item)
                    )

                    infoDiv.validAnswers = validAnswers
                }
            }
            
        } else {
            // if the key has an object as its value. only actions have this.

            //check the local storage for any muscle action data.
            for (title in localMuscle[muscleSpec]) {
                
                infoDiv.appendChild(createActionDiv(title))
            }

            function createActionDiv(title) {
                // create a div that stores the action title paragraph and its list of actions.
                const actionDiv = document.createElement("div") // stores title div and a list of actions.
                actionDiv.className = "action-div"
                actionDiv.id = title
                const titleDiv = document.createElement("div") // stores attachment paragraph and scorebox, and has an onclick input element.
                titleDiv.className = "title-div"
                const scoreBox = document.createElement("div") // stores a score paragraph
                scoreBox.className = "score-box"
                const scoreP = document.createElement("p")

                actionDiv.appendChild(titleDiv)
                titleDiv.appendChild(scoreBox)
                scoreBox.appendChild(scoreP)

                //titleDiv
                atAttachment = `${title}:`
                insertParagraph(atAttachment, titleDiv)

                // actionDiv
                // load all the previously correct answers.
                const filterUl = document.createElement("ul")
                filterUl.classList.add("filter-ul")
                actionDiv.appendChild(filterUl)
                for (let i = 0; i < localMuscle[muscleSpec][title].length; i++) {
                    const spec = localMuscle[muscleSpec][title][i];
                    filterUl.appendChild(createListItem(spec))
                }

                if (localMuscle[muscleSpec][title].length < muscleObject[muscleSpec][title].length) {
                    const plus = createPlus() // clickable and becomes an input.
                    actionDiv.appendChild(plus)
                    // add an onclick to be able to input answers.
                    plus.addEventListener("click", (e) => {
                        replacePlus(e, actionDiv)
                    })

                    setValidAnswers()
                
                    function setValidAnswers() {
                        // append a list of possible correct answers directly to the info div.
                        const validAnswers = muscleObject[muscleSpec][title].filter((item) =>
                            !localMuscle[muscleSpec][title].includes(item)
                        )

                        actionDiv.validAnswers = validAnswers
                    }
                }

                //scoreBox
                const scoreText = document.createTextNode(`${localMuscle[muscleSpec][title].length} / ${muscleObject[muscleSpec][title].length}`)
                scoreP.appendChild(scoreText)
                //stores only the scores for an individual attachments list of actions.
                
                return actionDiv;
            }

            // action spec div
            const scoreText = document.createTextNode(`${Object.keys(localMuscle[muscleSpec]).length} / ${Object.keys(muscleObject[muscleSpec]).length}`)
            scoreP.appendChild(scoreText)

            if (Object.keys(localMuscle[muscleSpec]).length < Object.keys(muscleObject[muscleSpec]).length) {

                const plus = createPlus() // clickable and becomes an input.
                inputScoreBar.appendChild(plus)
                // add the plus event listener.
                plus.addEventListener("click", (e) => {
                    replacePlus(e, inputScoreBar)
                })

                setValidAnswers()
                
                function setValidAnswers() {
                    // append a list of possible correct answers directly to the info div.
                    const validAnswers = Object.keys(muscleObject[muscleSpec]).filter((item) =>
                        !Object.keys(localMuscle[muscleSpec]).includes(item)
                    )

                    infoDiv.validAnswers = validAnswers
                }
            }

            
        }

        divScore.appendChild(scoreP)

        row.appendChild(infoDiv)

    }
    
    return row
}

function deleteSpecInputBlocks() {
    // deletes any spec inputs and replaces them whith a "click me P"
    const specInput = document.querySelector("#spec-input")
    const specFilterDiv = document.querySelector(".spec-filter-div")

    if(specInput) {
        specInput.remove()
    }
    if (specFilterDiv) {
        specFilterDiv.remove()
    }
}

function confirmReset() {
    // add a textbox saying confirm reset?
    // if yes gets clicked then delete data and refresh the page.
    const backDrop = document.createElement("div")
    backDrop.classList.add("backdrop")
    const infoDiv = document.createElement("div")
    infoDiv.classList.add("info-div")
    backDrop.appendChild(infoDiv)
    const closeButton = document.createElement("a")
    closeButton.innerText = "X"
    closeButton.id = "delete-button"
    closeButton.classList.add("close-button")
    infoDiv.appendChild(closeButton)
    closeButton.addEventListener("click", (e) => {
        backDrop.remove()
    })
    const confirmDiv = document.createElement("div")
    confirmDiv.style.padding = "1.5rem"
    infoDiv.appendChild(confirmDiv)
    const confirmText = document.createElement("p")
    confirmText.innerText = 
    `Är du säker på att du vill återställa hemsidan?
    Detta kommer radera all ifylld data.`
    confirmDiv.appendChild(confirmText)
    const resetButton = document.createElement("button")
    resetButton.innerText = "Ja"
    resetButton.addEventListener("click", (e) => {
        resetData()
    })
    confirmDiv.appendChild(resetButton)
    document.body.appendChild(backDrop)

    function resetData() {
        //reset the web storage
        localStorage.clear();
        // refresh page.
        location.reload();
    }
}
