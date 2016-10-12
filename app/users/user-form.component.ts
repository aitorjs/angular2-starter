import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
    selector: 'user-form',
    styles:  [`
      form {
        padding: 10px;
        background: #ECF0F1;
        border-radius: 3px;
        margin-botom: 10px;
      }
      `
    ],
    template: `
      <form #form="ngForm" (ngSubmit)="onSubmit()" *ngIf="active">

        {{ form.valid }}

        <div class="form-group" [ngClass]="{ 'has-error': name.invalid && name.touched }">
          <input type="text" class="form-control" name="name" placeholder="name"
            required [(ngModel)]="newUser.name" #name="ngModel">
        
          <span class="help-block" *ngIf="name.invalid && name.touched">Name is required.</span>
        </div>

         <div class="form-group" [ngClass]="{ 'has-error': username.invalid && username.touched }">
          <input type="text" class="form-control" name="username" placeholder="username"
            required [(ngModel)]="newUser.username" #username="ngModel">

          <span class="help-block" *ngIf="username.invalid && username.touched">Username is required.</span>
        </div>

        <button type="submit" class="btn btn-lg btn-block btn-primary" [disabled]="form.invalid">
          Create User
        </button>

      </form>
    `
})

export class UserFormComponent {
  @Output() userCreated = new EventEmitter();
  newUser: User = new User();
  active: boolean = true;

  onSubmit() {
    // show the event that user was created
    this.userCreated.emit({ user: this.newUser });
    console.log(this.newUser);

    this.newUser = new User();
    this.active = false;
    setTimeout(() => this.active = true, 0)
  }
}
