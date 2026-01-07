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

document.body.appendChild(jsSectionDiv) //bodyhoz csatolom

/**
 * @type {HTMLTableElement} a tablazat
 */
const table = document.createElement("table") //letrehozom a tablazatot
jsSectionDiv.appendChild(table) //hozzafuzom a bodyhoz

/**
 * @type {HTMLTableSectionElement} a tablazat fejlece
 */
const tableHead = document.createElement("thead"); //fejlecet letrehozom
table.appendChild(tableHead); //thead tablazathoz csatolasa

/**
 * @type {HTMLTableSectionElement} a tablazat törzse
 */
const tableBody = document.createElement("tbody"); //tablazat torzset letrehozomn
tableBody.id = "jstbody" //idt adok jstbodynak
table.appendChild(tableBody); //tbody tablazathoz valo csatolasa

/**
 * @type {HTMLTableRowElement} fejléc sora
 */
const headRow = document.createElement("tr"); // sor letrehozas a fejlecnek
tableHead.appendChild(headRow); //fejlechez hozzaadas


headerRender(fejlec, headRow) //meghivom a fuggvenyt, hogy kirenderelje a fejlecet
renderTable(dataArr, tableBody) //meghivom a fuggvenyt, elkeszul a torzse a tablazatnak

/**
 * @type {HTMLInputElement} chekcbox erteket tartalmazza
 */
const checkbox = document.getElementById("tableselector") //lekererrem a checkbox erteket
updateCheckBox(checkbox) //alapbol is  meghivom a fuggvenyt, az alap checkbox ertekevel 

checkbox.addEventListener("change", function(e){ //esemenykezelot keszitek a checkbox change esemenyere
    /**
     * @type {HTMLInputElement} targetje az esemenynek
     */
    const target = e.target //valtozoba tarolom a targetjet az esemenynek

    updateCheckBox(target) //Meghivom a fuggvenyt
    
})

/**
 * @type {HTMLFormElement} a jsform
 */
const jsForm = generateForm(jsSectionDiv) //meghivom a fuggvenyt es kigeneralja a formot

jsForm.addEventListener('submit', function(e){ //keszitek egy esemenykezelot a form submit esemenyere

    e.preventDefault() //megakadalyozom az alapertelmezett mukodest az urlap submit esemenye soran

    /**
     * @type {HTMLFormElement} a submit esemeny targetje
     */
    const target = e.target //eltarolom az esemeny targetjet egy valtozoba

    /**
     * @type {HTMLInputElement} a szerzo input mezo
     */
    const inputSzerzo = target.querySelector('#elso') //elkerem az elso idju inputot a formon belul

    /**
     * @type {HTMLInputElement} a mu input mezo
     */
    const inputMu = target.querySelector('#masodik') //elkerem a masodik idju inputot a formon belul

    /**
     * @type {HTMLInputElement} az elso fogalom input mezo
     */
    const inputFogalomElso = target.querySelector('#harmadik') //elkerem a harmadik idju inputot a formon belul

    /**
     * @type {HTMLInputElement} a masodik fogalom input mezo
     */
    const inputFogalomMasodik = target.querySelector('#negyedik') //elkerem a negyedik idju inputot a formon belul



    if(validateAllField(inputSzerzo, inputMu, inputFogalomElso, target)){ //vizsgalom, hogy a valid igaz e
            /**
         * @type {string} a szerzo inputba beirt erteke
         */
        const szerzoValue = inputSzerzo.value // eltarolom a szerzo input erteket

        /**
         * @type {string} a mu inputba beirt erteke
         */
        const muValue = inputMu.value //eltarolom a mu input erteket

        /**
         * @type {string} az elso fogalom inputba beirt erteke
         */
        const fogalomElsoValue = inputFogalomElso.value //eltarolom az elso fogalom erteket

        /**
         * @type {string} a masodik fogalom inputba beirt erteke
         */
        const fogalomMasodikValue = inputFogalomMasodik.value //eltarolom a masodik fogalom erteket

        /**
         * @type {Literature} az uj objektum
         */
        const newObj = {} //letrehozok egy ures objektumot

        newObj.writer = szerzoValue //beallitom a szerzo tulajdonsagot
        newObj.work = muValue //beallitom a mu tulajdonsagot
        newObj.concept1 = fogalomElsoValue //beallitom az elso fogalom tulajdonsagot
        newObj.concept2 = fogalomMasodikValue //beallitom a masodik fogalom tulajdonsagot

        dataArr.push(newObj) //hozzaadom az uj objektumot

        /**
         * @type {HTMLTableSectionElement} a js tablazat bodyja
         */
        const jsTbody = document.getElementById("jstbody") //elkerem a jstbodyt es valtozoban tarolom
        renderTable(dataArr, jsTbody) //ujrahivom a renderelo fuggvenyt mar a friss tablazattal
        target.reset() //visszaallitom a formot alapertelmezett allapotba
    }
    
})

/**
 * @type {HTMLFormElement} a html form
 */
const htmlForm = document.getElementById("htmlform") //elkerem a htmlformot

