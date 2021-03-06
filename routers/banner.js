const router = require('express').Router()
const Controller = require('../controllers/bannerController')
const {authorize} = require('../middlewares/auth')

router.post('/', Controller.create)
router.get('/', Controller.showBanner)

router.get('/:id', authorize, Controller.showById)
router.put('/:id', authorize, Controller.update)
router.delete('/:id', authorize, Controller.destroy)

module.exports = router