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
  userName: string;
  password: string;
  formLogin: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formLogin = new FormGroup({
      userName: new FormControl(),
      password: new FormControl()
    });
  }
  login() {

    let login = this.formLogin.value
    let userName: typeof login.userName = login.userName;
    let password: typeof login.password = login.password;

    if (userName == "davi.piala@gmail.com") {
      alert("teste");
    }
    else {
      this.errMsg = 'Usuário e/ou Senha inválidos!';
      this.errTitle = 'Falha!';
    }
  }
}
