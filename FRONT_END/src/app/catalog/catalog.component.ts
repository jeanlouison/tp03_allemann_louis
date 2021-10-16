import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../produit';
import { ShopDataService } from '../shop-data.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  catalogue$: Observable<Array<Produit>>;

  constructor(private shopDataService: ShopDataService) {
    this.catalogue$ = new Observable<Array<Produit>>();
  }

  ngOnInit(): void {
    this.catalogue$ = this.shopDataService.getCatalogue();
  }

}
