import { Router } from 'express'
import * as fishesCtrl from '../controllers/fishes.js'
const router = Router()

router.get('/', fishesCtrl.index)

router.post('/', fishesCtrl.create)

router.put('/:id', fishesCtrl.update)

router.delete('/:id', fishesCtrl.delete)

router.get('/:id', fishesCtrl.show)

export {
  router
}
