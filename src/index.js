import express from 'express'
import xlsx from 'xlsx'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import router from './routes/index.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

// const workbook = xlsx.readFile(__dirname, 'public', 'Especies.xlsx')
// const sheetName = workbook.SheetNames[0]
// const sheet = workbook.Sheets[sheetName]
// const data = xlsx.utils.sheet_to_json(sheet)
// console.log(data)

const app = express();
app.set('view engine', 'ejs')
app.set('views', join(__dirname, 'views'))

app.use(router)
app.use(express.static(join(__dirname, 'public')))

app.listen(3000)
console.log('server listen in port localhost:', 3000)