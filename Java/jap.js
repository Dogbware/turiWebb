var data = [
    {
        img: "../recursos/img/fuji.jpg",
        country: "Honshu-Japòn",
        place:"Monte fuji",
        describe:
           "Volcán activo de 3776 metros de altura, el punto más alto del país. Está en el centro de Japón a 120 kilómetros de Tokio, su capital. El nombre completo del monte es Fujisan: Fu, riqueza; Ji, samurái; San, montaña. Fue inicialmente un lugar de entrenamiento de estos guerreros del antiguo Japón; ahora es zona de bases militares a los pies de la montaña. El personal turístico tiene excursiones para ascender a pie o en vehículo, pero estos solo llegan hasta la quinta estación, a 2300 metros de altura. Aunque lo ideal es alcanzar lo más alto, si no lo haces (algo que ocurre con muchos turistas), igualmente podrás visitar santuarios durante el camino. Visita y conquista el Monte Fuji de julio a agosto, temporada perfecta antes del invierno.",
    },
    {
        img: "../recursos/img/tsu.jpg",
        country: "Nagiso-Japòn",
        place:"Tsumago",
        describe:
           "Tsumago es uno de los pueblos que conserva su esencia de la época. No verás cableado eléctrico en sitios públicos ni vehículos transitar por sus principales calles. Durante la época Edo (1603-1868) fue sitio de parada obligatoria en la ruta de los caballeros y del comercio Kioto-Tokio, pero el fin de esta era y la modernidad acabó con su prosperidad, porque dejó de ser una ruta de a pie. Pese a ello, su gente invirtió en la restauración de sus vías y casas de época, para ganar ahora un título de pueblo turístico con museos, calles empedradas y venta de artesanía. Visitar Tsumago es lo más parecido a dar un viaje al pasado.",
    },
    {
        img: "../recursos/img/ina.jpg",
        country: "Kioto-Japòn",
        place:"Santuario Fushimi Inari",
        describe:
           "El Santuario Fushimi Inari, en Kioto, está para rendir tributo a Inari, el dios del arroz. Su rasgo más atractivo son sus miles de torii, el arco tradicional japonés que separa lo profano de lo sagrado. Suelen tener tonalidades rojas o bermellones. Los torii son donados por comerciantes con sus nombres o el de sus negocios, para que Inari les conceda bonanza. El recorrido a través de estos supera los 4 kilómetros, por lo que debes llevar agua para hidratarte. El santuario superó las 2 millones de visitas solo en 2017.",
    },
    {
        img: "../recursos/img/monky.jpg",
        country: "Nagano-Japòn",
        place:"Jigokudani Monkey Park",
        describe:
           "El Jigokudani Monkey Park es el hogar de los famosos monos salvajes de Japón. Son particularmente especiales por quedarse durante el invierno y soportar sus bajas temperaturas. Aunque puedes llevar a tus chicos, la ruta para llegar a la principal atracción del parque es de 1,6 kilómetros caminando, por lo que debes tomar medidas al respecto. En 40 minutos estarás frente a los entretenidos simios. Jigokudani significa “valle del infierno”, nombre por el vapor del agua hirviendo que burbujea en el suelo helado. Esta misma es usada por los monos cara roja para ducharse en un entorno frío por el invierno. El parque está en la prefectura de Nagano al oeste de Tokio. Cuenta con guías turísticos y un precioso paisaje de bosque que hace del recorrido una experiencia maravillosa.",
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