const express = require("express");
const router = express.Router();
const cache = require("../config/cache");

const homeController = require("../controllers/homePage");
const aboutController = require("../controllers/aboutPage");
const contactController = require("../controllers/contactPage");
const sendFormController = require("../controllers/sendContactForm");
const thankYouController = require("../controllers/thankYouPage");
const projectsController = require("../controllers/projectsPage");
const registerController = require("../controllers/registerPage");
const loginController = require("../controllers/loginPage");
const searchResultController = require("../controllers/searchResultPage");

router.get("/", cache(2), homeController);
router.post("/send/form", sendFormController);
router.get("/thankYou",cache(2), thankYouController);
router.get("/about", cache(2), aboutController);
router.get("/contact", cache(2), contactController);
router.get("/projects", cache(2), projectsController);
router.get("/register", cache(2), registerController);
router.get("/login", cache(2), loginController);
router.get("/search", cache(2), searchResultController);

module.exports = router;