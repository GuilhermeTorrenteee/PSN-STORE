import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent implements OnInit {

	@Input()
	gamePrice:string="R$329,99"
	@Input()
	gameType:string="Digital PS4"
  constructor() { }

  ngOnInit(): void {
  }

}
