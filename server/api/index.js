// import { Router } from 'express'
//
// import users from './users'
// import sushi from './sushi'
// import oniku from './oniku'
//
// const router = Router()
//
// // Add Routes
// router.use(users)
// router.use(sushi)
// router.use(oniku)
//
// export default router


const express = require('express');
const Router = express.Router;

const router = Router();

const users = require('./users');
const sushi = require('./sushi');
const oniku = require('./oniku');

router.use(users);
router.use(sushi);
router.use(oniku);

module.exports = router;
