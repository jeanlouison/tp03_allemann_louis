import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ShopComponent } from './shop/shop.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TelephonePipe } from './pipes/telephone';
import { RecapComponent } from './recap/recap.component';
import { ValidateDirective } from './validate.directive';
import { CatalogComponent } from './catalog/catalog.component';
import { FiltersComponent } from './filters/filters.component';
import { HttpClientModule } from '@angular/common/http';
import { PrixPipe } from './prix.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeaderComponent,
    FooterComponent,
    ShopComponent,
    CatalogComponent,
    FiltersComponent,
    TelephonePipe,
    RecapComponent,
    ValidateDirective,
    PrixPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'compte', component: FormComponent},
      {path: 'boutique', component: ShopComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
