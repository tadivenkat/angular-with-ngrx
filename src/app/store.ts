import { Injectable } from "@angular/core";
import { Product } from "./model/product.type";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: "root",
})

export class Store {
    private initialState : Product[] = [
        { name: 'Laptop Air', price: 799, addedToCart: false },
        { name: 'Laptop Pro', price: 699, addedToCart: false },
        { name: 'Laptop Mini', price: 299, addedToCart: false }
    ];
    private currentState = this.initialState;
    private state$: BehaviorSubject<Product[]> = new BehaviorSubject(this.currentState);

    public getState() {
        this.state$ = new BehaviorSubject(this.currentState);
        return this.state$;
    }

    public dispatch(action: any) {
        this.currentState = this.reducer(this.currentState, action);
        this.state$.next(this.currentState);
        console.log(this.currentState);
    }

    public reducer(state: Product[], action: any) {
        switch (action.type) {
            case 'ADD_TO_CART':
                return state.map((product: Product, index: number) => {
                    if (index === action.payload.index) {
                        return {
                            ...product,
                            addedToCart: true
                        }
                    }
                    return product;
                })
            default:
                return state;
        }
    }
}