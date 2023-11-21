var data = [
    {
        img: "../recursos/img/torre.jpg",
        country: "Paris-Francìa",
        place:"Torre Eiffel",
        describe:
           "La Torre Eiffel fue creada para la Exposición Universal de París del año 1889 y aunque no gustó en un principio a los parisinos por su diseño, con el paso del tiempo se ha convertido en el símbolo más importante que ver en París y en el monumento más visitado del mundo con más de 7 millones de personas al año. Para subir a la zona más alta de esta estructura de hierro de 300 metros de altura, construida por el famoso ingeniero Gustave Eiffel, te recomendamos utilizar el ascensor antes que la escalera de 1665 escalones sin olvidar que a diferencia de la escalera, en los ascensores se forman interminables colas",
    },
    {
        img: "../recursos/img/el.jpg",
        country: "Paris-Francia",
        place:"El Louvre",
        describe:
           "El Louvre, el museo más famoso y visitado del mundo, es otro de los lugares que visitar en París imprescindibles. Inaugurado a finales del siglo XVIII, en este enorme espacio situado en el Palacio del Louvre se encuentran algunas de las obras maestras más importantes de la historia como La Gioconda de Leonardo da Vinci, la Venus de Milo o el Escriba Sentado del antiguo Egipto. Además de su increíble estructura, en 1989 se construyó una pirámide de cristal en el centro de la plaza, que actúa como entrada, y que merece la pena ver de noche iluminada.",
    },
    {
        img: "../recursos/img/biblio.jpg",
        country: "Paris-Francia",
        place:"Biblioteca Nacional",
        describe:
           "Entrar en la Sede Richelieu-Louvois de la Biblioteca Nacional de Francia, situada entre las calles des Petits-Champs, Vivienne, Louvois y Richelieu, es una de las mejores cosas gratis en París. Si no tienes el carnet de usuario de esta biblioteca solo tendrás acceso a una pequeña parte de este edificio, aunque suficiente para ver su preciosa sala de lectura cubierta de nueve cúpulas apoyadas sobre arcos de hierro e iluminada con luz natural. Otra biblioteca que merece la pena visitar en París es la Biblioteca Mazarino, situada en el muelle de Conti, a orillas del Sena, y considerada la biblioteca pública más antigua de Francia.",
    },
    {
        img: "../recursos/img/gal.jpg",
        country: "Paris-Francia",
        place:"Galería vivienne",
        describe:
           "No puedes irte de la ciudad sin recorrer alguna de sus tradiciones galerías comerciales repletas de tiendas de moda y antigüedades, perfectas para tomarte un café con un croissant en alguna de sus cafeterías o pastelerías, otra de las mejores cosas que hacer en París. Entre las favoritas se encuentran el Passage des Panoramas y la Galería Vivienne, dos preciosas galerías con una arquitectura parecida en la que se prioriza el paso de la luz natural y el diseño parisino de principios del siglo XIX, que te harán retroceder a una época pasada llena de esplendor.",
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