let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];

window.renderItem = (arrItem) => {
    let html = '';
    for (let item of arrItem) {
        html += `
            <div class="col-4">
                <button style="padding: 0; border: none;" id=${item.id} onclick="thuKinh('${item.id}')">
                    <img src=${item.src} width="100%" height="100%" >
                </button>
            </div>
        `
    }
    document.querySelector('#vglassesList').innerHTML = html;
}

renderItem(dataGlasses);

let glassId = '';
window.thuKinh = (idClick) => {
    let glassClick = dataGlasses.find((item) => item.id === idClick);
    glassId = idClick;
    // console.log(glassClick);
    let html = `
        <img src=${glassClick.virtualImg} alt="">
    `;

    let htmlGlass = `
        <div id="glasses">
            <h5>${glassClick.name} - ${glassClick.brand} (${glassClick.color})</h5>
            <span id="price">$${glassClick.price}</span>
            <span id="stocking">Stocking</span>
            <p id="description">${glassClick.description}</p>
        </div>
    `;


    document.querySelector('#avatar').innerHTML = html;
    document.querySelector('#glassesInfo').style.display = 'block';
    document.querySelector('#glassesInfo').innerHTML = htmlGlass;

}

window.removeGlasses = (status) => {
    if (status) {
        let glassClick = dataGlasses.find((item) => item.id === glassId);
        // console.log(glassClick);
        let htmlGlass = `
        <div id="glasses">
            <h5>${glassClick.name} - ${glassClick.brand} (${glassClick.color})</h5>
            <span id="price">$${glassClick.price}</span>
            <span id="stocking">Stocking</span>
            <p id="description">${glassClick.description}</p>
        </div>
    `;


        document.querySelector('#glassesInfo').style.display = 'block';
        document.querySelector('#glassesInfo').innerHTML = htmlGlass;

        let html = `
            <img src=${glassClick.virtualImg} alt="">
        `;
        document.querySelector('#avatar').innerHTML = html;
    } else {
        document.querySelector('#avatar').innerHTML = '';
        document.querySelector('#glassesInfo').style.display = 'none';

    }
}







