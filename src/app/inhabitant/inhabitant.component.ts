import {Component, Input} from '@angular/core';
import {Inhabitant} from '../domain/inhabitant';

@Component({
  selector: 'app-inhabitant',
  templateUrl: './inhabitant.component.html',
  styleUrls: ['./inhabitant.component.css']
})
export class InhabitantComponent {
  @Input() inhabitantItem: Inhabitant;
}
