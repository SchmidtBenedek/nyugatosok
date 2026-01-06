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