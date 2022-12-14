import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    try {
      // user_id : string | string[] error;
      if (Array.isArray(user_id)) {
        throw new Error("send only 1 id");
      }
      const users = this.listAllUsersUseCase.execute({ user_id });

      return response.json(users);
    } catch (err) {
      return response.status(400).json({ error: `${err}` });
    }
  }
}

export { ListAllUsersController };
