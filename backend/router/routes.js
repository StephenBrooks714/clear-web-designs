const express = require("express");
const router = express.Router();
const cache = require("../config/cache");

const homeController = require("../controllers/homePage");
const aboutController = require("../controllers/aboutPage");
const contactController = require("../controllers/contactPage");
const sendFormController = require("../controllers/sendContactForm");
const thankYouController = require("../controllers/thankYouPage");
const newProjectController = require("../controllers/newProjectPage");
const storeProjectController = require("../controllers/storeProjectAction");
const deleteProjectController = require("../controllers/deleteProjectAction");
const projectsController = require("../controllers/projectsPage");
const registerController = require("../controllers/registerPage");
const storeUserController = require("../controllers/storeUserAction");
const loginController = require("../controllers/loginPage");
const loginUserController = require("../controllers/loginUser");
const logoutController = require("../controllers/logoutUser");
const searchResultController = require("../controllers/searchResultPage");

// middleware
const auth = require("../middleware/ifAuthorized");

router.get("/", cache(2), homeController);
router.post("/send/form", sendFormController);
router.get("/thankYou",cache(2), thankYouController);
router.get("/about", cache(2), aboutController);
router.get("/contact", cache(2), contactController);
router.get("/newProject", auth, cache(2), newProjectController);
router.post("/store/project", storeProjectController);
router.get("/delete/project", deleteProjectController);
router.get("/projects", cache(2), projectsController);
router.get("/accounts", cache(2), registerController);
router.post("/store/user", storeUserController);
router.get("/login", loginController);
router.post("/login/user", loginUserController)
router.get("/logout", logoutController);
router.get("/search", cache(2), searchResultController);

module.exports = router;