const express = require("express");
const router = express.Router();
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const usersController = require("../controllers/usersController");

//Rutas

router.get("/", usersController.index);

module.exports = router;