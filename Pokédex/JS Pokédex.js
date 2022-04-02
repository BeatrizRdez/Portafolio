const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if(res.status != "200"){
            noData();
        } else{
            return res.json();
        }
        
    }).then((datos) => { 
        if(datos){
        console.log(datos);
        let pokeImg = datos.sprites.front_default;


        let name = datos.name;
        let id = datos.id;       
        let tipo = datos.types;
        let habilidad = datos.abilities;
        let estadisticas = datos.stats;

        allData(name, id, pokeImg, tipo, habilidad, estadisticas);
        }
    })    
}

const allData = (name, id, url, tipo, habilidad, estadisticas) =>{

    nameUpper = name.charAt(0).toUpperCase() + name.slice(1);
    document.getElementById("nombre").textContent = `${nameUpper}`;

    document.getElementById("id").textContent = `${id}`;

    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;

    let i = 0;

    const statName = document.getElementById("type");
    statName.innerHTML = ""; 
    for(let D of tipo){    
                
        typeUpper = tipo[i].type.name.charAt(0).toUpperCase() + tipo[i].type.name.slice(1);
        let addName = document.createTextNode(`${typeUpper} `);
        statName.appendChild(addName);
        i += 1;

    }    
    i = 0;

    const ability = document.getElementById("habilidades");
    ability.innerHTML = ""; 
    for(let value of habilidad){
            
        let newListItem = document.createElement('li');
        abilityUpper = habilidad[i].ability.name.charAt(0).toUpperCase() + habilidad[i].ability.name.slice(1);
        newListItem.textContent = `${abilityUpper}`;

        ability.appendChild(newListItem);

        i += 1;
    }
    i = 0;

    for(let value of estadisticas){
        id1 = `statValue${i}`
        if(i == 0){
            let pNum = document.getElementById(id1);
            pNum.textContent = `${estadisticas[i].base_stat}`;    
        }else if(i == 1){
            let pNum = document.getElementById(id1);
            pNum.textContent = `${estadisticas[i].base_stat}`; 
        }else if(i == 2){
            let pNum = document.getElementById(id1);
            pNum.textContent = `${estadisticas[i].base_stat}`; 
        }else if(i == 3){
            let pNum = document.getElementById(id1);
            pNum.textContent = `${estadisticas[i].base_stat}`; 
        }else if(i == 4){
            let pNum = document.getElementById(id1);
            pNum.textContent = `${estadisticas[i].base_stat}`; 
        }else if(i == 5){
            let pNum = document.getElementById(id1);
            pNum.textContent = `${estadisticas[i].base_stat}`; 
        }
        i += 1;
    }
}

const noData = () =>{
    const url = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.XUDg6DfQbTM0uxBDYiGRgQHaGj%26pid%3DApi&f=1";
    
    let pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
    document.getElementById("nombre").textContent = `nel`;
    document.getElementById("id").textContent = `nel`;
    document.getElementById("habilidades").textContent = `nel`;
    document.getElementById("type").textContent = `nel`;

    for(let i = 0; i<= 6; i++){
        id1 = `statValue${i}`;

        if(i == 0){
            let pNum = document.getElementById(id1);
            pNum.textContent = `nel`;    
        }else if(i == 1){
            let pNum = document.getElementById(id1);
            pNum.textContent = `nel`; 
        }else if(i == 2){
            let pNum = document.getElementById(id1);
            pNum.textContent = `nel`; 
        }else if(i == 3){
            let pNum = document.getElementById(id1);
            pNum.textContent = `nel`; 
        }else if(i == 4){
            let pNum = document.getElementById(id1);
            pNum.textContent = `nel`; 
        }else if(i == 5){
            let pNum = document.getElementById(id1);
            pNum.textContent = `nel`; 
        }
    }
}

fetchPokemon();