import { Router } from "express";

import { database } from "./config/database";

import { UserEntity } from "./entities/user.entity";

const router = Router();

const datasource = await database.initialize();

router.post("/auth/signin", async (request, response) => {
  const { email } = request.body;

  const user = datasource.getRepository(UserEntity);

  const data = await user.findOne({
    where: {
      email,
    },
    relations: ["profiles"],
  });

  return response.json(data);
});

export default router;
