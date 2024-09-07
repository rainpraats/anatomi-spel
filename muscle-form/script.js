// update mObjArr, allMuscles then same on the anatomy game.

function compare(bigArr, arr) {
    // returns everything that isnt contained in both.
    bigArr.forEach((item) => {
        arr.forEach((value) => {
            if (item == value) {
                bigArr.splice(bigArr.indexOf(item), 1)
            }
        })
    })
    return bigArr
}

const mObjArr = JSON.parse("[{\"name\":\"Adduktorer långa\",\"origin\":[\"ramus superior pubis\"],\"attachment\":[\"linea aspera \"],\"action\":{\"Höftleden\":[\"adduktion \",\"utåtrotation\",\"lätt flexion\"]}},{\"name\":\"Adduktorer korta\",\"origin\":[\"ramus inferior pubis\"],\"attachment\":[\"linea aspera\"],\"action\":{\"Höftleden\":[\"adduktion \",\"utåtrotation\"]}},{\"name\":\"Biceps Brachii\",\"origin\":[\"tuberculum supraglenoidale ner i sulcus intertubularis\"],\"attachment\":[\"tuberositas radii\"],\"action\":{\"Armbågsleden\":[\"flexion \",\"supination\"],\"Axelleden \":[\"abduktion\",\"inåtrotation \",\"flexion\",\"adduktion\"]}},{\"name\":\"Erector Spinae\",\"origin\":[\"os sacrum\",\"crista illiaca\",\"processus spinosus\",\"iliocostalis lumborum\",\"iliocostalis lumborum:\",\"6 nedre revben till 6 övre\",\"från 6 nedre revbenen till 6 övre\",\"costae 6-3\",\"l!-l5\",\"processus transversus th7-th12\",\"processus transversus th1-th6\",\"processus transversus th3-th5 och c5-c7\",\"processus spinosus th3-th5\",\"processus spinosus c4-c7 och th1-th3\",\"l1-l5\"],\"attachment\":[\"costae 5-12\",\"från 6 nedre revbenen till 6 övre\",\"processus transversus c6-c4 \",\"costae 1 eller 2 \",\"processus transversus c2-c5\",\"processus mastoideus \",\"processus transversus c1-c2\"],\"action\":{\"Ryggraden\":[\"extension\",\"lateralflexion\",\"utjämnar thorakalkyfosen\"],\"Huvud\":[\"rotation \",\"extension\"]}},{\"name\":\"Extensorer i underarmen\",\"origin\":[\"humerus laterala epikondyl\",\"proximala ulna\",\"radius dorsalt\",\"ulna \",\"membrana interossea\",\"dorsalt ulna\",\"dorsalt distala ulna\"],\"attachment\":[\"bas på metacarpalben 3 dorsalt\",\"bas på metacarpalben 2 dorsalt\",\"bas på distala falanx 2-5\",\"bas på distala falanx 2 till 5\",\"dorsalaponeurosen på falanx 5 \",\"bas av metacarpalben 5 dorsalt\"],\"action\":{\"Extension\":[\"phalanx 2 \",\"pollux\"],\"Abduktion\":[\"pollux\"],\"Handleden \":[\"radialdeviation\"]}},{\"name\":\"Flexorer i underarmen\",\"origin\":[\"mediala humerus epikondylen\",\"processus coronoideus på ulnae och proximala radius\",\"övre halvan av ulnae och membrana interossea \",\"radius anteriort och membrana interossea\"],\"attachment\":[\"distal phalanx på pollux\",\"distal phalanx 2-5 \",\"phalanx 2-5\",\"pisiforme,hamtum och basen av metacarpalben 5\",\"palmart på bas 2 av metacarpalbenet\",\"metacarpalben 2-5\",\"lateralt på radius mitt\"],\"action\":{\"Armbågsleden\":[\"lite flexion\",\"pronation\"],\"Handleden\":[\"palmarflexion och radialdeviation\",\"palmarflexion och ulnardeviation\",\"spänner palmaraponeurosen\",\"flexion av phalanx 2-5\",\"flexion av pollux\"],\"Armbågen\":[\"lite flexion och pronation\",\"pronation\",\"flexion\"]}},{\"name\":\"Iliopsoas\",\"origin\":[\"ilium \",\"th12-l1-l4\",\"processus transverses \",\"processus transversus l1-l5\"],\"attachment\":[\"trochanter minor\"],\"action\":{\"Höftleden\":[\"flexion\",\"utåtrotation\",\"inåtrotation\",\"inåtrotation\"],\"Bål\":[\"lateralflexion\"]}},{\"name\":\"Infraspinatus\",\"origin\":[\"fossa infraspinata\"],\"attachment\":[\"tuberculum majus på humerus\"],\"action\":{\"Axelleden\":[\"stabilisering \",\"utåtrotation\"]}},{\"name\":\"Levator Scapulae\",\"origin\":[\"processus transversus c1-c4\"],\"attachment\":[\"angulus superior scapulae \"],\"action\":{\"Scapulae\":[\"elevation\",\"inåtrotation\"]}},{\"name\":\"Pectoralis major\",\"origin\":[\"mediala claviculae\",\"sternum\",\"rectusskidan \"],\"attachment\":[\"laterala sidan av proximala humerus(nedan tuberculum majus)\"],\"action\":{\"Armen\":[\"adduktion \",\"inåtrotation\"],\"Thorax\":[\"hjälper till vid andning\"]}},{\"name\":\"Pectoralis minor\",\"origin\":[\"costae 3-5\"],\"attachment\":[\"processus coracoideus\"],\"action\":{\"Scapulae\":[\"depression\",\"rotation\"],\"Costae\":[\"elevation\"]}},{\"name\":\"Quadratus Lumborum\",\"origin\":[\"costae 12 \",\"processus transversus l1-l5\"],\"attachment\":[\"crista iliaca\"],\"action\":{\"Bål\":[\"lateralflexion\"]}},{\"name\":\"Rectus femoris\",\"origin\":[\"spina iliaca anterior inferior\",\"övre kant acetabulum \"],\"attachment\":[\"tuberositas tibiae via lig patella\"],\"action\":{\"Knäled\":[\"extension\"],\"Höftled\":[\"flexion\"]}},{\"name\":\"Rhomboideii\",\"origin\":[\"processus spinosus c6-c7\",\"processus spinosus th1-th4\"],\"attachment\":[\"margo medialis scapulae \"],\"action\":{\"Scapulae\":[\"retraktion\",\"inåtrotation\",\"stabilisering \"],\"thorax\":[\"pressas mot scapulae\"]}},{\"name\":\"Supraspinatus\",\"origin\":[\"fossa supraspinata\"],\"attachment\":[\"tuberculum majus humerus \"],\"action\":{\"Axelleden\":[\"abduktion\",\"utåtrotation\",\"stabilisering\"]}},{\"name\":\"Subscapularis\",\"origin\":[\"fossa subscapularis\"],\"attachment\":[\"tuberculum minus humerus\"],\"action\":{\"Axelleden\":[\"inåtrotation\"]}},{\"name\":\"Teres major\",\"origin\":[\"lateralt på scapulae vid angulus inferior \"],\"attachment\":[\"nedanför tuberculum minus \"],\"action\":{\"Axelleden\":[\"inåtrotation\",\"adduktion\"]}},{\"name\":\"Teres minor\",\"origin\":[\"margo lateralis på scapulae \"],\"attachment\":[\"tuberculum majus på humerus \"],\"action\":{\"Axelleden\":[\"utåtrotation\"]}},{\"name\":\"Tibialis anterior\",\"origin\":[\"laterala tibia och membrana interossea\"],\"attachment\":[\"basen av metatarsale 1 \",\"cuneiforme mediale\"],\"action\":{\"Fotleden \":[\"dorsalflexion\",\"supination\"]}},{\"name\":\"Mm. Vastii\",\"origin\":[],\"attachment\":[],\"action\":{}},{\"name\":\"Latissimus Dorsi\",\"origin\":[\"via thoracolumbalfascian från processus spinosus th7-th12,l1-l5,costae 9-12 och crista iliaca\"],\"attachment\":[\"caudalt om tuberculum minus anteriort\"],\"action\":{\"Adduktion av armen i adderat läge\":[],\"Thorax\":[\"forcerad utandning vid hosta\"],\"Axelleden\":[\"adduktion vid adducerat läge\",\"inåtrotation\",\"extension\"]}},{\"name\":\"Trapezius\",\"origin\":[\"occipitalis \",\"lig nuchae\",\"processus spinosus c7-th3\",\"processus th3-th12\"],\"attachment\":[\"lateralt clavicula\",\"acromion\",\"spina scapulae\"],\"action\":{\"Scapula\":[\"stabilisering\",\"retraktion\",\"elevation\",\"utåtrotation\",\"inåtrotation\",\"depression\"]}},{\"name\":\"Gluteus Maximus\",\"origin\":[\"spina iliaca posterior superior\",\"lateralt på scarum\",\"lateralt på sacrum\",\"coccygis\"],\"attachment\":[\"tractus iliotibialis \",\"distalt på femur\",\"proximalt posteriort femur\"],\"action\":{\"Höftleden\":[\"extension\",\"utåtrotation\",\"adduktion\",\"abduktion\"]}},{\"name\":\"Gluteus Medius\",\"origin\":[\"posteriort på illium mellan linea glutea anterior och linea glutea inferior\",\"posteriort på illium\",\"posteriort på ilium\",\"posteriort på ilium mellan linea glutea anterior och linea glutea inferior\"],\"attachment\":[\"trochanter major\"],\"action\":{\"Höftleden\":[\"abduktion\",\"flextion\",\"inåtrotation\",\"extension\"]}},{\"name\":\"Hamstrings\",\"origin\":[\"tuber ischiadicum\",\"linea aspera\"],\"attachment\":[\"pes anserius \",\"mediala tibiacondylen\",\"caput fibulae\"],\"action\":{\"Höftleden\":[\"extension\",\"inåtrotation\"],\"Knäleden\":[\"flexion\"],\"Underbenet\":[\"inåtrotation\",\"utåtrotation\"]}},{\"name\":\"Quadriceps Femoris\",\"origin\":[\"proximalt, medialt femur\",\"proximalt femurs mitt/lateralt\",\"proximalt,lateralt femur\"],\"attachment\":[\"proximalt femurs mitt/lateralt\",\"tuberositas tibae via lig patella\"],\"action\":{\"Knäleden\":[\"extension\"]}},{\"name\":\"Tensor Fasciae Latae\",\"origin\":[\"spina iliaca anterior superior \",\"anteriort om trochanter major över i tractus iliotibialis\"],\"attachment\":[\"laterala tibiakondylen\"],\"action\":{\"Höftleden\":[\"flexion\",\"abduktion\",\"viss inåtrotation\"],\"Knäleden\":[\"extension\"]}},{\"name\":\"Triceps Surae\",\"origin\":[\"mediala femurcondylen\",\"laterala femurcondylen\",\"caput fibulae \",\"proximalt på tibiae\"],\"attachment\":[\"achillessenan på tuber calcanei\"],\"action\":{\"Fotleden\":[\"plantarflexion \",\"supination\"],\"Knäleden\":[\"flexion\"]}},{\"name\":\"Sartorius\",\"origin\":[\"spina iliaca anterior superior\"],\"attachment\":[\"pes anserinus \"],\"action\":{\"Höftleden\":[\"flexion\",\"abduktion\",\"utåtrotation\"],\"Knäleden\":[\"flexion\"],\"Underbenet\":[\"inåtrotation\"]}},{\"name\":\"Triceps Brachii\",\"origin\":[\"tuberculum infraglenoidale scapulae\",\"medialt humerus dorsala yta \",\"lateralt humerus dorsala yta\"],\"attachment\":[\"olecranon \"],\"action\":{\"Armbågen\":[\"extension\"],\"Axelleden\":[\"adduktion\"]}},{\"name\":\"Deltoideus\",\"origin\":[\"laterala claculae\",\"acromion \",\"spina scapulae\"],\"attachment\":[\"tuberositas deltoidea humerus\"],\"action\":{\"Axelleden\":[\"abduktion\"]}}]")
// test naming specs after classes and ids to see the effect on dom with css.
// remove doubles of muscles from the muscleArrObj.

