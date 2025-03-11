import express from "express";

const router = express.Router()

router.post('/', (req, res) => {
    res.status(200).jsm({messge: 'Route is working'})
})

export default router