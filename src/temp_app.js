const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
const userData = fs.readFileSync('src/json/users.json', 'utf8');
const users = JSON.parse(accountData);
const accountData = fs.readFileSync('src/json/accounts.json', 'utf8');
const accounts = JSON.parse(accountData);
app.get('/',(err,res)=>{
    res.render('index', {title: 'Account Summary', accounts: accounts});
});
app.get('/savings',(err,res)=>{
    res.render('account', {title: 'Savings Account', account: accounts.savings});
});
app.get('/checking',(err,res)=>{
    res.render('account', {title: 'Checking Account', account: accounts.checking});
});
app.get('/credit',(err,res)=>{
    res.render('account', {title: 'Credit Account', account: accounts.credit});
});
app.get('/profile',(err,res)=>{
    res.render('profile', {title: 'User Profile', user: users[0]});
});
app.listen(3000);


