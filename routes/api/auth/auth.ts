import { Router } from "express";
const authController = require("../../../controllers/authController");

const AppRoutes = Router();

AppRoutes.post("/register", authController.registerNewUser);

AppRoutes.post("/login", authController.loginUser);

AppRoutes.post("/refresh-token", authController.getRefToken);

// module.exports = router;
export default AppRoutes;
