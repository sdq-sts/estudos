## Express

### Middlewares

Static files
```js
// Quando alguma requisição passar pela rota '/assets/', o middleware será chamado
app.use('/assets', express.static(__dirname + '/public'))
```

View engine
```js
// yarn add ejs

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  res.render('index', { name: 'Sadraque' })
})
// O framework express por padrão vai procurar pelos arquivos dentro da pasta 'views'
```

### Querystrings

Se uma queryString é esperada com a chave 'name'
```js
// http://127.0.0.1/?name=John
app.get('/', function(req, res) {
  res.json({ Qstr: req.query.name })
})
```

Caso se receba um JSON como valor de uma queryString ou se os dados venham de um formulário, é necessário um middleware pra 'parsear' o conteúdo. Para isso usa-se o 'body-parser'.


Cuida de dados enviados por formulários
```js
// yarn add body-parser

const bodyParser = require('body-parser')

const urlencodedParser = bodyParser.urlencoded({ extended: false })

// Passar como segundo parâmetro faz com que o middleware apenas seja chamado quando houver um post na rota '/login'
app.post('/login', urlencodedParser, function(req, res) {
  res.send('Hello, ' + req.body.username)
})
```

Cuida de dados enviados em formato JSON
```js
// yarn add body-parser

const bodyParser = require('body-parser')

const jsonParser = bodyParser.json()

// Passar como segundo parâmetro faz com que o middleware apenas seja chamado quando houver um post na rota '/login'
app.post('/jason', jsonParser, function(req, res) {
  res.send('Hello, ' + req.body.username)
})
```
