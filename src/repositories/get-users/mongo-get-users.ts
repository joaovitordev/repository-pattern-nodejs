import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  getUsers(): Promise<User[]> {
    return [
      {
        firstName: "João",
        lastName: "Vitor",
        email: "joao@gmail.com",
        password: "123",
      },
    ];
  }
}
