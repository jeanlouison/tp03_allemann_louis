import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Filters } from '../filters';
import { Produit } from '../produit';
import { ShopDataService } from '../shop-data.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  catalog$: Observable<Array<Produit>>;

  filteredCatalog: Produit[] = [];

  @Input() filters: Filters = new Filters();

  constructor(private shopDataService: ShopDataService) {
    this.catalog$ = new Observable<Array<Produit>>();
  }

  ngOnInit(): void {
    this.updateCatalog();
  }

  updateCatalog() {
    this.catalog$ = this.shopDataService.getCatalogue();

    this.catalog$.toPromise().then(products => {
      this.filteredCatalog = products
        .filter(product => this.filters.gamepass ? (product.gamepass == this.filters.gamepass) : true)
        .filter(product => this.filters.price > 0 ? product.prix < this.filters.price : true);
    });
  }

  updateFilters($filters: Filters) {
    this.filters = $filters;
    this.updateCatalog();
  }

}
