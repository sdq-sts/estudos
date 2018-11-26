/* ------------------------------------------------- */
// SETUP BÁSICO
/* ------------------------------------------------- */

const renderer = new THREE.WebGLRenderer({              // Intancia o renderer
  canvas: document.querySelector('#my-canvas'),         // Define onde o canvas vai ser renderizado
  antialias: true                                       // Ativa o antialias
})

renderer.setClearColor(0xBFFFE9)                        // Define a cor de background
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
  window.innerWidth / window.innerHeight,   // Aspect ratio  => Aspecto
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

// THREE.ParametricGeometry()
const paraFn = function(u, v) {
  let x = -100 + 200 * u
  let y = 0
  let z = (Math.sin(u * Math.PI) + Math.sin(v * Math.PI)) * -60

  return new THREE.Vector3(x, y, z)
}

const geometry = new THREE.ParametricGeometry(paraFn, 10, 10)

const material = new THREE.MeshLambertMaterial( { color: 0x3299FF } )
const mesh = new THREE.Mesh(geometry, material)

mesh.position.set(0, 0, -800)

scene.add(mesh)

/* ------------------------------------------------- */
// ANIMANDO A CENA
/* ------------------------------------------------- */

function animate() {
  requestAnimationFrame(animate)  // Chama novamente a função render

  mesh.rotation.y += 0.01
  mesh.rotation.x += 0.01

  renderer.render(scene, camera) // Adiciona o a cena e a câmera ao renderer
}

animate()
