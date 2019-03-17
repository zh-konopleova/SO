export class Question {
  id?: string;
  title: string;
  description: string;
  createdAt: number;

  constructor() {
    this.createdAt = +new Date();
  }

  serialize(): any {
    return {
      title: this.title,
      description: this.description,
      createdAt: this.createdAt
    }
  }

  deserialize({ id, title, description, createdAt }: any): this {
    this.id = id;
    this.title = title;
    this.description = description;
    this.createdAt = createdAt || this.createdAt;

    return this;
  }
}
