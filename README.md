# Autenticação-ICP-Brasil
Instruções para autenticar um token/certificado A1/A3 no site, apresentando o e-CPF ou e-CNPJ

Instruções para os seguintes cenários:

1. Utilizando o servidor NGINX como autenticador para o certificado, e obtendo os dados de e-CPF e/ou e-CNPJ em aplicativos PHP ou Node.JS
2. Utilizando o servidor Node.JS como autenticador para o certificado através do módulo Express para autenticar o certificado e obter os dados de e-CPF e/ou e-CNPJ para utilização no Node.JS

Estou incluíndo também os certificados da hierarquia que contemplam as versões V5 (para certificados emitidos após 10/01/2017) e V2 (para certificados emitidos até 09/01/2017).

Os exemplos estão com documentação incluída nos próprios arquivos.

Obs1:
Tanto na opção de NGINX quanto na do NodeJS, a solicitação de certificado não funciona com o FireFox. Ele pergunta a senha do token mas não solicita o certificado do token. No Edge ele pergunta qual certificado do token será utilizado mas depois não lê o certificado. No Chrome, Internet Explorer e Opera, funcionou perfeito.

Obs2:
Os dados do CPF ou CNPJ estão na variável CN, no formato XXX:NNN, onde o XXX é o nome do titular do CPF ou razão social da empresa e o NNN é o numero do CPF ou CNPJ. Então o ideal é usar um comando split com o caracter ':' como divisor e você terá um array onde o item 0 é o nome/razão social e o item 1 é o número do cpf/cnpj.