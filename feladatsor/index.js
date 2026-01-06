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
 
/**
 * @type {HTMLDivElement} szerzonek majd a labele meg inputja lesz benne meg az error
 */
const szerzoDiv = document.createElement("div") //divet letrehozok
jsForm.appendChild(szerzoDiv) //jsformhoz adom
 
/**
 * @type {HTMLLabelElement} szerzo labelje
 */
const szerzoLabel = document.createElement("label") //labelt hozok letre
szerzoLabel.htmlFor = "elso" //for tulajdonsagot allitok
szerzoLabel.innerText = "Szerző" //szoveget allitok a labelnek
szerzoDiv.appendChild(szerzoLabel) //szerzodivhez csatolom a labelt
szerzoDiv.appendChild(document.createElement("br")) //sort torok

/**
 * @type {HTMLInputElement} szerzo input mezo
 */
const szerzoInput = document.createElement("input") //input mezot letrehozom
szerzoInput.id = "elso" //idt allitok
szerzoInput.name = "szerzo" //nevet beallitom
szerzoDiv.appendChild(szerzoInput) //hozzaadom a szerzodivhez

/**
 * @type {HTMLDivElement} letrehozott div a szerzo input error uzenetenek
 */
const szerzoError = document.createElement("div") // letrehozom az error divet
szerzoError.classList.add("error") // hozzaadom az error osztalyt
szerzoDiv.appendChild(szerzoError) // hozzacsatolom az error divet a szerzo divhez
szerzoDiv.appendChild(document.createElement("br")) //sort torok

/**
 * @type {HTMLDivElement} mu divje
 */
const muDiv = document.createElement("div") //mudivet elkeszitem
jsForm.appendChild(muDiv) //jsformhoz hozzacsatolom

/**
 * @type {HTMLLabelElement} mu labelje
 */
const muLabel = document.createElement("label") //labelt hozok letre
muLabel.htmlFor = "masodik" //for tulajdonsagot allitok
muLabel.innerText = "Mű" //szoveget allitok
muDiv.appendChild(muLabel) //mudivhez adom
muDiv.appendChild(document.createElement("br")) //sort torok

/**
 * @type {HTMLInputElement} mu input
 */
const muInput = document.createElement("input") //input mezot hozok letre
muInput.id = "masodik" //idt allitok
muInput.name = "mu" //nevet beallitom
muDiv.appendChild(muInput) //hozzaadom a mudivgez

/**
 * @type {HTMLDivElement} letrehozott div a mu input error uzenetenek
 */
const muError = document.createElement("div") // letrehozom az error divet
muError.classList.add("error") // hozzaadom az error osztalyt
muDiv.appendChild(muError) // hozzacsatolom az error divet a mu divhez
muDiv.appendChild(document.createElement("br")) //sort torok

/**
 * @type {HTMLDivElement} fogalom1 divje
 */
const fogalomFirstDiv = document.createElement("div") //fogalom1 divet letrehozom
jsForm.appendChild(fogalomFirstDiv) //A jsurlaphoz hozzaadom

/**
 * @type {HTMLLabelElement} fogalom1 labelje
 */
const fogalomFirstLabel = document.createElement("label") //labelt letrehozok
fogalomFirstLabel.htmlFor = "harmadik" //for tulajdonsagot allitok
fogalomFirstLabel.innerText = "Fogalom1" //szoveget allitok
fogalomFirstDiv.appendChild(fogalomFirstLabel) //hozzaadom a fogalom1divhez
fogalomFirstDiv.appendChild(document.createElement("br")) //sort torok

/**
 * @type {HTMLInputElement} fogalom1 input
 */
const fogalomFirstInput = document.createElement("input") //inputot keszitek
fogalomFirstInput.id = "harmadik" //idt allitok
fogalomFirstInput.name = "fogalom1" //nevet allitok
fogalomFirstDiv.appendChild(fogalomFirstInput) //hozzadom a fogalom1divhez


/**
 * @type {HTMLDivElement} letrehozott div a fogalom1 input error uzenetenek
 */
const fogalomFirstError = document.createElement("div") // letrehozom az error divet
fogalomFirstError.classList.add("error") // hozzaadom az error osztalyt
fogalomFirstDiv.appendChild(fogalomFirstError) // hozzacsatolom az error divet a fogalom1 divhez
fogalomFirstDiv.appendChild(document.createElement("br")) //sort torok

/**
 * @type {HTMLDivElement} fogalom2 divje
 */
const fogalomSecondDiv = document.createElement("div") //fogalom2 divet letrehozom
jsForm.appendChild(fogalomSecondDiv) //A jsurlaphoz hozzaadom

/**
 * @type {HTMLLabelElement} fogalom2 labelje
 */
const fogalomSecondLabel = document.createElement("label") //labelt letrehozok
fogalomSecondLabel.htmlFor = "negyedik" //for tulajdonsagot allitok
fogalomSecondLabel.innerText = "Fogalom2" //szoveget allitok
fogalomSecondDiv.appendChild(fogalomSecondLabel) //hozzaadom a fogalom2divhez
fogalomSecondDiv.appendChild(document.createElement("br")) //sort torok

/**
 * @type {HTMLInputElement} fogalom2 input
 */
const fogalomSecondInput = document.createElement("input") //inputot keszitek
fogalomSecondInput.id = "negyedik" //idt allitok
fogalomSecondInput.name = "fogalom2" //nevet allitok
fogalomSecondDiv.appendChild(fogalomSecondInput) //hozzadom a fogalom2divhez

/**
 * @type {HTMLDivElement} letrehozott div a fogalom2 input error uzenetenek
 */
const fogalomSecondError = document.createElement("div") // letrehozom az error divet
fogalomSecondError.classList.add("error") // hozzaadom az error osztalyt
fogalomSecondDiv.appendChild(fogalomSecondError) // hozzacsatolom az error divet a fogalom2 divhez

/**
 * @type {HTMLButtonElement} gomb az urlap elkuldesehez
 */
const formGomb = document.createElement("button") //gombot hozok letre
formGomb.innerText = "Hozzáadás" //Szoveget allitok a gombnak
jsForm.appendChild(formGomb) //formhoz hozzaadom