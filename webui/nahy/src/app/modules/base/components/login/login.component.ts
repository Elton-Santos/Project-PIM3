import { Component, OnInit } from '@angular/core';
import { AlertModule } from 'ng2-bootstrap/alert';
import { Usuario } from '../../models/model'
import { Form, FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'b-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errTitle: string = '';
  errMsg: string = '';
  usuario: Usuario;
  formLogin: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formLogin = new FormGroup({
            username: new FormControl(),
            password: new FormControl(),
        });
  }
  login() {
    this.errMsg = 'Usuário e/ou Senha inválidos!';
    this.errTitle= 'Falha!';
  }
}
