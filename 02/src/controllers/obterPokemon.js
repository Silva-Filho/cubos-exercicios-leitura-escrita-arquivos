import { detalharPokemon } from "utils-playground";

export const obterPokemon = async (req, res) => {
    const { idOuNome } = req.params;

    try {
        const pokemon = await detalharPokemon(idOuNome);
    
        const pokemonEscolhido = {
            id: pokemon.id,
            name: pokemon.name,
            heigth: pokemon.heigth,
            weight: pokemon.weight,
            base_experience: pokemon.base_experience,
            forms: pokemon.forms,
            abilities: pokemon.abilities,
            species: pokemon.species,
        };
    
        return res.send(pokemonEscolhido);        
    } catch (error) {
        return res.status(400).json(
            { 
                mensagem: error.message 
            }
        );
    }
};

