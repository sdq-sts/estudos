/* ------------------------------------------------------ */
// SETUP BÁSICO
/* ------------------------------------------------------ */

// Intancia o renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#my-canvas'), // Define onde o canvas vai ser renderizado
  antialias: true                               // Ativa o antialias
})

renderer.setClearColor(0xBFFFE9)                        // Define a cor de background
renderer.setPixelRatio(window.devicePixelRatio)         // Define a taxa de pixels do canvas
renderer.setSize(window.innerWidth, window.innerHeight) // Define a largura e altura do canvas

// Instancia uma câmera
const camera = new THREE.PerspectiveCamera(
  35,                                     // Field of view => Campo de visão
  window.innerWidth / window.innerHeight, // Aspect ratio  => Aspecto
  0.1,                                    // Near          => Distância mínima de renderização
  2000                                    // Far           => Distância máxima de renderização
)

// Instancia uma cena
const scene = new THREE.Scene()

/* ------------------------------------------------------ */
// QUE HAJA LUZ
/* ------------------------------------------------------ */

const ambientLight = new THREE.AmbientLight(0xffffff /* Cor */, .5 /* Intensidade */)
scene.add(ambientLight) // Adicionando a luz ambient à cena

const pointLight = new THREE.PointLight(0xffffff /* Cor */, .5 /* Intensidade */)
scene.add(pointLight) // Adicionando um ponto de luz a cena

/* ------------------------------------------------------ */
// CRIANDO OBJETOS
/* ------------------------------------------------------ */

// Os 3 primeiros parâmetros passados representam os lados do cubo
// Mais 3 parâmentros podem ser passados e que definirão o número de faces 
// em cada lado do cubo criado
const boxGeometry = new THREE.BoxGeometry(100 /* X */, 100 /* Y */, 100 /* Z */)

// Aqui criaremos um material para o cubo, o material mais básico
// é o MeshBasicMaterial, que renderiza cores solidas apenas
// const boxMaterial = new THREE.MeshBasicMaterial( { color: 0x3299FF } ) // ==> Não reage a luz
const boxMaterial = new THREE.MeshLambertMaterial( { color: 0x3299FF } )  // ==> Reage a luz

// Agora criaremos nosso mesh (malha) passando como parâmetro
// a geometria e o material para o cubo
const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial)

// Definindo em que lugar do espaço o nosso objeto ficará
boxMesh.position.set(0, 0, -800)

/* ------------------------------------------------------ */
// ADCIONANDO OBJETOS À CENA
/* ------------------------------------------------------ */

// Por fim, adicionaremos nosso objeto à cena
scene.add(boxMesh)

/* ------------------------------------------------------ */
// ANIMANDO A CENA
/* ------------------------------------------------------ */

function render() {
  requestAnimationFrame(render)  // Chama novamente a função render

  boxMesh.rotation.y += 0.01     // Faz o objeto girar no eixo Y
  boxMesh.rotation.z += 0.01     // Faz o objeto girar no eixo Z

  renderer.render(scene, camera) // Renderiza a cena
}

render()
