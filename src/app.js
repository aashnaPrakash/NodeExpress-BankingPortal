const fs = require('fs');
const path = require('path');
const express = require('express');
const accountRoutes = require('./routes/accounts.js');
const servicesRoutes = require('./routes/services.js');
const {accounts, users, writeJSON} = require('./data');
const app = express();
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use('/account',accountRoutes);
app.use('/services',servicesRoutes);


app.get('/',(req,res)=>{
    res.render('index', {title: 'Account Summary', accounts: accounts});
});

app.get('/profile',(req,res)=>{
    res.render('profile', {title: 'User Profile', user: users[0]});
});


app.listen(3000,()=>{
    console.log('PS Project Running on port 3000!');
});


