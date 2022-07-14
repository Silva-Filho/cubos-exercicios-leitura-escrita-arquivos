## Exercícios

***1. Tratamento de exceções na API Cálculo de frete***

Na aula de hoje, você aprendeu que precisamos tratar a exceções em nosso código para que não tenhamos inconsistências no funcionamento das nossas API's.

Sua tarefa para essa atividade é trazer o código para esta pasta e implementar o tratamento de exceções utilizando o bloco `try/catch` da maneira mais adequada, de acordo com o que foi apresentado em aula.

---

***2. Tratamento de exceções na API Pokemon***

Na aula de hoje, você aprendeu que precisamos tratar a exceções em nosso código para que não tenhamos inconsistências no funcionamento das nossas API's.

Sua tarefa para essa atividade é trazer o código para esta pasta e implementar o tratamento de exceções utilizando o bloco `try/catch` da maneira mais adequada, de acordo com o que foi apresentado em aula.

---

***3. Consulta CEP***

Vamos criar uma API para consulta de endereços pelo CEP.

Para fonte dos dados, utilizaremos a função `buscarEndereco`, da biblioteca `utils-playground`, que pode ser baixada no NPM.

A nossa API deverá possuir apenas um recurso **enderecos** com apenas um método GET que recebe como parâmetro tipo path (params) **cep** que será o número do CEP (sem pontuação, apenas números).
A requisição GET à nossa API deverá ser realizada através do endereço http://localhost:3000/enderecos/

Ao receber a requisição, nossa API deverá primeiro procurar o endereço em um array de endereços do arquivo **enderecos.json** que deverá existir em nosso servidor e caso não encontre, requisitar o endereço usando a função `buscarEndereco`.

Para consultar o endereço usando a função `buscarEndereco`, devemos passar o número do CEP sem pontuação da seguinte forma:

```javascript
const endereco = buscarEndereco("12345678")
```

Quando encontrar o endereço, deveremos incluir o objeto do endereço retornado pela função no nosso array de endereços do arquivo **enderecos.json**. Ou seja, conforme formos fazendo mais chamadas, nosso arquivo vai acumulando mais endereços. Lembre-se de cuidar para que não tenhamos endereços duplicados em nossos arquivos.

Para ler e escrever no arquivo deveremos utilizar o **fs** com chamadas assíncronas.

O objeto do endereço que trabalharemos terá o seguinte formato:

```json
{
    "cep": "01001-000",
    "logradouro": "Praça da Sé",
    "complemento": "lado ímpar",
    "bairro": "Sé",
    "localidade": "São Paulo",
    "uf": "SP",
    "ibge": "3550308",
    "gia": "1004",
    "ddd": "11",
    "siafi": "7107"
}
```

Obs.:

-   É necessário se atentar para o uso do await quando uma função utiliza promises.
-   Todas as rotas deverão seguir os padrões REST o mais fielmente possível.
-   Todas as requisições deverão ser assíncronas.

---

###### tags: `módulo 2` `exercícios` `lógica` `nodeJS`
