import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Post } from '../post.model'

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  //Parent Component
  //ส่งข้อมูลจาก post-create.component ไปที่ post-list.component
  //โดยใช้ตัวแปร postCreated เป็นตัวเก็บข้อมูลที่จะจ่งไป
  @Output() postCreated = new EventEmitter<Post>();

  //สร้างฟังชั่นก์เพิ่มโพสเมื่อกดปุ่มบันทึก
  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    //ตัวแปร post เก็บค่าที่พิมพ์เข้ามา
    const post: Post = {
      title: form.value.title,
      content: form.value.content
    };
    //เอาค่าใน post ส่งผ่านไปยัง postCreated
    this.postCreated.emit(post);
  }
}

