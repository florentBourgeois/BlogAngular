import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})




export class AppComponent {
  title = 'Angular-Blog';
  post: Post = {id: 1, title: 'hello', content: 'ceci est le premier post', loveIts: 10, createdAt: new Date()};
  post2: Post = {id: 2, title: 'hello2', content: 'post deux', loveIts: 1, createdAt: new Date('22 april 2019')};
  post3: Post = {id: 3, title: 'hello3', content: 'not loved', loveIts: -4, createdAt: new Date('1 mars 2007')};

  posts = [this.post, this.post2, this.post3];
}



export class Post {
  id: number;
  title: string;
  content: string;
  loveIts: number;
  createdAt: Date;
}

