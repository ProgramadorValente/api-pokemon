var formulario = document.querySelector("form");

formulario.addEventListener("submit", function(e){
    
    // IMPEDE O REFRESH DO FIRMULÁRIO
    e.preventDefault();

    // URL da API onde será pesquisado os dados
    let urlAPI = "https://pokeapi.co/api/v2/pokemon/"

    // Resgata valor digitado no formulário
    let pokemon = document.getElementById("name")

    // Adiciona nome ou número do pokemon na url da API
    urlBusca = urlAPI + this.name.value

    // Colocando as letras em minúsculas
    urlBusca = urlBusca.toLocaleLowerCase()

    // ID Descrição do Pokémon
    let descPokemon = document.getElementById("desc-pokemon")

    // ID Imagem do Pokémon
    let imgPokemon = document.getElementById("img-pokemon")

    let retornoHTML = ""

    fetch(urlBusca)

        // Define que o valor a ser retornado será do tipo JSON
        .then(descPokemon => descPokemon.json())

        // Função para recuperar o valor obtido pelo JSON e Inserir no Corpo da página
        .then(function(data){
            console.log(data)

            var types = ""
            for (var x = 0; x <= data.types.length-1; x++){
                types += typeImgPokemon(data.types[x].type.name)
            }

            retornoHTML = "Nome: " + letraMaiuscula(data.name)  + "<br>" +
                            "Tipo: " + types
            descPokemon.innerHTML = retornoHTML
            
            retornoHTML = "<img src='"+ data.sprites.front_default +"'>" + 
                          "<img src='"+ data.sprites.back_default +"'>"
            imgPokemon.innerHTML = retornoHTML
        })
        .catch(function(err){
            retornoHTML = "Erro:" + err
            if(err == "Unexpected token N in JSON at position 0") {
                retornoHTML = "Pokémon não encontrado! 😭;"
            } else {
                retornoHTML = "Erro:" + err
            }
        })


});

function letraMaiuscula(val) {
    return val[0].toUpperCase() + val.substr(1)
}

function typeImgPokemon(val) {
    switch(val){
        case "bug":
            return "<div class='align-img-type'> <img src='./img/types-pokemon/Pokemon_Type_Icon_Bug.svg' alt='bug' class='img-type-pokemon'>" + letraMaiuscula(val) + "</div>"
        break

        case "dark":
            return "<div class='align-img-type'> <img src='./img/types-pokemon/Pokemon_Type_Icon_Dark.svg' alt='bug' class='img-type-pokemon'> " + letraMaiuscula(val) + "</div>"
        break

        case "dragon":
            return "<div class='align-img-type'> <img src='./img/types-pokemon/Pokemon_Type_Icon_Dragon.svg' alt='bug' class='img-type-pokemon'> " + letraMaiuscula(val) + "</div>"
        break

        case "electric":
            return "<div class='align-img-type'> <img src='./img/types-pokemon/Pokemon_Type_Icon_Electric.svg' alt='bug' class='img-type-pokemon'> " + letraMaiuscula(val) + "</div>"
        break

        case "fairy":
            return "<div class='align-img-type'> <img src='./img/types-pokemon/Pokemon_Type_Icon_Fairy.svg' alt='bug' class='img-type-pokemon'> " + letraMaiuscula(val) + "</div>"
        break

        case "fighting":
            return "<div class='align-img-type'> <img src='./img/types-pokemon/Pokemon_Type_Icon_Fighting.svg' alt='bug' class='img-type-pokemon'> " + letraMaiuscula(val) + "</div>"
        break

        case "fire":
            return "<div class='align-img-type'> <img src='./img/types-pokemon/Pokemon_Type_Icon_Fire.svg' alt='bug' class='img-type-pokemon'> " + letraMaiuscula(val) + "</div>"
        break

        case "flying":
            return "<div class='align-img-type'> <img src='./img/types-pokemon/Pokemon_Type_Icon_Flying.svg' alt='bug' class='img-type-pokemon'> " + letraMaiuscula(val) + "</div>"
        break

        case "ghost":
            return "<div class='align-img-type'> <img src='./img/types-pokemon/Pokemon_Type_Icon_Ghost.svg' alt='bug' class='img-type-pokemon'> " + letraMaiuscula(val) + "</div>"
        break

        case "grass":
            return "<div class='align-img-type'> <img src='./img/types-pokemon/Pokemon_Type_Icon_Grass.svg' alt='bug' class='img-type-pokemon'> " + letraMaiuscula(val) + "</div>"
        break

        case "ground":
            return "<div class='align-img-type'> <img src='./img/types-pokemon/Pokemon_Type_Icon_Ground.svg' alt='bug' class='img-type-pokemon'> " + letraMaiuscula(val) + "</div>"
        break

        case "ice":
            return "<div class='align-img-type'> <img src='./img/types-pokemon/Pokemon_Type_Icon_Ice.svg' alt='bug' class='img-type-pokemon'> " + letraMaiuscula(val) + "</div>"
        break

        case "normal":
            return "<div class='align-img-type'> <img src='./img/types-pokemon/Pokemon_Type_Icon_Normal.svg' alt='bug' class='img-type-pokemon'> " + letraMaiuscula(val) + "</div>"
        break

        case "poison":
            return "<div class='align-img-type'> <img src='./img/types-pokemon/Pokemon_Type_Icon_Poison.svg' alt='bug' class='img-type-pokemon'> " + letraMaiuscula(val) + "</div>"
        break

        case "psychic":
            return "<div class='align-img-type'> <img src='./img/types-pokemon/Pokemon_Type_Icon_Psychic.svg' alt='bug' class='img-type-pokemon'> " + letraMaiuscula(val) + "</div>"
        break

        case "rock":
            return "<div class='align-img-type'> <img src='./img/types-pokemon/Pokemon_Type_Icon_Rock.svg' alt='bug' class='img-type-pokemon'> " + letraMaiuscula(val) + "</div>"
        break

        case "steel":
            return "<div class='align-img-type'> <img src='./img/types-pokemon/Pokemon_Type_Icon_Steel.svg' alt='bug' class='img-type-pokemon'> " + letraMaiuscula(val) + "</div>"
        break

        case "water":
            return "<div class='align-img-type'> <img src='./img/types-pokemon/Pokemon_Type_Icon_Water.svg' alt='bug' class='img-type-pokemon'> " + letraMaiuscula(val) + "</div>"
        break

        default:
            return "<div class='align-img-type'> Não definido! 😱 </div>"
        break
    }
}