import express from 'express'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import router from './routes/index.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express();
app.set('view engine', 'ejs')
app.set('views', join(__dirname, 'views'))

app.use(router)
app.use(express.static(join(__dirname, 'public')))

app.listen(3000)
console.log('server listen in port localhost:', 3000)