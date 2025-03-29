import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../../apiservice.service';

@Component({
  selector: 'app-productview',
  imports: [],
  templateUrl: './productview.component.html',
  styleUrl: './productview.component.scss'
})
export class ProductviewComponent {
product:any;
constructor(private route:ActivatedRoute,private apiservice:ApiserviceService){}
ngOnInit()
{
const productId=this.route.snapshot.paramMap.get('id');
if(productId)
{
  this.apiservice.getProductById(productId).subscribe((data: any) => {
    this.product = data;
  });
}
}
}
