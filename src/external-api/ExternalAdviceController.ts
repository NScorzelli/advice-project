import axios from 'axios'
import { Advice } from '../model/advice'

export class ExternalAdviceController {
  async getAdvice (): Promise<Advice> {
    const advice = await axios.get('https://api.adviceslip.com/advice')

    return advice.data
  }
}

export default new ExternalAdviceController()
