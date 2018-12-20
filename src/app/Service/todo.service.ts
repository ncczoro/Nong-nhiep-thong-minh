import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// HttpClient chính là một service nên bổ bà constructor để use.
import { Observable } from "rxjs";
import { HttpHeaders } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import {environment} from '../../environments/environment'

import {User} from '../Model/User.class';
import { Emp } from '../Model/Emp.class';
import { Contact } from '../Model/Contact.class';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public API: string = 'http://localhost:59886/user';
  public APIEmp:string ='http://localhost:59886/emp';
  public APIContact:string ='http://localhost:59886/contact';

  constructor( public http: HttpClient  
  ) { }
// =============================================== User ===============================================

  getAPI(): Observable<User[]> //getAPI trả về 1 kiểu Observable, Observable trả về danh sách các giá trị được hứng bởi model.
  {
    return this.http.get<User[]> (this.API)
     // trả về kiểu dữ liệu observable
  }

  addTodo(todo : User): Observable<User>
  {
    return this.http.post<User> (`${this.API}/create`, todo);
  }

  updateTodo(todo: User): Observable<User>
  {
    return this.http.put<User>(`${this.API}/edit`, todo );  //${todo.id}
  }

  deleteTodo(id:number): Observable<User>
  {
    return this.http.delete<User>(`${this.API}/delete?ID=${id}`); 
  }
//========================================== Employees ==================================================

getEmp(): Observable<Emp[]>    //getAPI trả về 1 kiểu Observable, Observable trả về danh sách các giá trị được hứng bởi model.
{
  return this.http.get<Emp[]> (this.APIEmp)
   
}

addEmp(emp : Emp): Observable<Emp>
{
  return this.http.post<Emp>(`${this.APIEmp}/create`, emp);
}

updateEmp(emp : Emp): Observable<Emp>
{
  return this.http.put<Emp>(`${this.APIEmp}/edit`, emp );  //${todo.id}
}

deleteEmp(id:number): Observable<Emp>
{
  return this.http.delete<Emp>(`${this.APIEmp}/delete?id=${id}`); 
}

//=========================================== Contact ================================================

getContact(): Observable<Contact[]> //getAPI trả về 1 kiểu Observable, Observable trả về danh sách các giá trị được hứng bởi model.
{
  return this.http.get<Contact[]> (this.APIContact);
   // trả về kiểu dữ liệu observable
}

getContactID(id:number): Observable<Contact[]> 
{
  return this.http.get<Contact[]> (`${this.APIContact}/?id=${id}`);
   // trả về kiểu dữ liệu observable
}

addContact(contact : Contact): Observable<Contact>
{
  return this.http.post<Contact>(`${this.APIContact}/create`, contact);
}

updateContact(contact : Contact): Observable<Contact>
{
  return this.http.put<Contact>(`${this.APIContact}/edit`, contact );  //${todo.id}
}

deleteContact(id:number): Observable<Contact>
{
  return this.http.delete<Contact>(`${this.APIContact}/delete?id=${id}`); 
}

//================================================= Error ================================================

 handleError(err)
 {
  if(err.error instanceof Error)
  {
    console.log(`Client-side Error : ${err.error.message}`);
  }else
  {
    console.log(`Serve-side Error : ${err.status} - ${err.error}`);
  }
 }
}
 