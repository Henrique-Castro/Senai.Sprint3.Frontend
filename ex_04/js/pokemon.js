
let getPokemonUrl = 'https://pokeapi.co/api/v2/pokemon/';

search_button.addEventListener('click', searchPokemon);

function searchPokemon() {

    let pokemonIdentity = search_input.value.toLowerCase();

    getPokemonUrl = getPokemonUrl + pokemonIdentity;
    fetch(getPokemonUrl)
        .then(result => result.json())
        .then(info => buildPokemonTable(info))
        .catch(error => console.log(error))
};

function buildPokemonTable(pokemonInfo) {
    //object of sprite links
    table_body.innerHTML = "";
    let sprites_arr = pokemonInfo.sprites;

    //Creating the html tags for the table
    let tr = document.createElement('tr');
    let td_pokemon = document.createElement('td');
    let td_abilities = document.createElement('td');
    let td_size = document.createElement('td');
    let td_id = document.createElement('td');
    let poke_img = document.createElement('img');
    let poke_name = document.createElement('p');
    let poke_abilities = document.createElement('p');
    let poke_size = document.createElement('p');

    //Setting the attributes of the html tags created
    td_pokemon.setAttribute('class', 'poke-image');
    poke_img.setAttribute('src', sprites_arr.front_default);
    td_abilities.setAttribute('class', 'poke-abilities regular-td');
    td_size.setAttribute('class', 'poke-size regular-td');
    poke_name.textContent = pokemonInfo.name;
    poke_abilities.textContent = pokemonInfo.abilities.join(';');
    poke_size.textContent = pokemonInfo.weight;

    //Recognizing parenthood
    //Td of name and image
    td_pokemon.appendChild(poke_name);
    td_pokemon.appendChild(poke_img);
    //Td of abilities
    td_abilities.appendChild(poke_abilities);
    //Td of weight
    td_size.appendChild(poke_size);
    //Creating the hole line
    tr.appendChild(td_pokemon);
    tr.appendChild(td_abilities);
    tr.appendChild(td_size);
    table_body.appendChild(tr);
};