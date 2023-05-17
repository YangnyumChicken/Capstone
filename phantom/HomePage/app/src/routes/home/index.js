"use strict";

const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl');

router.get('/', ctrl.output.home);

router.get('/login', ctrl.output.login);
router.post("/login", ctrl.process.login);

router.get('/register',ctrl.output.register);
router.post('/register',ctrl.process.register);

router.get('/MainHomePage',ctrl.output.main);

router.get('/notice',ctrl.output.notice);

router.get('/ranking',ctrl.output.ranking);

router.get('/challenge',ctrl.output.challenge);

router.get('/q1',ctrl.output.q1);

router.get('/q2',ctrl.output.q2);
module.exports = router;