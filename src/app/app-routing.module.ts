import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ProvincePageComponent } from './province-page/province-page.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'main-page'} ,
  {path: "main-page", component: MainpageComponent},
  {path: "province-page/:province", component: ProvincePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
