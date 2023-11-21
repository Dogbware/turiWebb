var data = [
    {
        img: "../recursos/img/chicheniztza.jpeg",
        country: "Yucatan-México",
        place:"Chichén Itzá",
        describe:
           "Se localiza a 115 kilómetros de la ciudad de Mérida, Yucatán, tomando la carretera No. 180 hacia el poblado de Piste, del cual dista 2 kilómetros el sitio arqueológico. El visitante puede arribar al sitio por medio del transporte público.",
    },
    {
        img: "../recursos/img/palacio.jpg",
        country: "CDMX-Mèxico",
        place:"Palacio de bellas artes",
        describe:
           "El Palacio de Bellas Artes es un recinto cultural ubicado en el Centro Histórico de la Ciudad de México, considerado uno de los más importantes en la manifestación de las artes en México. Ubicado en la Av. Juarez S/N, Centro Histórico de la Cdad. de México, Centro, Cuauhtémoc, 06050 Ciudad de México, CDMX, abierto desde las 11 am",
    },
    {
        img: "../recursos/img/teo.jpeg",
        country: "Estado de Mèxico, Mèxico",
        place:"Teotihu- acan",
        describe:
           "Teotihuacán es un amplio complejo arqueológico mexicano al noreste de la Ciudad de México. Por el centro del lugar, que alguna vez fue una floreciente ciudad precolombina, pasa la Calzada de los Muertos. Esta une el Templo de Quetzalcóatl, la Pirámide de la Luna y la Pirámide del Sol. Las dos últimas tienen vistas panorámicas desde sus cimas. Los artefactos del Museo de la Cultura Teotihuacana, en el lugar, incluyen trabajos de alfarería y huesos.",
    },
    {
        img: "../recursos/img/momia.jpeg",
        country: "Guanajuato-México",
        place:"Museo de las momias",
        describe:
           "El museo de las momias se localiza en la explanada del panteón de Santa Paula. Su origen se remonta al descubrimiento de las primeras momias en el panteón de Santa Paula en 1865, con el interés por parte de habitantes y visitantes en observar el resultado de la momificación natural de los cuerpos. En un inicio las momias descubiertas fueron almacenadas en las catacumbas del cementerio, las cuales podían ser visitadas acompañados por el sepulturero. La entrada a las catacumbas era a través de una escalera de caracol desde el interior del cementerio. Los cuerpos momificados se encontraban de pie recargados en los muros de las catacumbas de tal forma que los visitantes pasaban por el centro, existiendo la posibilidad de tener contacto directo con los cuerpos.",
    },
];

const introduce = document.querySelector(".introduce");
const ordinalNumber=document.querySelector(".ordinal-number");

introduce.innerHTML="";
ordinalNumber.innerHTML="";

for(let i =0; i < data.length; i++){
    introduce.innerHTML+= `
                    <div class="wrapper">
                        <span>
                            <h5 class="country" style="--idx: 0">${data[i].country}</h5>
                        </span>
                        <span>
                            <h1 class="place" style="--idx: 1">${data[i].place}</h1>
                        </span>
                        <span>
                            <p class="describe" style="--idx: 2">${data[i].describe}</p>
                        </span>
                    </div>
                    `;

    ordinalNumber.innerHTML +=`<h2>0${i+1}</h2>`;
}

introduce.children[0].classList.add("active");
ordinalNumber.children[0].classList.add("active");

const thumnbnailListWrapper = document.querySelector(
    ".thumbnail-list .wrapper"
);

thumnbnailListWrapper.innerHTML += `
                        <div class="thumbnail zoom">
                            <img src="${data[0].img}" alt="">
                        </div>
`;
for (let i =1; i < data.length; i++){
    thumnbnailListWrapper.innerHTML += ` 
                        <div class="thumbnail" style="--idx: ${i-1}">
                            <img src="${data[i].img}" alt="">
                        </div>
`;
};

const nextBtn=document.querySelector(".navigation .next-button");
var currentIndex=0;
nextBtn.addEventListener("click", () => {
    nextBtn.disabled=true;
    var clone = thumnbnailListWrapper.children[0].cloneNode(true);
    clone.classList.remove("zoom");
    thumnbnailListWrapper.appendChild(clone);
    thumnbnailListWrapper.children[1].classList.add("zoom");
    setTimeout(() => {
        thumnbnailListWrapper.children[0].remove();
        nextBtn.disabled=false;
    }, 1000);

    for(let i = 2; i < thumnbnailListWrapper.childElementCount; i++)
    {
        thumnbnailListWrapper.children[i].style= `--idx: ${i - 2}`;
    }
    if(currentIndex < data.length - 1){
        currentIndex++;
    } else currentIndex=0;
    for(let i=0; i < data.length; i++){
        introduce.children[i].classList.remove("active");
        ordinalNumber.children[i].classList.remove("active");
    }
    introduce.children[currentIndex].classList.add("active");
    ordinalNumber.children[currentIndex].classList.add("active");
    ordinalNumber.children[currentIndex].textContent=`0${currentIndex+1}`
});