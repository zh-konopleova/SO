export class Question {
  id?: string;
  title: string;
  description: string;
  createdAt: number;
  status: string;

  answers: string[];

  constructor() {
    this.createdAt = +new Date();
    this.status = 'initial';
  }

  serialize(): any {
    return {
      title: this.title,
      description: this.description,
      createdAt: this.createdAt,
      answers: this.answers,
      status: this.status
    }
  }

  deserialize({ id, title, description, answers, createdAt, status }: any): this {
    this.id = id;
    this.title = title;
    this.description = description;
    this.answers = answers || [];
    this.createdAt = createdAt || this.createdAt;
    this.status = status || 'initial';

    return this;
  }
}
