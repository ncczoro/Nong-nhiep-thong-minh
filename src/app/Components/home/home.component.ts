
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from '../../Service/todo.service';
import { Subscription, concat } from 'rxjs';
import { User } from '../../Model/User.class';
import { isNgTemplate } from '@angular/compiler';
import { Route, Router } from '@angular/router';
import { Emp } from '../../Model/Emp.class';
import { Contact } from '../../Model/Contact.class';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  // public subscription: Subscription;

  public isShowMenu: boolean = true;

  public isShowMain: boolean = false;
  public isShowDieuKhien: boolean = false;
  public isShowThietLap: boolean = false;
  public isShowBaoCao: boolean = false;
  public isShowLichSu: boolean = false;
  // public todosContact: Contact[] = [];


  constructor(
    // public todoService: TodoService,
    // public routerService: Router

  ) { }
  ngOnInit() {
    // this.loadData();
    // this.loadContact();
  }

  ShowMenu() {
    this.isShowMenu = !this.isShowMenu;
  }

  ShowMain() {
    this.isShowMain = true;
    this.isShowBaoCao = false;
    this.isShowDieuKhien = false;
    this.isShowLichSu = false;
    this.isShowThietLap = false;
  }
  ShowDieuKhien() {
    this.isShowMain = false;
    this.isShowBaoCao = false;
    this.isShowDieuKhien = true;
    this.isShowLichSu = false;
    this.isShowThietLap = false;
  }
  ShowThietLap() {
    this.isShowMain = false;
    this.isShowBaoCao = false;
    this.isShowDieuKhien = false;
    this.isShowLichSu = false;
    this.isShowThietLap = true;
  }
  ShowBaoCao() {
    this.isShowMain = false;
    this.isShowBaoCao = true;
    this.isShowDieuKhien = false;
    this.isShowLichSu = false;
    this.isShowThietLap = false;
  }
  ShowLichSu() {
    this.isShowMain = false;
    this.isShowBaoCao = false;
    this.isShowDieuKhien = false;
    this.isShowLichSu = true;
    this.isShowThietLap = false;
  }



  // logout() {
  //   if (localStorage.getItem('user')) {
  //     localStorage.removeItem('user');
  //     this.routerService.navigate(['/Login']);
  //   }
  //   console.log(localStorage);
  // }


  //nếu không hủy subscription trước khi hủy component thì nó sẽ luôn lắng nghe->làm load chậm
  ngOnDestroy() {
    // if (this.subscription) {
    //   this.subscription.unsubscribe();
    // }
  }
}
