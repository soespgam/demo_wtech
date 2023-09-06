import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar-page',
  templateUrl: './navbar-page.component.html',
  styleUrls: ['./navbar-page.component.scss']
})

export class NavbarPageComponent implements OnInit {

  menuItems?:any[];

  constructor( private sideBarService:SidebarService , private router:Router){
    this.menuItems = this.sideBarService.menu;
  }


  public redirecTo(url:string){
    this.router.navigate([url]);
  }
  
  ngOnInit(): void {
  }

}
