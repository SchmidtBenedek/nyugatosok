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
 * @type {HTMLFormElement} a form a javascript tablazatnak
 */
const jsForm = document.createElement("form")//letrehozom a formot
jsForm.id = "jsform" //jsform id-t beallitom
jsSectionDiv.appendChild(jsForm) //a jssectiondivhez hozzaadom a formot
 
createForm("Szerző", "elso", "szerzo", jsForm) //meghivom a fuggvenyt, elkeszul a label, inputot tartalmazo div
createForm("Mű"," masodik", "mu", jsForm) //meghivom a fuggvenyt, elkeszul a label, inputot tartalmazo div
createForm("Fogalom1"," harmadik", "fogalom1", jsForm) //meghivom a fuggvenyt, elkeszul a label, inputot tartalmazo div
createForm("Fogalom2", "negyedik", "fogalom2",  jsForm) //meghivom a fuggvenyt, elkeszul a label, inputot tartalmazo div

/**
 * @type {HTMLButtonElement} gomb az urlap elkuldesehez
 */
const formGomb = document.createElement("button") //gombot hozok letre
formGomb.innerText = "Hozzáadás" //Szoveget allitok a gombnak
jsForm.appendChild(formGomb) //formhoz hozzaadom




