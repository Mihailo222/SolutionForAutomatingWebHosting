import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,


  ],
  imports: [
    CommonModule,
 

    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,

    MatButtonModule,
    FlexLayoutModule,
    RouterModule,
    FormsModule
 



  ], exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  

  ],
})
export class SharedModule { }
