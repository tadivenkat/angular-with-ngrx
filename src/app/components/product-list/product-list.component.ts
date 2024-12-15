import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.type';
import { Store } from '../../store';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  public products$ : BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor(private readonly store$: Store) {}
  ngOnInit() {
    this.products$ = this.store$.getState();
  }

  addToCart(index: number) {
    const ADD_TO_CART = (index: number) => {
      return {
        type: 'ADD_TO_CART',
        payload: {index}
      }
    }
    this.store$.dispatch(ADD_TO_CART(index));
  }
}

