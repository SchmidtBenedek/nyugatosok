/**
 * @typedef {{writer: string, work: string, concept1: string, work2?: string, concept2?: string}} Literature // Definialok 1 tipust
 */


/**
 * @type {Literature[]} Az adattomb tipusa
 */
const dataArr = [ //tomb deklaralas

    { //elso sor objektuma deklaralasa
        writer: "Ady Endre", //az elso sor elso oszlop adata
        work: "Őrizem a szemed", //az elso sor masodik oszlop adata
        concept1: "Csinszka-vers", //az elso sor harmadik oszlop adata
        concept2: "hitvesi költészet", //az elso sor negyedik oszlop adata
    },

    { //masodik sor objektuma deklaralasa
        writer: "Babits Mihály", //a masodik sor elso oszlop adata
        work: "In Horatium", //a masodik sor masodik oszlop adata
        concept1: "óda" //a masodik sor harmadik oszlop adata
    },

    { //harmadik sor objektuma deklaralasa
        writer: "Kosztolányi Dezső", //a harmadik sor elso oszlop adata
        work: "A szegény kisgyermek panaszai", //a harmadik sor masodik oszlop adata
        concept1: "versciklus", //a harmadik sor harmadik oszlop adata
        concept2: "freudizmus", //a harmadik sor negyedik oszlop adata
    },

    { //negyedik sor objektuma deklaralasa
        writer: "Kosztolányi Dezső", //a negyedik sor elso oszlop adata
        work: "Édes Anna", //a negyedik sor masodik oszlop adata
        concept1: "regény", //a negyedik sor harmadik oszlop adata
    },

    { //otodik sor objektuma deklaralasa
        writer: "Móricz Zsigmond", //az otodik sor elso oszlop adata
        work: "Tragédia", //az otodik sor masodik oszlop adata
        concept1: "novella", //az otodik sor harmadik oszlop adata
        concept2: "dzsentri", //az otodik sor negyedik oszlop adata
    }
    
]

/**
 * @type {{title: string, colspanIsTrue?: boolean}[]} //A fejlecet tartalmazo adattomb
 */
const fejlec = [ //Fejlec tomb deklaralasa

    { // A fejlec elso objektuma
        title: "Szerző" //Fejlec elso adata
    },

    { // A fejlec masodik objektuma
        title: "Mű" //Fejlec masodik adata
    },

    { // A fejlec harmadik objektuma
        title: "Fogalmak", //Fejlec harmadik adata
        colspanIsTrue: true // logikai ertek ami kell, hogy tudjuk hol kap colspant a fejlec
    }
]

/**
 * @type {HTMLDivElement} js szekcio divje
 */
const jsSectionDiv = document.createElement("div"); //divet keszitek
jsSectionDiv.id = "jssection"; //idt adok a divnek
jsSectionDiv.classList.add("hide") //hide osztalyt hozzaadom, hogy ne legyen lathato
document.body.appendChild(jsSectionDiv) //bodyhoz csatolom

/**
 * @type {HTMLTableElement} a tablazat
 */
const table = document.createElement("table") //letrehozom a tablazatot
jsSectionDiv.body.appendChild(table) //hozzafuzom a bodyhoz

/**
 * @type {HTMLTableSectionElement} a tablazat fejlece
 */
const tableHead = document.createElement("thead"); //fejlecet letrehozom
table.appendChild(tableHead); //thead tablazathoz csatolasa

/**
 * @type {HTMLTableSectionElement} a tablazat törzse
 */
const tableBody = document.createElement("tbody"); //tablazat torzset letrehozomn
table.appendChild(tableBody); //tbody tablazathoz valo csatolasa

/**
 * @type {HTMLTableRowElement} fejléc sora
 */
const headRow = document.createElement("tr"); // sor letrehozas a fejlecnek
tableHead.appendChild(headRow); //fejlechez hozzaadas


