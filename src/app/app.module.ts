import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ROUTES } from './app.routes';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { PrangersComponent } from './componentes/prangers/prangers.component';
import { RangerComponent } from './componentes/ranger/ranger.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { NoImagePipe } from './pipe/noimage.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    PrangersComponent,
    RangerComponent,
    NavbarComponent,
    NoImagePipe
  ],
  imports: [
    BrowserModule,
    ROUTES,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
