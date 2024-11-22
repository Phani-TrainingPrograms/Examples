Here’s a **Shopping Cart App example in Angular** implementing **CRUD operations**. This includes creating, reading, updating, and deleting items from the shopping cart.

---

### **Features**
1. **Create**: Add new products to the cart.
2. **Read**: Display the list of products in the cart.
3. **Update**: Modify the quantity of a product.
4. **Delete**: Remove a product from the cart.

---

### **Angular Application Setup**

1. **Create a new Angular project**:
   ```bash
   ng new shopping-cart-app
   cd shopping-cart-app
   ```
2. **Generate required components and services**:
   ```bash
   ng generate component cart
   ng generate service cart
   ```

---

### **Project Structure**
```
src/
|-- app/
|   |-- cart/
|   |   |-- cart.component.html
|   |   |-- cart.component.ts
|   |-- cart.service.ts
|-- app.component.html
|-- app.module.ts
```

---

### **Cart Service (cart.service.ts)**

```typescript
import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Product[] = [];

  constructor() {}

  // Create: Add a product to the cart
  addProduct(product: Product) {
    const existingProduct = this.cart.find((p) => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += product.quantity;
    } else {
      this.cart.push(product);
    }
  }

  // Read: Get all products in the cart
  getProducts(): Product[] {
    return this.cart;
  }

  // Update: Update the quantity of a product
  updateProductQuantity(id: number, quantity: number) {
    const product = this.cart.find((p) => p.id === id);
    if (product) {
      product.quantity = quantity;
    }
  }

  // Delete: Remove a product from the cart
  removeProduct(id: number) {
    this.cart = this.cart.filter((p) => p.id !== id);
  }
}
```

---

### **Cart Component**

#### **HTML (cart.component.html)**
```html
<div class="cart-container">
  <h1>Shopping Cart</h1>

  <!-- Add Product Form -->
  <form (ngSubmit)="addProduct()">
    <input
      type="text"
      placeholder="Product Name"
      [(ngModel)]="newProduct.name"
      name="name"
      required
    />
    <input
      type="number"
      placeholder="Price"
      [(ngModel)]="newProduct.price"
      name="price"
      required
    />
    <input
      type="number"
      placeholder="Quantity"
      [(ngModel)]="newProduct.quantity"
      name="quantity"
      required
    />
    <button type="submit">Add Product</button>
  </form>

  <!-- Cart Products List -->
  <ul>
    <li *ngFor="let product of cart">
      <span>{{ product.name }} ({{ product.price | currency }})</span>
      <input
        type="number"
        [(ngModel)]="product.quantity"
        (change)="updateQuantity(product.id, product.quantity)"
      />
      <button (click)="removeProduct(product.id)">Remove</button>
    </li>
  </ul>

  <!-- Cart Total -->
  <h3>Total: {{ calculateTotal() | currency }}</h3>
</div>
```

#### **TypeScript (cart.component.ts)**
```typescript
import { Component } from '@angular/core';
import { CartService, Product } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  newProduct: Product = { id: 0, name: '', price: 0, quantity: 1 };
  cart: Product[] = [];

  constructor(private cartService: CartService) {
    this.loadCart();
  }

  // Load products from the service
  loadCart() {
    this.cart = this.cartService.getProducts();
  }

  // Add a new product
  addProduct() {
    const product = { ...this.newProduct, id: Date.now() }; // Unique ID
    this.cartService.addProduct(product);
    this.newProduct = { id: 0, name: '', price: 0, quantity: 1 }; // Reset form
    this.loadCart();
  }

  // Update product quantity
  updateQuantity(id: number, quantity: number) {
    if (quantity <= 0) {
      this.removeProduct(id);
    } else {
      this.cartService.updateProductQuantity(id, quantity);
    }
  }

  // Remove a product
  removeProduct(id: number) {
    this.cartService.removeProduct(id);
    this.loadCart();
  }

  // Calculate total price
  calculateTotal(): number {
    return this.cart.reduce((total, product) => total + product.price * product.quantity, 0);
  }
}
```

---

### **App Module (app.module.ts)**

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';

@NgModule({
  declarations: [AppComponent, CartComponent],
  imports: [BrowserModule, FormsModule],
  providers: [CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

---

### **App Component (app.component.html)**

```html
<app-cart></app-cart>
```

---

### **Styles (cart.component.css)**
```css
.cart-container {
  max-width: 600px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

form {
  margin-bottom: 20px;
}

form input {
  margin-right: 10px;
  padding: 5px;
}

form button {
  padding: 5px 10px;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

ul li input {
  width: 50px;
}

ul li button {
  padding: 5px 10px;
}
```

---

### **Running the Application**
1. Start the Angular development server:
   ```bash
   ng serve
   ```
2. Open the app in your browser at `http://localhost:4200`.

---

This application demonstrates basic CRUD operations in a shopping cart. It can be extended to include features like:
- Saving cart data to a backend.
- Handling user authentication.
- Applying discounts and taxes. Let me know if you'd like to add these!