const textInputs = document.querySelectorAll(".muscle-input")
const saveButton = document.querySelector("#save")
const allMuscles = ['Adduktorer långa', 'Adduktorer korta', 'Biceps Brachii', 'Erector Spinae', 'Extensorer i underarmen', 'Flexorer i underarmen', 'Iliopsoas', 'Infraspinatus', 'Levator Scapulae', 'Pectoralis major', 'Pectoralis minor', 'Quadratus Lumborum', 'Rectus femoris', 'Supraspinatus', 'Subscapularis', 'Teres major', 'Teres minor', 'Tibialis anterior', 'Mm. Vastii', 'Latissimus Dorsi', 'Rhomboideii', 'Trapezius', 'Gluteus Maximus', 'Gluteus Medius', 'Hamstrings', 'Quadriceps Femoris', 'Tensor Fasciae Latae', 'Triceps Surae', 'Sartorius', 'Triceps Brachii', 'Deltoideus']

function remover(objArr, uniqueArr) {
    const uniqObjArr = []
    uniqueArr.forEach((item) => {
        for (let i = 0; i < objArr.length; i++) {
            const obj = objArr[i];
            if (obj.name == item) {
                uniqObjArr.push(obj)
                break;
            }
        }
    })
    return uniqObjArr;
}

function sp(num) {
    mObjArr.splice(num, 1)
}

