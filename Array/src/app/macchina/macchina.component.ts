import { Component, OnInit, Input } from '@angular/core'; //se non aggiunge input nelle graffe ce lo metto io (input messo sotto dopo la @)

@Component({
  selector: 'app-macchina',
  templateUrl: './macchina.component.html',
  styleUrls: ['./macchina.component.css']
})
export class MacchinaComponent implements OnInit {

  @Input() buba : string ; //profe
  sadico:string[];
  constructor() {
this.sadico=["frusta","manette"];
  }
  ngOnInit() {
  }

}
