import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conceptual-map-page',
  templateUrl: './conceptual-map-page.component.html',
  styleUrls: ['./conceptual-map-page.component.scss']
})
export class ConceptualMapPageComponent {

  constructor( private router:Router){
  }

  public redirecTo(url:string){
    this.router.navigate([url]);
  }

}
