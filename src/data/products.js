export const PRODUCTS = [
  { id: 'p1', title: 'Caja Switch – Mario', price: 14.99, category: 'switch', stock: 15, img: '/img/mario-cube.jpg', description: 'Cubo para organizar con logo de Mario.' },
  { id: 'p2', title: 'Caja Switch – Zelda', price: 14.99, category: 'switch', stock: 18, img: '/img/zelda-cube.jpg', description: 'Cubo para organizar cartuchos con logo de Zelda.' },  
  { id: 'p3', title: 'Organizador Pokeball',      price: 19.99, category: 'switch', stock: 10, img: '/img/pokeball-case.jpg', description: 'Organizador de cartuchos con forma de Pokeball.' },
  { id: 'p4', title: 'Soporte Joy-Con',    price: 9.99, category: 'accesorios', stock: 25, img: '/img/joycon-grip.jpg', description: 'Soporte ergonómico para Joycons.' },  
  { id: 'p5', title: 'CartKeeper — Backup de Cartuchos', price: 59.99, category: 'almacenamiento', stock: 40, img: '/img/MIG-Flash-Cartridge.jpg', description: 'Gestion y respaldo de cartuchos fisicos' },

]

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export async function fetchProducts(categoryId){
  await delay(500)
  return categoryId ? PRODUCTS.filter(p => p.category === categoryId) : PRODUCTS
}

export async function fetchProductById(id){
  await delay(500);
  const item = PRODUCTS.find(p => p.id === id);
  if(!item) throw new Error('Producto no encontrado');
  return item
}

export const CATEGORIES = Array.from(new Set(PRODUCTS.map(p => p.category)))
