import {Component} from '@angular/core';
import {UniverseService} from '../services/universe.service';
import {Inhabitant} from '../domain/inhabitant';

@Component({
  selector: 'app-inhabitants',
  templateUrl: './inhabitants.component.html',
  styleUrls: ['./inhabitants.component.css']
})
export class InhabitantsComponent{
  private inhabitants: Array<Inhabitant>;

  constructor(private universeService: UniverseService) {

    universeService.observableInhabitants$
      .subscribe((newInhabitants: Array<Inhabitant>) => {
        this.inhabitants = newInhabitants;
      });

  }
}
