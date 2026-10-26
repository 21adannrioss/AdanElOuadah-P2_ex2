import { Component } from '@angular/core';
import { Header } from './header/header.component';
import { Main } from './main/main.component';
import { Footer } from './footer/footer.component';

@Component({
  imports: [Header, Main, Footer],
  selector: 'app-root',
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class App {}