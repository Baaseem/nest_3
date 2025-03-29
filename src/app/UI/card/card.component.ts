import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
@Input() data=
{
  id:1,
  image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  title:"card Title",
  price:"$45.67",
  category:"mens",
  description:"card Description",
  rate:"4.5"
}
}
