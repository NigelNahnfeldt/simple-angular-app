import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    alert(
      this.checkoutForm.value.name +
        ' your order has been submitted and will be shipped to ' +
        this.checkoutForm.value.address +
        '!'
    );
    this.checkoutForm.reset();
    this.router.navigateByUrl('/');
  }
}
