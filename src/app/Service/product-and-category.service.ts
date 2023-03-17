import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ProductAndCategory} from '../Models/ProductAndCategory'


@Injectable({
  providedIn: 'root'
})
export class ProductAndCategoryService {

  constructor(private http:HttpClient) { }
  GetPosts():Observable<any>
  {
    return this.http.get<any>("https://localhost:7186/api/ProductAndCategory");  
  }
  GetPostsById(id:string)
  {
    debugger;
    return this.http.get<any>("https://localhost:7186/api/ProductAndCategory/"+id);  
  }
  GetPostsByName(CategoryName:any)
  {
    return this.http.get<any>("https://localhost:7186/api/ProductAndCategory"+"/"+CategoryName);  
  }
  AddPosts(data:any):Observable<any>
  {
    return this.http.post<any>("https://localhost:7186/api/ProductAndCategory",data); 
  }
  UpdatePosts(data:ProductAndCategory):Observable<any>
  {
    debugger;
    return this.http.put<any>("https://localhost:7186/api/ProductAndCategory/"+ data.id,data);  
  }
  DeletePosts(id:any):Observable<any>
  {
    return this.http.delete<any>("https://localhost:7186/api/ProductAndCategory"+"/"+id); 
  }
}
