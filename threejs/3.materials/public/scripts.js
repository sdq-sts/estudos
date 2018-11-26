/* ------------------------------------------------- */
// SETUP BÁSICO
/* ------------------------------------------------- */
const renderer = new THREE.WebGLRenderer({              // Intancia o renderer
  canvas: document.querySelector('#my-canvas'),         // Define onde o canvas vai ser renderizado
  antialias: true                                       // Ativa o antialias
})

renderer.setClearColor(0xFFFFFF)                        // Define a cor de background
renderer.setPixelRatio(window.devicePixelRatio)         // Define a taxa de pixels do canvas
renderer.setSize(window.innerWidth, window.innerHeight) // Define a largura e altura do canvas

/* ------------------------------------------------- */
// CENA
/* ------------------------------------------------- */
const scene = new THREE.Scene()

/* ------------------------------------------------- */
// CÂMERA
/* ------------------------------------------------- */
const camera = new THREE.PerspectiveCamera(
  35,                                       // Field of view => Campo de visão
  window.innerWidth / window.innerHeight,   // Aspect ratio  => Proporção da tela
  0.1,                                      // Near          => Distância mínima de renderização
  2000                                      // Far           => Distância máxima de renderização
)

/* ------------------------------------------------- */
// LUZ
/* ------------------------------------------------- */

const ambientLight = new THREE.AmbientLight(0xffffff /* Cor */, .5 /* Intensidade */)
const pointLight = new THREE.PointLight(0xffffff /* Cor */, .5 /* Intensidade */)

scene.add(ambientLight)  // Adicionando a luz ambient à cena
scene.add(pointLight)    // Adicionando um ponto de luz a cena

/* ------------------------------------------------- */
// CRIANDO OBJETOS
/* ------------------------------------------------- */

// ====> Material
const material = new THREE.MeshStandardMaterial( {
  color:  0x3299FF,
  roughness: .5,
  metalness: .5
} )

// ====> Geometria
const boxGeometry = new THREE.BoxGeometry(100, 100, 100)
const sphereGeometry = new THREE.SphereGeometry(50, 20, 30)
const planeGeometry = new THREE.PlaneGeometry(10000, 10000, 100, 100)

const boxMesh = new THREE.Mesh(boxGeometry, material)
const sphereMesh = new THREE.Mesh(sphereGeometry, material)
const planeMesh = new THREE.Mesh(planeGeometry, material)

// posicionamento da caixa
boxMesh.position.set(-100, 0, -800)
boxMesh.rotation.x += .20
boxMesh.rotation.y += .65

// posicionamento da esfera
sphereMesh.position.set(100, 0, -800)
sphereMesh.rotation.x += 0
sphereMesh.rotation.y += 0

// posicionamento do plano
planeMesh.position.set(0, -90, -1800)
planeMesh.rotation.x += -1
planeMesh.rotation.y += 0

// Adicionando a cena
scene.add(boxMesh)
scene.add(sphereMesh)
scene.add(planeMesh)

/* ------------------------------------------------- */
// ANIMANDO
/* ------------------------------------------------- */

function animate() {
  requestAnimationFrame(animate)  // Chama novamente a função render

  boxMesh.rotation.x += 0.01
  boxMesh.rotation.y += 0.01

  renderer.render(scene, camera) // Adiciona o a cena e a câmera ao renderer
}

animate()
