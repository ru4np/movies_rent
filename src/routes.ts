import { Router } from "express";
import { CreateUser } from "./controllers/CreateUser";
import { GetUsers } from "./controllers/GetUsers";
import { CreateMovieRent } from "./controllers/CreateMovieRent";
import { CreateMovie } from "./controllers/CreateMovie";

const router = Router();

router.post("/registerUser", CreateUser)
router.get("/registeredUsers", GetUsers)
router.post("/registerMovieRent", CreateMovieRent)
router.post("/registerMovie", CreateMovie)
export { router }