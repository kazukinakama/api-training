import { User } from '../../domain/entities/user';
import { UserRepository } from './user-repository';

export class UserRepositoryImpl extends UserRepository {
  public async findAll(): Promise<User[]> {
    return User.findAll();
  }

  public async create(user: User): Promise<User> {
    return User.create(user);
  }

  public async findOne(id: number): Promise<User> {
    return User.findOne(id);
  }

  public async update(user: User): Promise<User> {
    return User.update(user);
  }

  public async delete(id: number): Promise<User> {
    return User.delete(id);
  }
}
