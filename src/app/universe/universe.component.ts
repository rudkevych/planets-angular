import {Component} from '@angular/core';

@Component({
  selector: 'app-universe',
  templateUrl: './universe.component.html',
  styleUrls: ['./universe.component.css']
})
export class UniverseComponent {
  planetExist = false;

  isPlanetExist($event) {
    this.planetExist = $event;
  }
}
