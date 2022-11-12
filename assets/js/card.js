const content = document.getElementById('topo')

showPokemonDetail()
function showPokemonDetail() {
    const pokeName = new URLSearchParams(window.location.search).get('pokemon')
    const pokemon = new Pokemon()
    pokemon.url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`
    pokeApi.getPokemonDetail(pokemon).then((pokemon) => {
        content.innerHTML += convertToCardTop(pokemon)
        content.innerHTML += convertToCardAbove(pokemon)
        content.innerHTML += convertToCardBelow(pokemon)
        const levels = getLevels(pokemon)
        const titles = getTitles(pokemon)
        getBarChart(titles, levels, pokemon.type)
    })
}

function convertToCardTop(pokemon) {
    const number = pokemon.number.toString().padStart(3, '0')
    return ` 
        <div class="top-grid-container ${pokemon.type}">
            <div class="top-grid-item" onclick="history.back()">
                <span class="arrow">&#8592;</span>
            </div> 
            <div class="top-grid-item">
                <span class="title">Pokedex</span>
            </div>    
            <div class="top-grid-item">
                <span class="number">#${number}</span>
            </div> 

            <div class="top-grid-item">
                <span></span>
            </div>
            <div class="top-grid-item">
                <img class="image" src="${pokemon.photo}" alt="${pokemon.name}">
            </div>              
            <div class="top-grid-item">
                <span></span>
            </div>
        </div>    
     `
}

function convertToCardAbove(pokemon) {
    return ` 
    <div id="card-above" class="card-above-grid-container">

        <div class="card-above-grid-item">
            <span class="name"></span>
        </div>
        <div class="card-above-grid-item">    
            <span class="name">${pokemon.name}<span>
        </div>
        <div class="card-above-grid-item">
            <span class="name"></span>
        </div>

        <div class="card-above-grid-item type">
            <ol class="types">
                ${getPokemonTypeByPosition(pokemon, 0)}                
            </ol>
        </div>
        <div class="card-above-grid-item">
            <span></span>
        </div>
        <div class="card-above-grid-item type">
            <ol class="types">
                ${getPokemonTypeByPosition(pokemon, 1)}   
            </ol>
        </div>

        <div class="card-above-grid-item">
            <span class="features-name">Peso</span>
        </div>
        <div class="card-above-grid-item">
            <span class="features-name"></span>
        </div>
        <div class="card-above-grid-item">
            <span class="features-name">Altura</span>
        </div>
        <div class="card-above-grid-item">
            <span class="features-value">${pokemon.weight} KG</span>
        </div>
        <div class="card-above-grid-item">
            <span class="features-value line"></span>
        </div>
        <div class="card-above-grid-item">
            <span class="features-value">${pokemon.height} M</span>
        </div>

    </div>    
    `
}

function convertToCardBelow(pokemon) {
    return `
        <div id="card-below" class="card-below-grid-container">
            <div class="card-below-grid-item"></div>    
            <div class="card-below-grid-item">
                <span>Base Stats</span>
            </div>    
            <div class="card-below-grid-item"></div>    
        </div>    
    `
}

function getPokemonTypeByPosition(pokemon, position) {
    const html = pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`)[position]
    return html !== undefined ? html : ''
}

function getTitles(pokemon) {
    let titles = []
    for (let elem of pokemon.stats) {
        titles.push(elem.title)
    }
    return titles
}

function getLevels(pokemon) {
    let levels = []
    for (let elem of pokemon.stats) {
        levels.push(elem.level)
    } console.log(levels)
    return levels
}


