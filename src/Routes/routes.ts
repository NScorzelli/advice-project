import express from 'express'
import AdviceController from 'src/controllers/adviceController'
const router = express()

router.get('/advice', AdviceController.getAdvice)

export default router