const newArr = remover(mObjArr, allMuscles)
const localMuscleObjArr = JSON.parse(localStorage.getItem("muscleObjArr")) || newArr //newMuscleObjArr()

if (!localStorage.muscleObjArr) {
    localStorage.setItem("muscleObjArr", JSON.stringify(newMuscleObjArr()))
}

populateNav() // loads the nav bar
loadCurrentMuscle() // highligths the selected muscle and loads the correct form.

const downloadLink = document.querySelector("#download")
// donwloads the local muscleObjArr as a JSON string file to the computer.
downloadLink.addEventListener("click", (e) => {
    downloadJson(e) 
})

const resetButton = document.querySelector("#reset-button")
resetButton.addEventListener("click", (e) => {
    confirmReset()
})

const infoButton = document.querySelector("#info")
infoButton.addEventListener("click", (e) => {
    displayInfo()
})

function MuscleObj(name, origin = [], attachment = [], action = new Object) {
    this.name = name;
    this.origin = origin;
    this.attachment = attachment;
    this.action = action;
}

function newMuscleObjArr() {
    let muscleObjArr = []
    allMuscles.forEach((muscleName) => {
        muscleObjArr.push(new MuscleObj(muscleName))
    })
    return muscleObjArr;
}

function makeMuscleDiv(muscleObj) {
    // create a div
    // if all four keys have values make it gray
    // if one or more values are missing make it red.
    // But if all values are missing make it white.
    const muscleDiv = document.createElement("div")
    muscleDiv.class = "muscle-div"
    muscleDiv.id = muscleObj.name
    muscleDiv.innerText = muscleObj.name
    muscleDiv.style.backgroundColor = rightDivColor(muscleObj)

    return muscleDiv;
}