headerRender(fejlec, headRow) //meghivom a fuggvenyt, hogy kirenderelje a fejlecet
renderTable(dataArr, tableBody) //meghivom a fuggvenyt, elkeszul a torzse a tablazatnak

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

    if(newRow.concept2){ //vizsgalom hogy definialva van e a concept2

        if(newRow.work2){ //aztan vizsgalom hogy esetleg van e definialva work2
            cell1.rowSpan = 2 //ha netan van akkor cell1 rowSpan erteket 2 re allitom

             /**
             * @type {HTMLTableRowElement} //A megjelenitendo tablazat sora
            */
            const row2 = document.createElement("tr") //uj sort hozok letre az tobbi adatnak
            tableBody.appendChild(row2) //hozzacsatolom a tableBodyhoz az uj sort

            createCell(newRow.work2, row2) //cellat hozok letre work2 tulajdonsaggal majd hozzaadom a sorhoz
            createCell(newRow.concept2, row2) //cellat hozok letre concept2 tulajdonsaggal majd hozzaadom a sorhoz
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
 * @type {HTMLButtonElement} gomb ami hozzafuz 1 sort az adattombhoz es consolera iratja a tablazatot
 */

const addItemButton = document.createElement("button") //Gomb letrehozasa
addItemButton.innerText = "Szimpla egy sor hozzáadása" //Gomb szovegenek allitasa
jsSectionDiv.appendChild(addItemButton) //Hozzaadom a bodyhoz a gombot

addItemButton.addEventListener("click", function(){ //Keszitek 1 esemenykezelot click esemenyre
    console.log("Clickeles megtortent, szimpla sor hozzadva") //Uzenet a consolera hogy tenyleg megtortent e a clickeles

    /**
     * @type {Literature} //Egy adat amit a tombhoz fogok fuzni
     */
    const newRow =  { //objektumot deklaralok amit kesobb a tombhoz fuzok
        writer: "TestWriter", //wirter ertekadat
        work: "TestWork", //work ertekadat
        concept1: "TestConcept1", //concept1 ertekadas
    }
    dataArr.push(newRow) //Hozzafuzom az uj elobb elkeszitett objektumot a tombhoz
    renderTable(dataArr, tableBody) //Ujrahivom a fuggvenyt mostmar a hozzafutott adat is benne lesz es kliiratom
})


/**
 * @type {HTMLButtonElement} gomb ami hozzafuz 1 duplas sort az adattombhoz es consolera iratja a tablazatot
 */

const addDoubleItemButton = document.createElement("button") //Gomb letrehozasa
addDoubleItemButton.innerText = "Duplas sor hozzáadása" //Gomb szovegenek allitasa
jsSectionDiv.appendChild(addDoubleItemButton) //Hozzaadom a bodyhoz a gombot

addDoubleItemButton.addEventListener("click", function(){ //Keszitek 1 esemenykezelot click esemenyre
    console.log("Clickeles megtortent, duplas sor hozzadva") //Uzenet a consolera hogy tenyleg megtortent e a clickeles

    /**
     * @type {Literature} //Egy adat amit a tombhoz fogok fuzni
     */
    const newRow =  { //objektumot deklaralok amit kesobb a tombhoz fuzok
        writer: "TestWriter", //wirter ertekadat
        work: "TestWork", //work ertekadat
        concept1: "TestConcept1", //concept1 ertekadas
        concept2: "TestConcept2", //concept2 ertekadas
    }
    dataArr.push(newRow) //Hozzafuzom az uj elobb elkeszitett objektumot a tombhoz
    renderTable(dataArr, tableBody) //Ujrahivom a fuggvenyt mostmar a hozzafutott adat is benne lesz es kliiratom
})

/**
 * @type {HTMLButtonElement} a gomb ami a simpla sort intezi majd
 */
const simpleHtmlButton = document.getElementById("simplebutton") //lekerem a szimpla gombot

simpleHtmlButton.addEventListener("click", function(){ //esemenykezelot keszitek a szimplaHtmlgomb click esemenyere
    console.log("Szimpla sor gombajanak kattintasa megtortent, mukodik") //console loggal ellenorzom hogy mukodik e

    /**
     * @type {Literature} a sor objektuma
     */
    const newRow = { //objektum deklaralas
        writer: "TestWriter", //writer ertekadas
        work: "TestWork", //work ertekadas
        concept1: "TestConcept1" //concept1 ertekadas
    }

    /**
     * @type {HTMLTableSectionElement} a tablazat torzse
     */
    const tableBody = document.getElementById("tablebody") //elkerem a tablazat torzset

    addRow(newRow, tableBody) //meghivom a fuggvenyt es hozzadja a ssort
})


/**
 * @type {HTMLButtonElement} a gomb ami a dupla sort intezi majd
 */
const doubleHtmlButton = document.getElementById("doublebutton") //lekerem a dupla gombot

doubleHtmlButton.addEventListener("click", function(){ //esemenykezelo a dupla gombra
    console.log("Dupla sor gombjanak kattintasa megtortent, mukodik") //console loggal ellenorzom hogy mukodik

    /**
     * @type {Literature} a sor objektuma
     */
    const newRow = { //objektum deklaralas
        writer: "TestWriter", //writer ertekadas
        work: "TestWork", //work ertekadas
        concept1: "TestConcept1", //concept1 ertekadas
        work2: "TestWork2", //work2 ertekadas
        concept2: "TestConcept2" //concept2 ertekadas
    }

    /**
     * @type {HTMLTableSectionElement} a tablazat torzse
     */
    const tableBody = document.getElementById("tablebody") //elkerem a tablazat torzset

    addRow(newRow, tableBody) //meghivom a fuggvenyt es hozzadja a tablazatot
})