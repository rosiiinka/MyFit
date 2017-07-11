const Product = require('mongoose').model('Product')

module.exports.add = (req, res) => {
  let newProduct = {
    name: req.body.name,
    calories: Number(req.body.calories)
  }

  Product.create(newProduct)
    .then(product => {
      return res.status(200).json({
        success: true,
        message: 'Product added',
        product: {
          name: req.body.name,
          calories: req.body.calories
        }
      })
    })
    .catch(err => {
      return res.status(200).json({
        success: false,
        message: err
      })
    })
}

module.exports.all = (req, res) => {
  Product.find().then(products => {
    return res.status(200).json({
      products
    })
  })
}