function rightDivColor(muscleObj) {
    // returns a color depending on how many keys have values.
    let comparisonArr = Object.values(muscleObj)

    if (comparisonArr[1].length < 1 || comparisonArr[2].length < 1 || Object.values(comparisonArr[3]) < 1) {
        // one value empty.
        if (comparisonArr[1].length < 1 && comparisonArr[2].length < 1 && Object.values(comparisonArr[3]) < 1) {
            // all values empty.
            return ""
        } else {
            return "red"
        }
    } else {
        // all keys have values.
        return "lightgray"
    }
}

function loadCurrentMuscle() {
    const muscleObj = getMuscleObj() // retrives the correct muscleObj.

    //load the form based on the muscle object.
    loadForm(muscleObj)

    // turn its div blue.
    const allMuscleDivs = document.querySelectorAll("#all-muscles > div")
    for (let i = 0; i < allMuscleDivs.length; i++) {
        const muscleDiv = allMuscleDivs[i];
        if (muscleDiv.innerText == muscleObj.name) {
            muscleDiv.style.backgroundColor = "deepskyblue"
            break;
        }
    }
}

function getMuscleObj() {
    // fetch the correct muscleObj based on whatever is in localstorage.
    // select the latest muscle you worked on.
    const currentMuscle = localStorage.getItem("currentMuscle") || allMuscles[0] // a string.

    // find the right muscle object.
    return localMuscleObjArr.find((muscleObj) => muscleObj.name == currentMuscle)
}

