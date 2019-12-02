import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
 names: string[]; //Creiamo il nostro vettore di stringhe
  constructor() {
     this.names = ['ruspa', 'autocarro', 'gru', 'escavatore','autogru','trattore','rimorchio','livellatrici','cassoni','pale'];
  }


  ngOnInit() {
  }

}
