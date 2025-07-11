
import express from "express"
import { deleteUser, getUser, postUser } from "../controllers/User.controller.js";

const router = express.Router()

router.get('/',getUser)
router.post('/',postUser)
router.delete('/:id',deleteUser)

export default router;