export class Post {
  id: number;
  title: string;
  content: string;
  loveIts: number;
  createdAt: Date;

  constructor(id: number, title: string, content: string, loveIst: number) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.loveIts = loveIst;
    this.createdAt = new Date();
  }

  setDate(d: Date) {
    this.createdAt = d;
  }
}
