import { User } from '../../domain/entities/user';
import { UserRepository } from '../../interface/repositories/user-repository';
import { UserRequest } from '../../interface/type';
import { IUserUsecase } from './usecase';

export class UserUsecase implements IUserUsecase {
  public constructor(private readonly userRepository: UserRepository) {}

  public async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  public async create(requestBody: UserRequest): Promise<User> {
    const user = new User();
    user.name = requestBody.name;
    return this.userRepository.create(user);
  }

  public async findOne(id: number): Promise<User> {
    return this.userRepository.findOne(id);
  }

  public async update(id: number, requestBody: UserRequest): Promise<User> {
    const user = new User();
    user.id = id;
    user.name = requestBody.name;
    return this.userRepository.update(user);
  }

  public async delete(id: number): Promise<User> {
    return this.userRepository.delete(id);
  }
}
