import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TargetLocator, Alert } from 'selenium-webdriver';
import { User } from '../../../Model/User.class';
import { TodoService } from '../../../Service/todo.service';
import { Subscription, concat } from 'rxjs';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public isKeepSignIn: boolean = false;

  public error: number = 0;
  public todos: User[] = [];
  public subscription: Subscription;

  public usn: string ;
  // @Output('usnKey') sendUsnOnHeader = new EventEmitter<string>();

  // @input (truyền dữ liệu từ component con lên component cha)
  // -trong app.component lấy bảng CSDL, trong html [tên list]="tên biến chứa"
  //  -trong component con cần import Input từ @angular/core,
  // cú pháp @Input('tên list') tên biến :any[]=[];
  //  có biến chứa, trong html hiển thị ra thôi.
  // ---------------------------------------------
  // @output từ thằng con lên thằng cha
  // -trong thằng con, import thêm output, eventEmitter
  // tạo ra một key @output('tên Key') biến để gửi dữ liêu ra ngoài = new EvenEmitter<kiểu dữ liệu>();
  // vd: public OutputName:string;
  //     @Output('OutputName') putOnDadComponent = new EventEmitter<string>(); 
  //  bên html của component con có thể tạo một form nhập vào, nhấp button thì gửi lên.
  // Bên html của component cha (tên key)="tên hàm sử lý($event)"
  // trong hàm xử lý  this.getname=event; rồi trong html binding getname lên

  constructor(
    public routerService: Router,
    public todoService: TodoService
  ) { }

  ngOnInit() {

    //this.CheckLogin();
    //this.LoadUsers();
  }

  KeepSignIn(){
    this.isKeepSignIn = !this.isKeepSignIn;
  }

  // CheckLogin() {
  //   if (localStorage.getItem('user')) {
  //     this.routerService.navigate(['/list']);
  //   }
  // }
  // SignIn(url: string) {
  //   // this.routerService.navigate([url]) //2 cach
  //   this.routerService.navigateByUrl(url);
  // }

  loginUser(username: string, password: string) {
   
    if (username == "ncc" && password == "ncc") {
            this.routerService.navigate(['/user']);
          }          
     else if  (username == "admin" && password == "admin")
     {
       this.routerService.navigate(['/admin']);
     }  
     else {
      alert("username or password is wrong");
    }   
          // console.log(this.error);
    // lay gia tri username, password nhap vao
    // hoac dung ben html login($event)
    // e.preventDefault();
    // const username = e.target.querySelector('#username').value;
    // const password = e.target.querySelector('#password').value;

    //----------------------------------------------------------------
    // let user = {  //tao bien user kieu object chua username, password
    //   username: username,
    //   password: password
    // };
    //console.log(i.userName);
    // var dataUserName = this.todos.map(i => i.UserName);
    // var dataUserPassword = this.todos.map(x => x.Password);


    // for (const okUserName of dataUserName) {
    //   for (const okPassWord of dataUserPassword) {
    //     if (username == okUserName && password == okPassWord) {

    //       localStorage.setItem('user', JSON.stringify(user)); //localstorage la bien toan cuc de cho toan bo he thong co the goi duoc, truyen vao localstorage key,value
    //       //stringify de chuyen object-string.
    //       this.routerService.navigate(['/list']);
    //       console.log(localStorage.getItem('user'));
    //     }
    //     else {
    //       this.error = -1;
    //     }
    //   }
    // }
  }
}