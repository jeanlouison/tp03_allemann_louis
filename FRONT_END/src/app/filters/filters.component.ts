import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Produit } from '../produit';
import { ShopDataService } from '../shop-data.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Output('filters')
  filters: {[key: string] : any} = {
    nameFilter: '',
    priceFilter: 0,
    gamepassFilter: false
  };

  nameFilter: string = '';
  priceFilter: number = 0;
  maxPrice: string = '0';
  gamepassFilter: boolean = false;

  filterForm = this.fb.group({
    nameFilter: [this.nameFilter],
    maxPriceFilter: [this.priceFilter],
    gamepassFilter: [this.gamepassFilter]
  });

  constructor(private fb: FormBuilder,
              private shopDataService: ShopDataService) { }

  ngOnInit(): void {

    // if (! Produit.prototype.hasOwnProperty()

    this.shopDataService.getMaxPrice().then(price => {
      this.maxPrice = price.toString();
      this.filterForm.get('maxPriceFilter')?.setValue(price);
    });
  }

  onSubmit() {

  }

}
