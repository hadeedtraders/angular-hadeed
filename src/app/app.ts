import { Component, signal } from '@angular/core';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Landing } from './landing/landing';
import { About } from './about/about';
import { Services } from './services/services';
import { Contact } from './contact/contact';
import { Products } from './products/products';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Landing, About, Services, Contact, Products],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('hadeedtraders');
}
