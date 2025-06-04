import express from "express";

import { getUsers, createUser, getUser, deleteUser, updateUser, overrideData } from "../controllers/users.js";

const router = express.Router();


router.get('/', getUsers)

router.post('/', createUser)

router.get('/:id', getUser)

router.delete('/:id', deleteUser)

// patch: partial update
// put: complete override
router.patch('/:id', updateUser)

router.put('/:id', overrideData)


export default router;
