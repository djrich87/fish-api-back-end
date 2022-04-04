import { Fish } from '../models/fish.js'


function index (req, res) {
  Fish.find({})
  .populate('owner')
  .then(fishes => {
    res.json(fishes)
  })
  .catch(err => {
    res.json(err)
  })
}

function create(req, res) {
  req.body.owner = req.user.profile
  Fish.create(req.body)
  .then(fish => {
    fish.populate('owner')
    .then(populatedFish => {
      res.json(populatedFish)
    })
  })
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