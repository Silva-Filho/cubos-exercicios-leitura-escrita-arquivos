import { buscarEndereco } from "utils-playground";
import { readFile, writeFile } from 'fs/promises';

export const pesquisarEndereco = async (req, res) => {
    const { cep } = req.params;

    try {
        /* const informacoesArquivo = await readFile("./src/enderecosCopy.json"); */
        const informacoesArquivo = await readFile("./src/enderecos.json");

        // @ts-ignore
        const informacoesArquivoJson = JSON.parse(informacoesArquivo);

        const cepEncontrado = informacoesArquivoJson.find( elemento => {
            const cepTratado = elemento.cep.replace("-", "");
            
            return cepTratado === cep;
        } );

        if (!cepEncontrado) {
            const endereco = await buscarEndereco(cep);

            if (endereco.erro) {
                return res.status(404).json(
                    {
                        messagem: "CEP não existe."
                    }
                );
            }

            informacoesArquivoJson.push(endereco);
        }

        const informacoesArquivoString = JSON.stringify(informacoesArquivoJson);
       
        await writeFile("./src/enderecosCopy.json", informacoesArquivoString);
        
        return res.status(202).json(cepEncontrado);
    } catch (error) {
        return res.status(400).json(
            {
                mensagem: error.message
            }
        );
    }
};

