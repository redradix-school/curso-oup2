// infrastructure
require('../infra/init')
const config = rootRequire('config')
const db = rootRequire('infra/db')
// repos
const CartsRepository = rootRequire('repos/carts')
const ItemsRepository = rootRequire('repos/items')
const ProductsRepository = rootRequire('repos/products')
// services
const cartsService = rootRequire('services/carts')
const productsService = rootRequire('services/products')
const errorsService = rootRequire('services/errors')
// express
const setupServer = rootRequire('api')

// setup infra

const infra = {
  db: db(config)
}

// setup repos

const repos = {}
Object.assign(repos, {
  cartsRepository: new CartsRepository(infra, repos),
  itemsRepository: new ItemsRepository(infra, repos),
  productsRepository: new ProductsRepository(infra, repos)
})

// setup services

const services = {}
Object.assign(services, {
  cartsService: cartsService(infra, repos, services),
  productsService: productsService(infra, repos, services),
  errorsService: errorsService(infra, repos, services)
})

// setup express

const app = setupServer(config, services)

console.log('* Ready!')
