import { NgModule ,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPageComponent } from 'src/app/shared/components/menu-page/menu-page.component';
import { NavbarPageComponent } from 'src/app/shared/components/navbar-page/navbar-page.component';
import { InstroductionModule } from '../introduction/instroduction.module';




@NgModule({
  declarations: [
    MenuPageComponent,
    NavbarPageComponent,
  ],
  imports: [
    CommonModule,
    InstroductionModule
  ],exports:[
   MenuPageComponent,
   NavbarPageComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class HomeModule { }
