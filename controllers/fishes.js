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

function create(req, res) {
  Fish.create(req.body)
  .then(fish => res.json(fish))
  .catch(err => res.json(err))
}

function deleteFish(req, res) {
  Fish.findByIdAndDelete(req.params.id)
  .then(fish => res.json(fish))
  .catch(err => res.json(err))
}

function update(req, res) {
  Fish.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(fish => res.json(fish))
  .catch(err => res.json(err))
}

function show(req, res) {
  Fish.findById(req.params.id)
  .then(fish => res.json(fish))
  .catch(err => res.json(err))
}


export {
  index,
  create,
  update,
  deleteFish as delete,
  show,
}