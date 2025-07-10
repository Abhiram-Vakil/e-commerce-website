import express from "express"


const router = express.Router()

router.get("/signup",(req,res)=>{
    res.status(200).json({message:"YOLO"})
})
router.get("/login",(req,res)=>{
    res.json({message:"YOLO"})
})

export default router;