# QA Tester/Engineer Exercisee - Criação de conta
## Utilizaremos para automatizar o processo o framework CypressJS
> - Utilizaremos como escrita de teste, padrão Gherkin.



### Instalação do ambiente
> - Utilizei uma VPN para obter conexão a criação de uma nova conta.
> - `npm install cypress --save-dev`
> - Criado o arquivo .gitignore para ignorar todos arquivos ou pastas desnecesssários para o nosso projeto.
> - Em seguida será necessário implementar no script do package.json `cypress open` para abertura da IDE.
> - Para executar a abertura da IDE rodamos o comando no terminal: `npm run test`


### CENARIOS

**CENARIO: Criar conta**
**DADO** que eu acesse a página da Telpark
**E** clique em `Criar conta`
**QUANDO** finalizar de preencher o formulário
**ENTAO** deverá receber um e-mail para validar o seu acesso ao site.

------------------------------------------------------------------------

**CENARIO: Não conseguir criar conta**
**DADO** que eu acesse a página da Telpar
**E** clique em `Criar conta`
**QUANDO** preencher o campo de `e-mail` sem o caracter `@`
**E** finalizar de preencher todo o formulário
**ENTAO** não deverá conseguir salvar.
 