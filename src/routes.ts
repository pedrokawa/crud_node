import { Router } from "express"
import { CreateUsersController } from "./controller/CreateUsersController";
import { GetAllUsersController } from "./controller/GetAllUsersController";

const routes = Router();

routes.post("/users", new CreateUsersController().handle);
routes.get("/users", new GetAllUsersController().handle);

export { routes };
