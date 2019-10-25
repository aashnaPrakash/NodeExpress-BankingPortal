const express = require('express');
const router = express.Router();
const {accounts} = require('../data.js');

router.get('/savings',(req,res)=>{
    res.render('account', {title: 'Savings Account', account: accounts.savings});
});
router.get('/checking',(req,res)=>{
    res.render('account', {title: 'Checking Account', account: accounts.checking});
});
router.get('/credit',(req,res)=>{
    res.render('account', {title: 'Credit Account', account: accounts.credit});
});

module.exports = router;