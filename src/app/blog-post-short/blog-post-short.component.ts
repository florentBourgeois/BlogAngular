import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../app.component';


@Component({
  selector: 'app-blog-post-short',
  templateUrl: './blog-post-short.component.html',
  styleUrls: ['./blog-post-short.component.scss']
})
export class BlogPostShortComponent implements OnInit {

  @Input() post: Post;


  constructor() { }

  ngOnInit() {
  }

  onLike() {
    this.post.loveIts++;
  }

  onDislike() {
    this.post.loveIts--;
  }

}
