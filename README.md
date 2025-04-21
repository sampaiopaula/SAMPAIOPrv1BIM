# Prova Programação Para Internete 

para promover uma melhor organizaçao e facili nda n tranansformamos uma paginque etava em html e css simples em uma pagina com javascript trazendo mais funcionalidade e organizaçao, reuso de componentes e facilidade de manutenção. A principal melhoria ao adotar React foi a criação de componentes reutilizáveis e a separação clara entre estrutura, estilo e lógica.



## Passo a Passo da Conversão

- Inicialização do projeto React (comandos utilizados).
- Explicação sobre a criação dos componentes.
- Como foi aplicada a estilização.
- Como a lista de produtos.








## Componentes



- Os principais componentes criados foram:
- Header.tsx: Cabeçalho.
- Banner.tsx: Imagem principal.
- Productlist.tsx: Lista de produtos .
- Footer.tsx: Rodapé com informações adicionais.

Cada componente foi organizado dentro da pasta src/components



## Estilização 

A estilização foi feita utilizando CSS  App.css  Para imagens de fundo, utilizamos:



```sh
.topo{
   width: 100%;
   height: 250px;
   background: url(https://i.pinimg.com/736x/94/0e/c8/940ec8c64c1c18e57d72f39c7e9b9250.jpg) ;
   background-position: 60% 20%;
   
   
   font-family: Ga Maamli;
   font-size: 25px;
   color: aliceblue;
   display: flex;
   align-items: center;
   justify-content: center; 
   flex-direction: column;
 }
 .conteiner2{
   height:100%;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;}
```



## lista de produtos 

A lista de produtos foi feita atraves de 3 clases a primeira caixa que contem o tamanho e especificaçoes da da imagem , font com as informações da fonte , e grid  que define uma grade onde as caixas devem fica alinhadas e organizadas .
```.
gridItem{
    width: 300px;
    height: 200px;
  }
  
.caixa1{
background: url(https://i.pinimg.com/736x/96/01/ac/9601ac2b697d557c14c115c58e0ff567.jpg);
border-radius: 15%;
background-position: 50% 40%;
background-size: cover;
background-repeat: no-repeat;
}
.fontr{ 
    color: rgb(255, 255, 252);
    text-align: center;
    font-size: 40px;
    display: flex;
    font-family: Neucha;
    align-items: center;
    justify-content: center; 
    flex-direction: column;
}
```

## Rodar Projeto
1. **Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio

```
2. **instale as dependencias**
```
instale as dependencias
npm install
```
3. **Inicie o servidor de desenvolvimento:**
```

npm run dev
```
## Dificuldades 
No começo, por falta de organização minha ao fazer o primeiro projeto, o HTML e o CSS estavam desorganizados, o que gerou problemas ao converter e abrir o site. Para resolver, tive que revisar cada tag para verificar se estavam escritas corretamente e se havia espaços desnecessários.

Depois surgiu o problema de que um comando, que antes não fazia diferença, agora estava desorganizando toda a página. Então, tive que testar cada parte da página até encontrar o problema.

Também aconteceu que, ao tentar finalizar o projeto em casa, percebi que meu notebook não tinha o Git e o Node instalados. Primeiro tive que descobrir que o erro que estava acontecendo era por causa disso e, em seguida, instalar os dois para poder começar a finalizar o projeto.

No fim, foi um pouco difícil realizar tudo, pois eu havia esquecido como funcionavam algumas coisas e por causa da falta de organização no início. Mas, com um pouco de paciência e pesquisa, consegui descobrir como finalizar o trabalho. Ele não ficou perfeito, mas cumpri com o que foi pedido.