htmlForm.addEventListener("submit", function(e){ //keszitek egy esemenykezelot a form submit esemenyere

    e.preventDefault() //megakadalyozom az alapertelmezett mukodest az urlap submit esemenye soran

    /**
     * @type {HTMLFormElement} a submit esemeny targetje
     */
    const target = e.target //eltarolom az esemeny targetjet egy valtozoba

    /**
     * @type {HTMLInputElement} a szerzo input mezo
     */
    const inputSzerzo = target.querySelector('#elso') //elkerem az elso idju inputot a formon belul

    /**
     * @type {HTMLInputElement} a mu input mezo
     */
    const inputMuElso = target.querySelector('#masodik') //elkerem a masodik idju inputot a formon belul

    /**
     * @type {HTMLInputElement} a mu input mezo
     */
    const inputMuMasodik = target.querySelector('#negyedik') //elkerem a harmadik idju inputot a formon belul

    /**
     * @type {HTMLInputElement} az elso fogalom input mezo
     */
    const inputFogalomElso = target.querySelector('#harmadik') //elkerem a negyedik idju inputot a formon belul

    /**
     * @type {HTMLInputElement} a masodik fogalom input mezo
     */
    const inputFogalomMasodik = target.querySelector('#otodik') //elkerem a otodik idju inputot a formon belul

    
    if(validateAllField(inputSzerzo, inputMuElso, inputFogalomElso, target)){ //megnezem, hogy igaz e
            /**
         * @type {string} a szerzo inputba beirt erteke
         */
        const szerzoValue = inputSzerzo.value // eltarolom a szerzo input erteket

        /**
         * @type {string} a muelso inputba beirt erteke
         */
        const muElsoValue = inputMuElso.value //eltarolom a mu input erteket

        /**
         * @type {string} a masodik inputba beirt erteke
         */
        const muMasodikValue = inputMuMasodik.value //eltarolom a mu2 input erteket

        /**
         * @type {string} az elso fogalom inputba beirt erteke
         */
        const fogalomElsoValue = inputFogalomElso.value //eltarolom az elso fogalom erteket

        /**
         * @type {string} a masodik fogalom inputba beirt erteke
         */
        const fogalomMasodikValue = inputFogalomMasodik.value //eltarolom a masodik fogalom erteket

        /**
         * @type {Literature} az uj objektum
         */
        const newObj = {} //letrehozok egy ures objektumot

        newObj.writer = szerzoValue //beallitom a szerzo tulajdonsagot
        newObj.work = muElsoValue //beallitom a mu tulajdonsagot
        newObj.work2 = muMasodikValue //beallitom a mu2 tulajdonsagot
        newObj.concept1 = fogalomElsoValue //beallitom az elso fogalom tulajdonsagot
        newObj.concept2 = fogalomMasodikValue //beallitom a masodik fogalom tulajdonsagot

        /**
         * @type {HTMLTableSectionElement} a js tablazat bodyja
         */
        const htmlTbody = document.getElementById("htmltbody") //elkerem a jstbodyt es valtozoban tarolom

        addRow(newObj, htmlTbody) //ujrahivom a renderelo fuggvenyt mar a friss tablazattal
        target.reset() //visszaallitom a formot alapertelmezett allapotba
    }
    
})

/**
 * Validalja a bemeneti elemeket, es kiszedi a hibauzeneteket, ha pedig sikertelen a valid ujat rak
 * 
 * @param {HTMLInputElement} inputSzerzo szerzo inputja
 * @param {HTMLInputElement} inputMuElso muelso inputja
 * @param {HTMLInputElement} inputFogalomElso fogalomelso inputja
 * @param {HTMLFormElement} form a form
 * @returns {boolean}
 */
function validateAllField(inputSzerzo, inputMuElso, inputFogalomElso, form){ //fuggvenyt hozok letre 4 parameterrel
    
    /**
     * @type {boolean} kapcsolo ami addig igaz ha mind a 3 kotelezo input ki van toltve
     */
    let valid = true //valid valtozot letrehozok

    
    /**
     * @type {NodeList} az error osztalyokkal rendelkezo elemek listajha
     */
    const errorDivList = form.querySelectorAll(".error") //minden elemet elkerek ami ilyen css osztallyal rendelkezik
    for(const errorDiv of errorDivList){ //vegigmenyek az osszes elemen
        errorDiv.innerText = "" //torlom az aktualis elem szoveget
    }

    if(!validateField(inputSzerzo, "Szerző kitöltése kötelező")){ //negalom a fuggveny visszateresi erteket, ami ha igaz akkor hamissa teszem es nemtortenik semmi de ha hamis akkor igazza teszem es validot hamisra ateszem

        valid = false //hhamisra allitom
    }

    if(!validateField(inputMuElso, "Mű kitöltése kötelező")){ //negalom a fuggveny visszateresi erteket, ami ha igaz akkor hamissa teszem es nemtortenik semmi de ha hamis akkor igazza teszem es validot hamisra ateszem

        valid = false //hamisra allitom
    }

    if(!validateField(inputFogalomElso, "Fogalom1 kitöltése kötelező")){ ////negalom a fuggveny visszateresi erteket, ami ha igaz akkor hamissa teszem es nemtortenik semmi de ha hamis akkor igazza teszem es validot hamisra ateszem

        valid = false //hamisra allitom
    }

    return valid //visszaterek a valid bool ertekevel
}