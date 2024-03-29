   // 1st step is to get the api url
let url = "https://pokeapi.co/api/v2/pokemon/chimchar/"
let fluidContainer=document.getElementsByClassName("container-fluid")[0];
// then fetch (url)
   
function getTypes (pokemonJSON){
    let types = [];
    for( let type of pokemonJSON.types){
        types.push(type.type.name)
    }
    return types;
}

function getMoves(pokemonJSON){
    let moves = [];
    for(let move of pokemonJSON.moves){
        moves.push(move.move.name)
    }
    return moves;
}

function getAbilities(pokemonJSON){
    let abilities = [];
    for(let ability of pokemonJSON.abilities){
        abilities.push(ability.ability.name);
    }
    return abilities;
}

function createCarouselItem(pokemon){
    //div with carousel-item
    //inside the div we have an image with class d-block and w-100
    let carouselItem = document.createElement("div");
    carouselItem.setAttribute("class", "carousel-item active");

    let carouselImg = document.createElement("Img");
    carouselImg.setAttribute("class", "d-block w-100");
    carouselImg.src = pokemon.image;

    carouselItem.appendChild(carouselImg);
    
    document.getElementsByClassName("carousel-inner")[0].appendChild(carouselItem);
}

function createPokemonElement(pokemon){
    //h1 tag for name
    let h1 = document.createElement("h1");
    h1.innerText = pokemon.name;
    //h2 tag for number
    let h2 = document.createElement("h2");
    h2.innerText = pokemon.number;
    //p tag for types
    let p = document.createElement("P");
    for(let type of pokemon.types){
        p.innerText += `${type}`
    }
    //ul tag for moves
    let moveUL = document.createElement("ul");
    for(let move of pokemon.moves) {
       moveUL.innerHTML += `<li>${move}</li>`;
    }
    //ul tag for abilities let moveUL = document.createElement("ul");
    let abilityUL = document.createElement("ul");
    for(let ability of pokemon.abilities) {
        abilityUL.innerHTML += `<li>${ability}</li>`;
    }
    //div container for our pokemon element
    let div = document.createElement('div');
    div.append(h1, h2, p, moveUL, abilityUL);
    fluidContainer.appendChild(div);
}


fetch (url)
.then((response) => response.json()) // the arrow function is taking the perameter from response
.then(function(data){
    console.log(data);
    let name = data.name;
    let number = data.id;
    let types = getTypes(data);
    let moves = getMoves(data);
    let abilities = getAbilities(data);
    let image = data.sprites.front_default;
    
    let chimchar= new Pokemon ( name, number, types, moves, abilities, image);
    console.log (chimchar);
    createPokemonElement(chimchar);
    createCarouselItem(chimchar);
})
.catch(function(error){
    console.log(error);
})