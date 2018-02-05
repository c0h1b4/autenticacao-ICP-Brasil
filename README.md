# Autenticação-ICP-Brasil
Instruções para autenticar um token/certificado A1/A3 no site, apresentando o e-CPF ou e-CNPJ

Instruções para os seguintes cenários:

1. **Utilizando o servidor NGINX** como autenticador para o certificado, e obtendo os dados de e-CPF e/ou e-CNPJ em aplicativos PHP ou Node.JS
2. **Utilizando o servidor Node.JS** como autenticador para o certificado através do módulo Express para autenticar o certificado e obter os dados de e-CPF e/ou e-CNPJ para utilização no Node.JS
3. **Utilizando um servidor APACHE** como autenticador para o certificado (TODO)
4. **Utilizando o API GATEWAY do AWS** no caso de aplicações serverless (AWS Lambda) (TODO)

Na pasta CA, temos o bundle completo de chaves para autenticação, obtido através do gist https://gist.github.com/skarllot/9663935

Os exemplos estão com documentação incluída nos próprios arquivos.

~~Obs1:
Tanto na opção de NGINX quanto na do NodeJS, a solicitação de certificado não funciona com o FireFox. Ele pergunta a senha do token mas não solicita o certificado do token. No Edge ele pergunta qual certificado do token será utilizado mas depois não lê o certificado. No Chrome, Internet Explorer e Opera, funcionou perfeito.~~ Com o novo bundle de certificados, agora funciona em todos os navegadores. O novo bundle foi criado através do gist do skarllot/make-icpbrasil-bundle.sh (https://gist.github.com/skarllot/9663935)

Obs2:
Os dados do CPF ou CNPJ estão na variável CN, no formato XXX:NNN, onde o XXX é o nome do titular do CPF ou razão social da empresa e o NNN é o numero do CPF ou CNPJ. Então o ideal é usar um comando split com o caracter ':' como divisor e você terá um array onde o item 0 é o nome/razão social e o item 1 é o número do cpf/cnpj. Remova os 3 primeiros caracteres do item 0, pois estes tem sempre o 'CN='