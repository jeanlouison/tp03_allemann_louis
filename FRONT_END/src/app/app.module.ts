import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdresseComponent } from './adresse/adresse.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TelephonePipe } from './pipes/telephone';
import { RecapComponent } from './recap/recap.component';
import { ValidateDirective } from './validate.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    AdresseComponent,
    HeaderComponent,
    FooterComponent,
    TelephonePipe,
    RecapComponent,
    ValidateDirective
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
