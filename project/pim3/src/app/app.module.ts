import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BaseModule } from './modules/base/base.module';
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { AlertModule } from 'ng2-bootstrap/alert';
import { LoginComponent } from './modules/base/components/login/login.component';
import { HomeComponent } from './modules/home/components/home/home.component';
import { HeaderComponent } from './modules/home/components/header/header.component';
import { VagaComponent } from './modules/cadastro-mestre/components/vaga/vaga.component';
import { AreaLazerComponent } from './modules/cadastro-mestre/components/area-lazer/area-lazer.component';
import { FuncionarioComponent } from './modules/quadro-colaboradores/components/funcionario/funcionario.component';


@NgModule({
  declarations: [
    AppComponent
    , LoginComponent, HomeComponent, HeaderComponent, VagaComponent, AreaLazerComponent, FuncionarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BaseModule,
    Ng2BootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
