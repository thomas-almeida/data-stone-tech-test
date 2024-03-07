# Teste DataStone
## Notas impotantes:
Voce verá que neste repositório há 2 contribuidores, não se preocupe!, sou eu mesmo nos dois perfis, acontece que ainda não migrei meu computador de casa para minha conta principal e notei isso no meio do desenvolvimento, se ainda tiver alguma dúvida posso numa call mostrar passo a passo sobre o desenvolvimento do teste, que inclusive foi muito bacana de fazer há 10 horas do prazo final.

# DataStone.hub

![Imagem do ConceptCanvas](https://uploaddeimagens.com.br/images/004/753/525/full/237shots_so.png?1709854144)

Esta é uma breve documentação do projeto Data Stone.hub, feito para auxiliar um time comercial a cadastrar e gerenciar clientes e produtos

## Stack

- **Vue.js**
- **Pinia**
- **Node.js**
- **Express**

---

## Instalação

Você pode testar o Data Stone.hub em seu ambiente de desenvolvimento de forma simples. O projeto está dividido em dois ambientes: Backend (pasta **server**) e Frontend (pasta **client**).

### Backend

É importante ressaltar que a forma de armazenamento dos dados aqui é mocada, portanto o backend grava os dados em arquivos Json dentro do projeto, neles estão os objetos de cliente e produto, já existem alguns que é possível ver quando abrimos o projeto pela primeira vez. Algo que nao pude fazer é encher de dados para ver muitos registros, espero que voce possa fazer isso por mim!

```json
[
      {
        "id": "lthheevg-a469vo",
        "nome": "Thomas Almeida",
        "cpf": "123.123.123-123",
        "rg": "55.066.088-1",
        "telefone": "(11) 94909-8312",
        "email": "contato.thomas@gmail.com",
        "status": "ATIVO",
        "produtos": [],
        "produto": "Pacote de Leads II"
    },
]

```

1. Instale as dependências:
```bash
$ cd server
$ npm install
```
2. Inicie o servidor:
```bash
$ node .
```

### Frontend
1. Instale as dependências:
```bash
$ cd client
$ npm install
```
2. Inicie o servidor:
```bash
$ npm run dev
```

----

## Funcionamento do App
Como é um app simples, mas feito em poucas horas, o Data Stone.hub tem funcionalidades exutas de um mvp, sendo elas:
- Criar cadastros de novos clientes;
- Criar cadastros de novos produtos;
- Editar os cadastros;
- Excluir os cadastros;
- Associar á um cliente um produto cadastrado;
- Visualizar na home o número de clientes e produtos existentes no sistema.

## Considerações
A única coisa que fico faltando foram os testes unitários com Jest, queria ter feito mas meu tempo foi extremamente curto, espero que nesse tempo de avaliação meu código tenha agradado e meu sistema tenha entregado um MVP que o time comercial da DataStone usuaria sem problemas, desde já muito obrigado pela oportunidade!
