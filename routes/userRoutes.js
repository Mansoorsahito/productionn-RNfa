const express = require("express");
const {
  registerController,
  loginController,
  updateUserController,
  requireSignIn,
} = require("../controllers/userController");

//////Route Object
const router = express.Router();

////////////////
//REGISTER || POST ///////////////////////
router.post("/register", registerController);
////////////////////////////////////////////

//LOGIN /////////////////////////
// LOGIN || POST
router.post("/login", loginController);
/////////////////////////
//UPDATE || POST
//UPDATE || PUT
router.put("/update-user", requireSignIn, updateUserController);
//////Export
module.exports = router;
