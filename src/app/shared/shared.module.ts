import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MainTitleComponent } from './components/main-title/main-title.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainFormComponent } from './components/main-form/main-form.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    MainTitleComponent,
    MainFormComponent,
  ],
  exports:[
    HeaderComponent,
    MainTitleComponent,
    MainFormComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ]
})
export class SharedModule { }
