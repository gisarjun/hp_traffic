import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { HeaderComponent } from './header.component';

@NgModule({
  imports: [ 
    RouterModule, 
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule 
  ],
  declarations: [ HeaderComponent ],
  exports: [ HeaderComponent ]
})

export class HeaderModule {}
