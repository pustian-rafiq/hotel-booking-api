import express from 'express'

const router = express.Router();

//auth routes here
router.get("/", (req,res)=> {
    res.send("This is auth endpoint");
})

export default router