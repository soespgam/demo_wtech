import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [{
    titulo: 'Introduccion',
    submenu: [
      { titulo: 'Actividad 1', url: '/conceptual_map' },
      { titulo: 'Actividad 2', url: '/option_multiple' }
    ]
  }, {
    titulo: 'Explicacion',
    submenu: [
      { titulo: 'Explicacion 1', url: '/explication' }]
  }]
}
