const express = require("express");
const path = require("path");
const cloudinary = require("cloudinary").v2;

const controlador = {
    index: async (req, res) => {
        res.render('home');
    },
};

module.exports = controlador;
