import { Router } from 'express';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import xlsx from 'xlsx';

const router = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const parentDir = dirname(__dirname);

const workbook = xlsx.readFile(join(parentDir, 'public', 'Especies.xlsx'))
const sheet = workbook.Sheets[workbook.SheetNames[0]]
const data = xlsx.utils.sheet_to_json(sheet)
data.forEach(data => data.enlace = data.enlace.split(','))
data.forEach(data => data.nombreAlter = data.nombreAlter.split(','))

router.get("/", (req, res) => res.render('home'))

router.get("/galery", (req, res) => res.render('galery', {data}))

router.get("/galery/:birdName", (req, res) => {
    const birdName = req.params.birdName.replace('-', ' ')
    const birdData = data.find(bird => bird.especie.includes(birdName))
    res.render('birdView', { birdData, name: req.params.birdName })
})

router.get("/site-map", (req, res) => res.render('siteMap'))

export default router
