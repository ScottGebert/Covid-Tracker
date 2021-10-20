import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider';
import { ProvincePageComponent } from './province-page/province-page.component';
import { FormBuilder  } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    HeaderComponent,
    ProvincePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDividerModule,
    MatCheckboxModule,
    MatGridListModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
