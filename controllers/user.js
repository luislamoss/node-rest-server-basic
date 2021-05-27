const {response, request} = require('express');

const usersGet = (req, res = response) => {

    const {nombre = 'No name', page =1, limit} = req.query;

    res.json({
        msg: 'Get API - LL',
        nombre,
        page,
        limit
         });
    }

const usersPost = (req, res = response)=>{

    const {nombre, edad} = req.body;
        res.status(500).json({
            msg: 'Post API - LL',
            nombre,
            edad
        });
}

const usersPut = (req, res = response) => {
    const id = req.params.id;
    res.status(201).json({
    msg: 'Put API - LL',
    id
    });
}

const usersPatch = (req, res = response) => {
    res.json({
    msg: 'Patch API - LL'
    });
}

const usersDelete = (req, res = respons) => {
    res.json({
    msg: 'Delete API - LL'
    });
}


    module.exports ={
        usersGet,
        usersPost,
        usersPut,
        usersPatch,
        usersDelete
    }