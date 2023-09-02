const artistas = [
    {
        nombre: 'Soda Stereo',
        banda: 'Soda Stereo',
        genero: 'Rock',
        ultimoLanzamiento: '2007-11-27',
        album: 'Me Verás Volver',
        imagen: './multimedia/sodastereo.jpg'
    },
    {
        nombre: 'Los Auténticos Decadentes',
        banda: 'Los Auténticos Decadentes',
        genero: 'Rock/Ska',
        ultimoLanzamiento: '2019-04-26',
        album: 'MTV Unplugged',
        imagen: './multimedia/autenticos.jpg'
    },

    {
        nombre: 'Charly García',
        banda: 'Solista',
        genero: 'Rock',
        ultimoLanzamiento: '2017-10-27',
        album: 'Random',
        imagen: './multimedia/charly.webp'
    },
    {
        nombre: 'Luis Alberto Spinetta',
        banda: 'Almendra',
        genero: 'Rock',
        ultimoLanzamiento: '1970-12-01',
        album: 'Almendra',
        imagen: './multimedia/almendra.jpg'
    },
    {
        nombre: 'Gustavo Cerati',
        banda: 'Soda Stereo',
        genero: 'Rock',
        ultimoLanzamiento: '1995-11-07',
        album: 'Sueño Stereo',
        imagen: './multimedia/ceratti.jpg'
    },
    {
        nombre: 'Fito Páez',
        banda: 'Solista',
        genero: 'Rock',
        ultimoLanzamiento: '2021-11-12',
        album: 'La conquista del espacio',
        imagen: './multimedia/fito.jpg'
    },
    {
        nombre: 'Andrés Calamaro',
        banda: 'Los Rodríguez',
        genero: 'Rock',
        ultimoLanzamiento: '2021-11-19',
        album: 'Dios los cría (Edición Especial)',
        imagen: './multimedia/andres.jpg'
    },
    {
        nombre: 'Shakira',
        banda: 'Solista',
        genero: 'Pop',
        ultimoLanzamiento: '2021-04-02',
        album: 'El Dorado',
        imagen: './multimedia/shakira.jpg'
    },
    {
        nombre: 'Ariana Grande',
        banda: 'Solista',
        genero: 'Pop',
        ultimoLanzamiento: '2020-10-30',
        album: 'Positions',
        imagen: './multimedia/ariana.jpg'
    },
    {
        nombre: 'Dua Lipa',
        banda: 'Solista',
        genero: 'Pop',
        ultimoLanzamiento: '2020-03-27',
        album: 'Future Nostalgia',
        imagen: './multimedia/duaLipa.jpg'
    },
    {
        nombre: 'Taylor Swift',
        banda: 'Solista',
        genero: 'Pop',
        ultimoLanzamiento: '2020-07-24',
        album: 'Folklore',
        imagen: './multimedia/taylor.jpg'
    },
    {
        nombre: 'Eminem',
        banda: 'Solista',
        genero: 'Hip Hop',
        ultimoLanzamiento: '2020-12-18',
        album: 'Music To Be Murdered By - Side B',
        imagen: './multimedia/eminem.jpg'
    },
    {
        nombre: 'Kendrick Lamar',
        banda: 'Solista',
        genero: 'Hip Hop',
        ultimoLanzamiento: '2017-04-14',
        album: 'DAMN.',
        imagen: './multimedia/kendrick.jpg'
    },
    {
        nombre: 'Drake',
        banda: 'Solista',
        genero: 'Hip Hop',
        ultimoLanzamiento: '2021-09-03',
        album: 'Certified Lover Boy',
        imagen: './multimedia/drake.jpg'
    },
    {
        nombre: 'Virus',
        banda: 'Solista',
        genero: 'Hip Hop',
        ultimoLanzamiento: '2021-09-03',
        album: 'Certified Lover Boy',
        imagen: './multimedia/virus.jpg'
    },
];

const generosMusicales = [
    { id: 1, nombre: "Rock" },
    { id: 2, nombre: "Pop" },
    { id: 3, nombre: "Electrónica" },
    { id: 4, nombre: "Hip Hop" },
    { id: 5, nombre: "Reggaeton" },
    // Agrega más categorías según sea necesario
    ];


const $ = document;
const containerArtistas = document.getElementById('artistas')
const containerGenero = document.getElementById('generoMusical')

// Aplicación de estilos a containerArtista
containerArtistas.style.fontSize = '10px'
containerArtistas.style.color = 'grey';
containerArtistas.style.position = 'absolute';
containerArtistas.style.marginTop = '-25%';

// Aplicación de estilos a containerGenero
containerGenero.style.fontStyle = 'rubik';
containerGenero.style.fontSize = '14px';
containerGenero.style.color = 'black';
containerGenero.style.borderRadius ='40px';
containerGenero.style.marginLeft = '27%';


// * 1- VISTA GENERAL

