import { User } from '../../domain/entities/user';

export abstract class UserRepository {
  public abstract findAll(): Promise<User[]>;

  public abstract create(user: User): Promise<User>;

  public abstract findOne(id: number): Promise<User>;

  public abstract update(user: User): Promise<User>;

  public abstract delete(id: number): Promise<User>;
}
