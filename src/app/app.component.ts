import { Component } from '@angular/core';
import { ProductAndCategory } from './Models/ProductAndCategory';
import { ProductAndCategoryService } from './Service/product-and-category.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MongoDb';
  productList:any=[];
  updatedata:any;
  pro:ProductAndCategory=
  {
      id:'',
      ProductName:'',
      ProductAmount:0,
      ProductReview:'',
      CategoryId:0,
      CategoryName:'',
      CategoryQuantity:0
  }
  currentData:ProductAndCategory= 
  {
    id:'',
    ProductName:'',
    ProductAmount:0,
    ProductReview:'',
    CategoryId:0,
    CategoryName:'',
    CategoryQuantity:0
  }
  GetProducts()
  {
    this.service.GetPosts().subscribe(response=>{
      this.productList=response; 
      console.log(response); 
    })
  }
  AddProducts()
  {
    this.service.AddPosts(this.pro).subscribe(response=>{
      this.GetProducts(); 
    })
  }

  DeleteProduct(id:any)
  {
    this.service.DeletePosts(id).subscribe(response=>{
      this.GetProducts(); 
    })
  }

  UpdateProducts()
  {
    debugger;
    this.service.UpdatePosts(this.currentData).subscribe(response=>{
      this.GetProducts();
    })
  }

  getdata(data:any)
  {
    debugger;
    this.service.GetPostsById(data.id).subscribe(response=>{
      debugger;
      console.log(response);
      this.updatedata=response;
      this.currentData=this.updatedata; 
    })
  }
  constructor(private service:ProductAndCategoryService){}
  ngOnInit()
  {
    this.GetProducts(); 
  }
}
