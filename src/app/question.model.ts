export class Question {
  id?: string;
  title: string;
  description: string;
  createdAt: number;

  answers: string[];

  constructor() {
    this.createdAt = +new Date();
  }

  serialize(): any {
    return {
      title: this.title,
      description: this.description,
      createdAt: this.createdAt,
      answers: this.answers
    }
  }

  deserialize({ id, title, description, answers, createdAt }: any): this {
    this.id = id;
    this.title = title;
    this.description = description;
    this.answers = answers || [];
    this.createdAt = createdAt || this.createdAt;

    return this;
  }
}
