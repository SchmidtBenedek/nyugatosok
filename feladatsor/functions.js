/**
 * @typedef {{writer: string, work: string, concept1: string, work2?: string, concept2?: string}} Literature // Definialok 1 tipust
 */

/**
 * A tablazat fejlecet kirendereli
 * @param {{title: string, colspanIsTrue?: boolean}[]} fejlecArr a tomb amiben vannak a fejlec elemei 
 * @param {HTMLTableRowElement} parent amihez hozzafuzom a cellakat
 * @returns {void}
 */


function headerRender(fejlecArr, parent){ //letrehozok 1 fuggvenyt a fejlec kiiratasara
    for(const x of fejlecArr){ //vegigiteralok a fejlecen elemein
        /**
        * @type {HTMLTableCellElement} fejlec aktualis cellaja
        */
       const headCell = document.createElement('th') //fejlec aktualis cellajanak letreehozasa
       parent.appendChild(headCell) //hozzacsatolom a fejlechez a cellat
       headCell.innerText = x.title //tartalma meg a tombb aktualis eleme lesz

        if(x.colspanIsTrue){ //Vizsgalom, hogy az aktualis objektumnak a colspanIsTrue erteke milyen, es ha igaz
            headCell.colSpan = 2 //Beallitom a colSpan erteket 2 re
        }
    }
}


/**
 * Kirenderel egy tablazat torzset
 * @param {Literature[]} arr a tablazat torzset tartalmazo adatok gyujtemenye
 * @param {HTMLTableSectionElement} tbody a tablazat torzse
 * @returns {void}
 */
function renderTable(arr, tbody){ //Definialok 1 fuggvenyt aminek a bemeneti parametere egy tomb lesz, jelen esetben a dataArr tomb lesz

    tbody.innerHTML = ""; //tbody tartalmat kiuritem

    for(const obj of arr){ //Egy for of ciklussal vegigiteralok a tombon
        
        /**
         * @type {HTMLTableRowElement} //A megjelenitendo tablazat sora
         */
        const row = document.createElement("tr") //letrehozok 1 sort a tablazatnak
        tbody.appendChild(row) //hozzacsatolom a sort a tablazat torzsehez

        createCell(obj.writer, row) //cellat hozok letre writer tulajdonsaggal majd hozzaadom a sorhoz

        createCell(obj.work, row) //cellat hozok letre work tulajdonsaggal majd hozzaadom a sorhoz

        /**
         * @type {HTMLTableCellElement} //tablazat aktualis soranak harmadik cellaja
         */
        const cell3 = createCell(obj.concept1, row) //cellat hozok letre concept1 tulajdonsaggal majd hozzaadom a sorhoz

        if(obj.concept2){ //megvizsgalom, hogy van e ilyen
            /**
             * @type {HTMLTableCellElement} ////tablazat aktualis soranak negyedik cellaja
             */
            createCell(obj.concept2, row) //cellat hozok letre concept2 tulajdonsaggal majd hozzaadom a sorhoz
        }
        else{ //maskulonben
            cell3.colSpan = 2 //a colspant 2 re allitom 
        }
    
    }
}

/**
 * Uj cellat hozzafuz egy sorhoz es returnol 1 cellat
 * 
 * @param {string} cellContent a cella tartalma
 * @param {HTMLTableRowElement} parent sor amihez hozzafuzesre kerul
 * @returns {HTMLTableCellElement}
 */
function createCell(cellContent, parent){ //fugvenyt keszitek uj cella letrehozashoz
    /**
     * @type {HTMLTableCellElement} a cella
     */
    const cell = document.createElement("td") //letrehozok 1 cellat
    parent.appendChild(cell) //sorzozc hozzafuzom
    cell.innerText = cellContent //tartalom allitasa

    return cell //visszaterek a kesz cellaval
}

/**
 * Egy uj sort ad hozza a tablazathoz
 * 
 * @param {Literature} newRow amit hozzafuzunk a tablazathoz
 * @param {HTMLTableSectionElement} tableBody a tablazat tozs ahova hozzafuzom az uj sort 
 * @returns {void}
 */