// // estructura card HTML
// let div = $.createElement('div')
// let h2 = $.createElement('h2')
// let h3 = $.createElement('h3')
// let small = $.createElement('small')
// let p = $.createElement('p')
// let p_ultimoLanzamiento = $.createElement('p')
// let img = $.createElement('img')

// // contenido card
// let nombre = $.createTextNode(artistas[1].nombre)
// let banda = $.createTextNode(artistas[1].banda)
// let genero = $.createTextNode(artistas[1].genero)
// let album = $.createTextNode(artistas[1].album)
// let ultimoLanzamiento = $.createTextNode(artistas[1].ultimoLanzamiento)

// // referenciar (atar) el contenido con su correcpondiente etiqueta html
// h2.appendChild(nombre)
// h3.appendChild(banda)
// small.appendChild(genero)
// p.appendChild(album)
// p_ultimoLanzamiento.appendChild(ultimoLanzamiento)

// img.setAttribute('src', artistas[1].img)

// div.append(h2, h3, small, p, p_ultimoLanzamiento, img)
// document.body.appendChild(div)

///////////////////////////////////////////////////////
function createCard(artista){
    // estructura card HTML
    let div = $.createElement('div')
    let h2 = $.createElement('h2')
    let h3 = $.createElement('h3')
    let small = $.createElement('small')
    let p = $.createElement('p')
    let p_ultimoLanzamiento = $.createElement('p')
    let img = $.createElement('img')

    // agregar estilos
    div.classList.add('card')

    // contenido card
    let nombre = $.createTextNode(artista.nombre)
    let banda = $.createTextNode(artista.banda)
    let genero = $.createTextNode(artista.genero)
    let album = $.createTextNode(artista.album)
    let ultimoLanzamiento = $.createTextNode(artista.ultimoLanzamiento)

    // Configurar la imagen
    img.src = artista.imagen; // URL de la imagen
    img.alt = artista.nombre; 
    
    // Achico heigth de la img de Los Aut. Decadentes
    if (artista.nombre === 'Los Auténticos Decadentes') {
        img.style.height = '43%'; 
    }
    
    // Achico heigth de la img de Spinetta
    if (artista.nombre === 'Luis Alberto Spinetta') {
        img.style.height = '52%'; // Cambiar el valor según tu preferencia
    }

    // Achico height de la img de Eminem
    if (artista.nombre === 'Eminem') {
        img.style.height = '55%'; // Cambiar el valor según tu preferencia
    }

    // Creo el botón de Spotify
    const spotifyButton = $.createElement('button');
    spotifyButton.classList.add('spotify-button');

    // Creo un elemento <i> de reproducción de FontAwesome
    const playIcon = $.createElement('i');
    playIcon.classList.add('fas', 'fa-play'); 

    // Agrego el ícono al botón
    spotifyButton.appendChild(playIcon);


    // Agrego el botón al div de la tarjeta
    div.appendChild(spotifyButton);
    ///////////////////////////////////////////////////
    // Agrego la card al contenedor de artistas
    containerArtistas.appendChild(div);
    // referenciar (atar) el contenido con su correspondiente etiqueta html
    h2.appendChild(nombre)
    h3.appendChild(banda)
    small.appendChild(genero)
    p.appendChild(album)
    p_ultimoLanzamiento.appendChild(ultimoLanzamiento)

    
    div.append(h2, h3, small, p, p_ultimoLanzamiento, img)
    containerArtistas.appendChild(div)


    // Recuperar todas las tarjetas de artistas
const tarjetas = document.querySelectorAll('.card');


}


///////////////////////////////////////////////////////

//NUEVO CODIGO QUE CARGA TARJETA
// Función para crear y agregar tarjetas al cuerpo del documento
//function agregarTarjetas() {
    //const body = document.body;

    //artistas.forEach(artista => {
        // Crear una tarjeta div
        //const tarjeta = document.createElement('div');
        //tarjeta.style.border = '1px solid #ccc';
        //tarjeta.style.padding = '20px';
        //tarjeta.style.margin = '10px';
        //tarjeta.style.textAlign = 'center';
        //tarjeta.style.backgroundColor = '#f0f0f0';
        //tarjeta.style.width = '200px';

        // Crear una imagen
        //const imagen = document.createElement('img');
        //imagen.src = artista.imagen;
        //imagen.alt = artista.nombre;
        //imagen.style.maxWidth = '100%';

        // Agregar la imagen a la tarjeta
        //tarjeta.appendChild(imagen);

        // Agregar la tarjeta al cuerpo del documento
        //body.appendChild(tarjeta);
    //});
//}

// Llama a la función para agregar las tarjetas cuando se cargue la página
//window.onload = agregarTarjetas;


artistas.forEach(function(artista){
    createCard(artista)
})

for (const genero of generosMusicales ) {
    console.log(genero);
    containerGenero.innerHTML += `<a class='item_genero' id="genero-${genero.id}">${genero.nombre}</a>`
}


