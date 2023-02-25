import { Component, Input } from '@angular/core';
import { Consult } from 'src/app/mocks/consult.mock';

@Component({
  selector: 'app-consult-card',
  templateUrl: './consult-card.component.html',
  styleUrls: ['./consult-card.component.css']
})
export class ConsultCardComponent {
  @Input() consult!: Consult;
}