function loadForm(muscleObj) {
    const name = document.querySelector("#name")
    const origin = document.querySelector("#origin")
    const attachment = document.querySelector("#attachment")
    const action = document.querySelector("#action")

    // display the muscle name in the form.
    name.innerText = muscleObj.name

    const formElementArr = [origin, attachment, action]

    formElementArr.forEach((specType) => {
         // delete each of the old values that exist in the form.
        const childArr = Array.from(specType.children)
        childArr.forEach((child) => {
            if (child.nodeName == "DIV") {
                child.remove()
            }
        })
    })

    // load each of the values that exsist in muscleObj to the form.
    muscleObj.origin.forEach((individualOrgin) => {
        origin.appendChild(createDeletableDiv(individualOrgin))
    })

    muscleObj.attachment.forEach((individualAttachment) => {
    attachment.appendChild(createDeletableDiv(individualAttachment))
    })

    for (const key in muscleObj.action) {
        if (Object.hasOwnProperty.call(muscleObj.action, key)) {
            const actionDiv = createDeletableDiv(key, true)
            action.appendChild(actionDiv)
            const actionArr = muscleObj.action[key];
            actionArr.forEach((actionArrItem) => {
                actionDiv.appendChild(createDeletableDiv(actionArrItem, false, true))
            })
        }
    }

    function createDeletableDiv(text, action = false, actionSpecItem = false) {
        // returns a div that has a paragraph with a spec value and a clickable delete button.
        // if action is equal to true also create an input.
        const div = document.createElement("div")
        if (action == true) {
            div.classList.add("action-spec")
            const label = document.createElement("label")
            label.innerText = `${text}: `
            const input = document.createElement("input")
            input.type = "text"
            input.classList.add("action-spec-input")
            label.appendChild(input)

            input.addEventListener("keydown", (e) => {
                if (e.key == "Enter") {
                    e.preventDefault();
    
                    if (e.target.value != "") {
                        addSpec(e)
                    }
                }
            })

            div.appendChild(label)
        } else {
            const paragraph = document.createElement("p")
            paragraph.innerText = text
            div.appendChild(paragraph)
            if (actionSpecItem == true) {
                div.classList.add(".action-spec-item")
            }
        }

        div.id = text
        const deleteButton = document.createElement("a")
        deleteButton.innerText = "X"
        deleteButton.id = "delete-button"
        div.appendChild(deleteButton)

        deleteButton.addEventListener("click", (e) => {
            // delete the spec from the muscle object.
            // then delete the spec from the dom.
            
            const spec = e.target.closest(".spec-div").id // either orgin, attachment or action.

            if (spec == "action") {
                // get the name of the actionSpec through its id.
                const actionSpec = e.target.closest(".action-spec")
                // check if an action spec item was clicked.
                if (e.target.parentElement.classList.contains(".action-spec-item")) {
                    // delete from obj
                    const index = muscleObj.action[actionSpec.id].indexOf(actionSpecItem.id)
                    muscleObj.action[actionSpec.id].splice(index, 1)
                } else {
                    // delete from obj
                    delete muscleObj.action[actionSpec.id]
                }
            } else {
                // find its index.
                const index = muscleObj[spec].indexOf(deleteButton.closest("div").id)

                // remove it based on its index usin splice.
                muscleObj[spec].splice(index, 1)
            }
            // delete from form.
            e.target.parentElement.remove()
            // update the muscle object array.
            updateMuscleObjArr()
        })
        return div;
    }

    function addSpec(e) {
        // e is an input
        // add a spec to the form and obj when enter is pressed.
        // if an input element has been highlighted and has text.
        // we base specs on the ids of the elements.

        // first we get the currect muscleObj
        const muscleObj = getMuscleObj() // retrives the correct muscleObj.

        let targetId = e.target.id
        let actionSpecInput = Array.from(e.target.classList).includes("action-spec-input")
        if (targetId == "origin-input" || targetId == "attachment-input") {
            let specType = ""
            // specType is required to get the right directory when updating the muscle object.
            if(targetId == "origin-input") {
                specType = "origin"
            } else if (targetId == "attachment-input") {
                specType = "attachment"
            }
            // uppdate the object arr and local storage.
            muscleObj[specType].push(e.target.value.toLowerCase());
            // updates the object and pushes to local storage.
            // does this function recive the muscleObj somehow?

            // inside the form, display the strings as paragraphs.
            const targetsParentDiv = e.target.closest("div")
            targetsParentDiv.appendChild(createDeletableDiv(e.target.value))
        } else if (targetId == "action-input") { // the target id might also be a actionSpec right?
            // create a new key value pair inside the obj.
            muscleObj.action[e.target.value] = []
            
            // inside the form create a div with an input.
            const targetsParentDiv = e.target.closest("div") // this line im not sure?
            targetsParentDiv.appendChild(createDeletableDiv(e.target.value, true))
        } else if (actionSpecInput == true) {
            // find the parent action input.
            // update obj
            // get the action from id.
            const actionDivClass = e.target.closest("div.action-spec")
            const actionName = actionDivClass.id
            muscleObj.action[actionName].push(e.target.value.toLowerCase())
            // update form
            const targetsParentDiv = e.target.closest("div")
            targetsParentDiv.appendChild(createDeletableDiv(e.target.value, false, true))
        }

        updateMuscleObjArr()
        e.target.value = ""
    }

    // input muscle specs into dom and into the object.
    for (let i = 0; i < textInputs.length; i++) {
        const textInput = textInputs[i];
        textInput.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                e.preventDefault();

                if (e.target.value != "") {
                    addSpec(e)
                }
            }
        })
    }

    function updateMuscleObjArr() {
        // find index of muscle object
        const index = localMuscleObjArr.findIndex((obj) => obj.name == muscleObj.name)

        // replace muscle object.
        localMuscleObjArr[index] = muscleObj

        // push muscleObjArr to local storage.
        localStorage.setItem("muscleObjArr", JSON.stringify(localMuscleObjArr))
    }
}

