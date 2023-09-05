import { NgModule ,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionFormComponent } from './components/question-form/question-form.component';
import { OptionMultipleComponent } from './pages/option-multiple/option-multiple.component';



@NgModule({
  declarations: [
    QuestionFormComponent,
    OptionMultipleComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    QuestionFormComponent,
    OptionMultipleComponent
   ],
   schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class InstroductionModule { }



