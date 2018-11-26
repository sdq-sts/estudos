Primeiro deve-se criar uma conta no [NPM](https://www.npmjs.com/)

Depois, é necessário configurar o `package.json` com configurações padrão.

```bash
# Define o campo padrão nos arquivos de `package.json`
npm set init-author-name "Sadraque Santos"
npm set init-author-email "oi@sadraque.com.br"
npm set init-author-url "https://sadraque.com.br"
npm set init-license "MIT"

# Retorna o campo padrão na configuração do npm
npm get init-author-name
npm get init-author-email
npm get init-author-url
npm get init-license 
```

Após a configuração, basta logar o seu usuário no próprio terminal:

```bash
npm adduser
```

Agora basta inicializar o `package.json` com o comando `npm init`