function addRow(newRow, tableBody){ //fugvenyt definialok 2 parameterreé
    /**
     * @type {HTMLTableRowElement} a tablazat uj sora
     */
    const row = document.createElement("tr") //sor letrehozasa
    tableBody.appendChild(row) //hozzafuzom a tableBodyhoz

    /**
     * @type {HTMLTableCellElement} a tesztsor elso cellaja
     */
    const cell1 = createCell(newRow.writer, row) //cellat hozok letre writer tulajdonsaggal majd hozzaadom a sorhoz
    createCell(newRow.work, row) //cellat hozok letre work tulajdonsaggal majd hozzaadom a sorhoz

    /**
     * @type {HTMLTableCellElement} a tablazat tesztsoranak harmadik cellaja
     */
    const cell3 = createCell(newRow.concept1, row) //cellat hozok letre concept1 tulajdonsaggal majd hozzaadom a sorhoz, illetve valtozoban eltarolom

    if(newRow.work2 || newRow.concept2){ //vizsgalom hogy definialva van e a concept2

        if(newRow.work2){ //aztan vizsgalom hogy esetleg van e definialva work2
            cell1.rowSpan = 2 //ha netan van akkor cell1 rowSpan erteket 2 re allitom

             /**
             * @type {HTMLTableRowElement} //A megjelenitendo tablazat sora
            */
            const row2 = document.createElement("tr") //uj sort hozok letre az tobbi adatnak
            tableBody.appendChild(row2) //hozzacsatolom a tableBodyhoz az uj sort

            createCell(newRow.work2, row2) //cellat hozok letre work2 tulajdonsaggal majd hozzaadom a sorhoz
            createCell(newRow.concept2, row2) //cellat hozok letre concept2 tulajdonsaggal majd hozzaadom a sorhoz
            //kellene meg ide 1 colspan a fejlecnek
        }

        else{ //maskulonben
            /**
             * @type {HTMLTableCellElement} //a tablazat tesztsoranak negyedik cellaja
             */
        createCell(newRow.concept2, row) //cellat hozok letre concept2 tulajdonsaggal majd hozzaadom a sorhoz
        }
    }
    else{ //egyebkent
        cell3.colSpan = 2 //cell3 colSpan erteket 2 re allitomn
    }

}

/**
 * Inputtol fuggoen jeleniti meg es rejti el a tablazatokat
 * 
 * @param {HTMLInputElement} input  checkbox amit vizsgalni kell
 * @returns {void}
 */
function updateCheckBox(input){ //fugvenyt definialok a checkbox kezelesere
    /**
     * @type {HTMLDivElement} jssectiont tartalmazza
     */
    const jsSection = document.getElementById("jssection")//lekerem a jssectiont

    /**
     * @type {HTMLDivElement} htmlsectiont tartalmazza
     */
    const htmlSection = document.getElementById("htmlsection") //lekerem a htmlsecitont

    if(input.checked){ //vizsgalom, hogy be van e pipalva a checkbox
        jsSection.classList.remove("hide"); // ha igaz, akkor eltavolitom a hide css osztalyt a jssectionhoz
        htmlSection.classList.add("hide"); // aztan gozzadom a hide css osztalyt a htmlsectionhoz
    }
    else{ //maskulonben
        jsSection.classList.add("hide") //jssectionre rakom a hideot
        htmlSection.classList.remove("hide") //es htmlsectionrol leveszem es latszik
    }
}

/**
 * Labelt es input mezot keszit, majd egy divbe teszi oket, a divet pedig a formhoz csatolja
 * 
 * @param {string} labelText label szovege van benne
 * @param {string} id az input idje 
 * @param {string} name input neve
 * @param {HTMLFormElement} form az urlap
 * @returns {void} 
 */
