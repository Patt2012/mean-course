import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  //กำหนดค่าตัวแปร
  enteredContent = '';
  enteredTitle = '';
  //Parent Component
  //ส่งข้อมูลจาก post-create.component ไปที่ post-list.component
  //โดยใช้ตัวแปร postCreated เป็นตัวเก็บข้อมูลที่จะจ่งไป
  @Output() postCreated = new EventEmitter();

  //สร้างฟังชั่นก์เพิ่มโพสเมื่อกดปุ่มบันทึก
  onAddPost() {
    //ตัวแปร post เก็บค่าที่พิมพ์เข้ามา
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
    //เอาค่าใน post ส่งผ่านไปยัง postCreated
    this.postCreated.emit(post);
  }
}

