export class Writer {
  public id: number;
  public name: string;
  public profilePictureUrl: string;

  constructor(id: number, name: string, ppUrl: string) {
    this.id = id;
    this.name = name;
    this.profilePictureUrl = ppUrl;
  }
}
