import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //เพิ่มให้ใช้งานฟอร์มให้ใช้ใน html ได้
import { MatInputModule} from '@angular/material/input';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatExpansionModule} from '@angular/material/expansion';

import { AppComponent } from './app.component';
//เพิ่ม component
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { HeaderComponent } from './posts/header/header.component'
import { PostListComponent } from './posts/post-list/post-list.component';


@NgModule({
  declarations: [
    AppComponent,
    //เพิ่ม component เพื่อให้มองเห็นและทำงานได้
    PostCreateComponent,
    HeaderComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
