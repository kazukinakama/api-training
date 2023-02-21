import { User } from '../../domain/entities/user';
import { UserRequest } from '../type';

export interface IUserController {
  findAll (): Promise<User[]>
  create (requestBody: UserRequest): Promise<User>
  findOne (id: number): Promise<User>
  update (id: number, requestBody: UserRequest): Promise<User>
  delete (id: number): Promise<User>
}
