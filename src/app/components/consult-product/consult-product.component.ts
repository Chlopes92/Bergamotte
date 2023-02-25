import { Component } from '@angular/core';
import { Consult, CONSULTS } from 'src/app/mocks/consult.mock';

@Component({
  selector: 'app-consult-product',
  templateUrl: './consult-product.component.html',
  styleUrls: ['./consult-product.component.css']
})
export class ConsultProductComponent {
  consults: Consult[] = CONSULTS;
}
