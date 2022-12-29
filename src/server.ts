import express from 'express'
import router from './Routes/routes'
const app = express()

app.use(express.json())
app.use(router)

app.listen(3030, () => {
  console.log('Server is running on port 3000')
})

export default app
