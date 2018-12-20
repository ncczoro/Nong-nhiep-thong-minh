import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from '../../../../../node_modules/rxjs';
import { User } from '../../../Model/User.class';
import { TodoService } from '../../../Service/todo.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public subscription: Subscription;
  public todo: User = null;

  public ID: number;
  public UserName: string;
  public Password: string;

  constructor(
    public routerService: Router,
    public todoService: TodoService) { }

  ngOnInit() 
  {
  }

  SignUp(url: string) 
    {
      // this.routerService.navigate([url]) //2 cach
      this.routerService.navigateByUrl(url);
    }

    addUser()
    {

      let todo = new User(this.ID, this.UserName, this.Password, null, null, null, null, null);
      this.subscription = this.todoService.addTodo(todo).subscribe(
        dataUpdate => {
          console.log(dataUpdate);
          alert('register successfully');
          this.routerService.navigate(['/Login']);
          //  this.todos.push(dataUpdate); //id not auto ++.
        },
        error => {
          this.todoService.handleError(error);
          alert('id is not available');
        }
      );
    }
  }

