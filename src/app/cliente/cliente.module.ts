import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { MaterialUiModule } from '../core/material/material.ui.module';
import { ClienteComponent } from './cliente/cliente.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ClienteComponent,
    ClienteListComponent
  ],
  imports: [
    CommonModule,
    MaterialUiModule,
  ]
})
export class ClienteModule { }
