import { Component, OnInit } from '@angular/core';
import { OptionMultipleService } from 'src/app/shared/services/optionMultiple.service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {
  Items?: any[];
  anwser?: any = "";
  anwser2?: any = "";
  anwser3?: any = "";

  constructor(private OptionMultipleService: OptionMultipleService) {
    this.Items = this.OptionMultipleService.questions;
  }

  public validateRes() {
    this.anwser = <HTMLInputElement>document.getElementById('ques1')
    let chek = this.anwser.checked;

    this.anwser2 = <HTMLInputElement>document.getElementById('ques2')
    let chek2 = this.anwser.checked;

    this.anwser3 = <HTMLInputElement>document.getElementById('ques3')
    let chek3 = this.anwser.checked;

    if (chek) {
      if (this.anwser.value == "4") {
        alert("correcto")
      } else { alert("incorrecto") }
    } else if (chek2) {
      if (this.anwser.value == "4") {
        alert("correcto")
      } else { alert("incorrecto") }
    } else if (chek3) {
      if (this.anwser.value == "4") {
        alert("correcto")
      } else { alert("incorrecto") }

    }
  }

  ngOnInit(): void {
  }

}