export class User {
  private _id?: number;

  public constructor(private _name: string) {}

  get id(): number | undefined {
    return this._id;
  }

  set id(id: number | undefined) {
    this._id = id;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }
}
