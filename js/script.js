//1 - Creo array immagini
const imagesArray = [
    "01.webp",
    "02.webp",
    "03.webp",
    "04.webp",
    "05.webp"
]

//2 - Creiamo dinamicamente i div con le immagini del carosello
let itemsContent = '';

for(let i = 0; i < imagesArray.length; i++){
    itemsContent += `<div class="item">
        <img src="./img/${imagesArray[i]}">
    </div>`
}

//3 - inseriamo le immagini nel div che le deve contenere
const itemsSlider = document.querySelector('.item-slider');
itemsSlider.innerHTML += itemsContent;

//4 - Prendiamo la prima immagine dell'array e la rendiamo attiva
//const items = document.querySelector('.item'); //ALTERNATIVA

//usando getElementsByClassName mi creo un array di item
const items = document.getElementsByClassName('item');

//inidice degli array
let itemActive = 0;

//rendo attivo la prima immagine
items[itemActive].classList.add('active');

//5 - rendo attivo anche il primo cerchio di navigazione
//usando getElementsByClassName mi creo un array di circle
const circles = document.getElementsByClassName('circle');

//rendo attivo il primo cerchio
circles[itemActive].classList.add('active');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click', function(){
 
    if(itemActive == imagesArray.length - 1)
    {
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        
        itemActive = 0;

        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');
    }
    else{
        // rimuovo la classe active dagli elementi attualmente visibili
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');

        // eseguo l'incremento
        itemActive++;
        
        // aggiungo la classe active all'elemento successivo
        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');
    }
});

prev.addEventListener('click', function(){

    if(itemActive == 0)
    {
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active')
        itemActive = imagesArray.length - 1;
        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');
    }
    else{
        // rimuovo la classe active dagli elementi attualmente visibili
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');

        // eseguo decremento
        itemActive--;

        // aggiungo la classe active all'elemento precedente
        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');
    }
})


