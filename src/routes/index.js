import { Router } from 'express'

const router = Router()

router.get("/", (req, res) => res.render('home'))

// router.get("/home", (req, res) => res.render('/home'))

router.get("/galery", (req, res) => res.render('galery'))

router.get("/galery/:birdName", (req, res) => res.render('galery'))

router.get("/site-map", (req, res) => res.render('siteMap'))

export default router
