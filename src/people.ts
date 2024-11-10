import { faker } from "@faker-js/faker";
import { Request, Response } from "express"

export default function peopleListPost(req: Request, res: Response) {
  
  type peopleResponse = {
    id: number,
    name: string,
    email?: string,
  }[]

  const response: peopleResponse = [];

  for (let i = 0; i < 30; i++) {
    response.push({
      id: faker.number.int(100),
      name: faker.person.fullName(),
      email: faker.internet.email(),
    });
  }

  res.status(200).json(response);
}
