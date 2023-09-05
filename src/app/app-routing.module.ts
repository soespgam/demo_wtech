import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/Home/pages/home-page/home-page.component';
import { ExplicationPageComponent } from './modules/explanation/pages/explication-page/explication-page.component';
import { ConceptualMapPageComponent } from './modules/introduction/pages/conceptual-map-page/conceptual-map-page.component';
import { OptionMultipleComponent } from './modules/introduction/pages/option-multiple/option-multiple.component';

const routes: Routes = [
  {
    path: 'Home',
    component: HomePageComponent,
    children: [{
      path: 'Explication',
      component: ExplicationPageComponent
    }, {
      path: 'conceptual_map',
      component: ConceptualMapPageComponent
    },
    {
      path: 'option_multiple',
      component: OptionMultipleComponent
    }
    ]
  },
  {
    path: 'home',
    component: HomePageComponent,
  }
  , {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
