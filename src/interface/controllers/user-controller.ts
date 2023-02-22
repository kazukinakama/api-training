import { UserUsecase } from '../../application/usecases/user-usecase';
import { User } from '../../domain/entities/user';
import { UserRepository } from '../repositories/user-repository';
import { UserRepositoryImpl } from '../repositories/user-repository-impl';
import { UserRequest } from '../type';
import { IUserController } from './controller';

export class UserController implements IUserController {
  private readonly userRepository: UserRepository;

  public constructor() {
    this.userRepository = new UserRepositoryImpl();
  }

  public async findAll(): Promise<User[]> {
    const result = new UserUsecase(this.userRepository).findAll();
    return result;
  }

  public async create(requestBody: UserRequest): Promise<User> {
    const result = new UserUsecase(this.userRepository).create(requestBody);
    return result;
  }

  public async findOne(id: number): Promise<User> {
    const result = new UserUsecase(this.userRepository).findOne(id);
    return result;
  }

  public async update(id: number, requestBody: UserRequest): Promise<User> {
    const result = new UserUsecase(this.userRepository).update(id, requestBody);
    return result;
  }

  public async delete(id: number): Promise<User> {
    const result = new UserUsecase(this.userRepository).delete(id);
    return result;
  }
}
