import { Request } from 'express'
import ExternalAdviceController from 'src/external-api/ExternalAdviceController'
import { Advice } from 'src/model/Advice'

export class AdviceController {
  async getAdvice (req: Request, res: any): Promise<Advice> {
    const advice = await ExternalAdviceController.getAdvice()
    const conselho = advice.slip.advice

    return res.json({ conselho })
  }
}

export default new AdviceController()
