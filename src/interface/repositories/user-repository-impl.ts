import { User } from '../../domain/entities/user';
import { UserRepository } from './user-repository';

export class UserRepositoryImpl extends UserRepository {
  public async findAll(): Promise<User[]> {
    // TODO: DBから取得
    const user = new User('root');
    user.id = 1;
    return [user];
  }

  public async create(user: User): Promise<User> {
    // TODO: DBで作成
    return user;
  }

  public async findOne(id: number): Promise<User> {
    // TODO: DBから取得
    const user = new User('root');
    user.id = id;
    return user;
  }

  public async update(user: User): Promise<User> {
    // TODO: DBで更新
    return user;
  }

  public async delete(id: number): Promise<User> {
    // TODO: DBで削除
    const user = new User('root');
    user.id = id;
    return user;
  }
}
