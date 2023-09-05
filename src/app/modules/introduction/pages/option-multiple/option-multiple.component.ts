import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-option-multiple',
  templateUrl: './option-multiple.component.html',
  styleUrls: ['./option-multiple.component.scss']
})
export class OptionMultipleComponent {

  constructor( private router:Router){
  }


  public redirecTo(url:string){
    this.router.navigate([url]);
  }
  
}