function createForm(labelText, id, name, form){ //fuggvenyt definialok 4 parameterrel
    
    /**
     * @type {HTMLDivElement} a div amibe tarolva lesz az input es a label
     */
    const formDiv = document.createElement("div") //letrehozok egy divet
    form.appendChild(formDiv) //hgozzacsatolok a formhoz a divet

    /**
     * @type {HTMLLabelElement} a label az input melle
     */
    const label = document.createElement("label") //letrehozok egy labelt
    label.htmlFor = id //beallitom hogy milyen id kell hozzza
    label.innerText = labelText //beallitom a label szoveget
    formDiv.appendChild(label) //a divhez hozzacsatolom
    formDiv.appendChild(document.createElement("br")) //sortores hogy legyen szebb

     /**
     * @type {HTMLInputElement} letrehozott input
     */
    const input = document.createElement("input") //inputot keszitek
    input.id = id //idt allitok
    input.name = name //nevet allitok az inputnak
    formDiv.appendChild(input) //divhez csatolon az inputot

    /**
     * @type {HTMLDivElement} letrehozott div az errornak
     */
    const error = document.createElement("div") //letrehozok egy divet az errornak
    error.classList.add("error") //hozzaadom az error osztalyt
    formDiv.appendChild(error) //hozzacsatolom az error divet a mar letrehozott
}

/**
 * Fuggveny ami egy formot hoz letre
 * 
 * @param {HTMLDivElement} section hogy hova hozom letre a formot
 * @returns {HTMLFormElement}
 */
function generateForm(section){ //definialok 1 fuggvenyt 1 parameterrel
        /**
     * @type {HTMLFormElement} a form a javascript tablazatnak
     */
    const jsForm = document.createElement("form")//letrehozom a formot
    jsForm.id = "jsform" //jsform id-t beallitom
    section.appendChild(jsForm) //a jssectiondivhez hozzaadom a formot

    /**
     * @type {{label: string, id: string, name: string}[]} a formfieldek felepiteset tartalmazo tomb
     */
    const formFields = [ //definialok egy tombot
        { // elso objektum
            label: 'Szerző', //label szovege
            id: 'elso', //input id
            name: 'szerzo' //input name
        },
        { // masodik objektum
            label: 'Mű', //label szovege
            id: 'masodik', // input id
            name: 'mu' //input name
        },
        { // harmadik objektum
            label: 'Fogalom1', //label szovege
            id: 'harmadik', //input id
            name: 'fogalom1' //input name
        },
        { // negyedik objektum
            label: 'Fogalom2', //label szovege
            id: 'negyedik', //input id
            name: 'fogalom2' // nput name
        }
    ]

    for(const field of formFields){ //vegigmegyek a tombon
        createForm(field.label, field.id, field.name, jsForm) //meghivom a fuggvenyt es elkesziti az aktualis divet a benne levo labellel es inputtal
    }

    /**
     * @type {HTMLButtonElement} gomb az urlap elkuldesehez
     */
    const formGomb = document.createElement("button") //gombot hozok letre
    formGomb.innerText = "Hozzáadás" //Szoveget allitok a gombnak
    jsForm.appendChild(formGomb) //formhoz hozzaadom

    return jsForm //visszaterek az elkeszult jsFormmal
}

/**
 * Checkeli, hogy nem ures e az input, ha ures hibauzenetet allit es hamissa teszi a validot
 * 
 * @param {HTMLInputElement} input amit validalni kell 
 * @param {string} error uzi ha nem jo a valid
 * @returns {boolean}
 */
function validateField(input, error){ //fuggvenyt keszitek 2 parameterrel

    /**
     * @type {boolean} az aktualis valid erteke
     */
    let valid = true //igazra allitom a valid erteket

    if(input.value == ""){ //vizsgalom, hogy ures e az input
        /**
         * @type {HTMLDivElement} az pelda inputnak a parentdivje
         */
        const inputParent = input.parentElement //elkerem az elemet amiben benne van az input

        /**
         * @type {HTMLDivElement} erroros div
         */
        const errorDiv = inputParent.querySelector(".error") //elso error a diven belul
        errorDiv.innerText = error //szoveget allitok
        valid = false //a valid valtozot hamissa teszem
    }
    return valid //validdal visszaterek ami boolean ertek lesz
}

