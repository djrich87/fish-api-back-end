import { Fish } from '../models/fish.js'

function index (req, res) {
  Fish.find({})
  .then(fishes => {
    res.json(fishes)
  })
  .catch(err => {
    res.json(err)
  })
}

export {
  index,
}