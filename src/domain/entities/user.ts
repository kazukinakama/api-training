export class User {
  public id?: number;
  public name = '';

  public static findAll(): User[] {
    return [{ id: 1, name: 'root' }];
  }

  public static create(user: User): User {
    return user;
  }

  public static findOne(id: number): User {
    return { id: id, name: 'root' };
  }

  public static update(user: User): User {
    return user;
  }

  public static delete(id: number): User {
    return { id: id, name: 'root' };
  }
}
