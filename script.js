window.addEventListener("load", function () {
    let elem = elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    consoleKiiro(elem.innerHTML);
    elemekFormazasa();
    esemenyKezeles1();
    esemenyKezeles2();
    esemenyKezeles4();


});

function elemekElerese1() {
    let elem = document.querySelectorAll("section h2")[0];
    return elem
}
function elemekElerese2() {
    const ELEM = document.querySelectorAll("#ide")[0]
    ELEM.innerHTML = "<p>Jó reggelt!</p>";
}
function elemekElerese3() {
    const ELEM = document.querySelectorAll(".ide")[0]
    ELEM.innerHTML = "<p>Jó reggelt!</p>";
}
function elemekElerese4() {

    const ELEM = document.querySelectorAll(".lista")[0];
    ELEM.innerHTML += "<ul>"
    for (let index = 0; index < 5; index++) {
        let veletlenSzam = Math.floor(Math.random() * 21 + 10)
        ELEM.innerHTML += `<li>${veletlenSzam}</li>`
    }
    ELEM.innerHTML += "</ul>"
}

function elemekFormazasa() {
    const ELEM = document.querySelectorAll(".lista")[0];
    ELEM.classList.add("formazott")
}

function esemenyKezeles1() {
    const listaElem = document.querySelectorAll(".lista")[0];
    const kattintasutanDiv = document.querySelectorAll(".kattintasutan")[0];

    listaElem.addEventListener("click", function () {
        kattintasutanDiv.innerHTML = listaElem.innerHTML;
    });
}

function esemenyKezeles2() {
    const feladatElement = document.querySelectorAll(".feladat")[0];

    const button = document.createElement("button");
    button.textContent = "OK";
    feladatElement.appendChild(button);


    button.addEventListener("click", function () {

        const newDiv = document.createElement("div");


        const img = document.createElement("img");
        img.src = "https://assets.imgix.net/unsplash/bear.jpg?w=50"
        img.alt = "NEMTOM";


        newDiv.appendChild(img);

        feladatElement.appendChild(newDiv);
        esemenyKezeles3();
    });
}

function esemenyKezeles3() {
    const feladatElement = document.querySelectorAll("img")[0];
    console.log(feladatElement)
    feladatElement.addEventListener("mouseenter", function () {
        feladatElement.classList.add("teszt2")
    });
    feladatElement.addEventListener("mouseleave", function () {
        feladatElement.classList.remove("teszt2")
    });
}

function esemenyKezeles4() {
    const elemek = document.querySelectorAll('.tarolo');

    elemek.forEach((elem) => {
        elem.addEventListener('click', (event) => {
            const eredmenyDiv = document.querySelectorAll('megjelenito');
            eredmenyDiv.innerHTML = event.target.innerHTML;
        });
    });
}
function consoleKiiro(elem) {
    console.log(elem);
}