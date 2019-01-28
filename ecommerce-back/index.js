const { find, sampleSize, update, reject } = require('lodash')
const uuid = require('uuid/v4')
const casual = require('casual')
const express = require('express')
const app = express()

app.use(express.json())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

// config

const ITEMS_PER_PAGE = 8

// state

const state = {
  carts: {},
  products: require('./data/products.json')
}

// const cartFactory = () => ({ id: uuid(), items: [] })
const cartFactory = () => ({ id: 'test', items: [] })

// cart

const withCart = (req, res, next) => {
  req.cart = state.carts[req.params.cartid]
  next()
}

const cartRouter = express.Router()
cartRouter.post('/', (req, res) => {
  const newCart = cartFactory()
  state.carts[newCart.id] = newCart
  res.json(newCart)
})
cartRouter.get('/:cartid', withCart, (req, res) => {
  res.json(req.cart)
})
cartRouter.post('/:cartid/checkout', withCart, (req, res) => {
  console.log('CHECKOUT!', req.cart.id)
  req.cart.items = []
  res.json(req.cart)
})

// cart items

const cartItemsRouter = express.Router({ mergeParams: true })
cartItemsRouter.post('/', withCart, (req, res) => {
  const { id, quantity } = req.body
  const product = find(state.products, { id })
  const item = find(req.cart.items, { id })
  if (item) {
    item.quantity += quantity
  } else {
    req.cart.items.push({ ...product, quantity })
  }
  res.json(req.cart)
})
cartItemsRouter.put('/:itemid', withCart, (req, res) => {
  const id = req.params.itemid
  const { quantity } = req.body
  const product = find(req.cart.items, { id })
  product.quantity = quantity
  res.json(req.cart)
})
cartItemsRouter.delete('/:itemid', withCart, (req, res) => {
  const id = req.params.itemid
  update(req.cart, 'items', (items) => reject(items, { id }))
  res.json(req.cart)
})

// products

const productsRouter = express.Router()
productsRouter.get('/', (req, res) => {
  const page = Number(req.query.page || 1)
  const from = (page - 1) * ITEMS_PER_PAGE
  const to = from + ITEMS_PER_PAGE
  const results = state.products.slice(from, to)
  res.json({
    page,
    perPage: ITEMS_PER_PAGE,
    totalPages: Math.floor(state.products.length / ITEMS_PER_PAGE),
    results
  })
})
productsRouter.get('/:productid', (req, res) => {
  const id = req.params.productid
  const product = find(state.products, { id })
  res.json({
    ...product,
    description: casual.sentences(10),
    available: casual.coin_flip,
    relatedProducts: sampleSize(state.products, 4)
  })
})

// api

app.use('/products', productsRouter)
app.use('/cart', cartRouter)
app.use('/cart/:cartid/items', cartItemsRouter)

app.listen(3001)
