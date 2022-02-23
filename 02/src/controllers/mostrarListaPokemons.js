import { listarPokemons } from "utils-playground";

export const mostrarListaPokemons = async (req, res) => {
    const { pagina } = req.query;

    try {
        const { results } = await listarPokemons(pagina ?? 1);

        return res.send(results);
    } catch (error) {
        return res.status(400).json(
            { 
                mensagem: error.message 
            }
        );
    }    
};

