import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  //Child Component
  /* posts = [
    {title: 'First Post', content: 'This is the first post\'s content'},
    {title: 'Second Post', content: 'This is the Second post\'s content'},
    {title: 'Third Post', content: 'This is the Third post\'s content'}
  ]; */
  //รับค่าตัวแปรมาจาก post-create.component ส่งต่อให้กับตัวแปร posts
  //ตัวแปร posts เก็บค่าแบบอาร์เรย์
  @Input() posts = [];
}