function populateNav() { // load all the muscles to the page.
    // find where to create all the muscle nav divs
    const muscleNav = document.querySelector("#all-muscles")
    localMuscleObjArr.forEach((muscleObj) => {
        let muscleDiv = makeMuscleDiv(muscleObj) // has the name of current muscle object.
        muscleNav.appendChild(muscleDiv)
        
        muscleDiv.addEventListener("click", (e) => {
            // change all the other divs to original color.
            const allMuscleDivs = document.querySelectorAll("#all-muscles>div")
            allMuscleDivs.forEach((muscleDiv) => {
                // change each div to the right color.
                // find the right object belonging to the div.
                const muscleName = muscleDiv.innerText
                const rightObj = localMuscleObjArr.find((obj) => obj.name == muscleName)
                muscleDiv.style.backgroundColor = rightDivColor(rightObj)
            })

            // clicked div becomes blue.
            muscleDiv.style.backgroundColor = "deepskyblue"

            // load the form based on the right muscle object.
            loadForm(muscleObj)

            // save the clicked muscle in local storage.
            localStorage.setItem("currentMuscle", muscleObj.name)
        })
    })
}

function downloadJson(event) {
    // saves the muscle data as a text file.
    const jsonData = JSON.stringify(localStorage.getItem("muscleObjArr"))
    const saveFile = new Blob([jsonData], {type: "text/plain"})
    event.target.href = URL.createObjectURL(saveFile);
}

function confirmReset() {
    // add a textbox saying confirm reset?
    // if people klick yes then delete data and refresh the page.
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

function displayInfo() {
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
    const infoText1 = document.createElement("p")
    infoText1.innerText = 
    `Klicka på valfri muskel i menyn till höger för att navigera.
    Tryck sedan på "Enter" för att lägga till.`
    const infoText2 = document.createElement("p")
    infoText2.innerText = "Det röda krysset raderar raden."
    const infoText3 = document.createElement("p")
    infoText3.innerText = 
    `I formuläret skriver du in muskelns fäste, ursprung och funktioner.
    De olika färgerna på musklerna indikerar på om något fattas att fylla i.
    En röd bakgrund indikerar att ett eller flera fält inte är ifyllt.
    En vit bakgrund indikerar att inga fält är ifyllda.
    Medans en grå bakgrund visar att alla fält är ifyllda.`
    const infoText4 = document.createElement("p")
    infoText4.innerText = 
    `När alla fält är ifyllda trycker du på "Download Muscle Data".
    Spara sedan filen och skicka till Rain.`
    infoDiv.appendChild(infoText1)
    infoDiv.appendChild(infoText2)
    infoDiv.appendChild(infoText3)
    infoDiv.appendChild(infoText4)
    document.body.appendChild(backDrop)
}