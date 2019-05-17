import { Component } from '@angular/core';
import {Post} from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})





export class AppComponent {
  title = 'Angular-Blog';
  post: Post = new Post(1, 'hello', 'ceci est le premier post', 10);
  post2: Post = new Post(1, 'hello2', 'post deux', 0);
  post3: Post = new Post(3, 'hello3', 'not loved', -4);

  posts: Post[] = [];

  ngOnInit(){
    this.post2.setDate(new Date('22 april 2019'));
    this.post3.setDate((new Date('10 may 2012')))

    this.posts.push(this.post);
    this.posts.push(this.post2);
    this.posts.push(this.post3);
  }
}




