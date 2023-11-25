import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerarqrPageRoutingModule } from './generarqr-routing.module';
import { SharedModule } from '../shared/shared.module';
import { GenerarqrPage } from './generarqr.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenerarqrPageRoutingModule,
    SharedModule
  ],
  declarations: [GenerarqrPage]
})
export class GenerarqrPageModule {}
