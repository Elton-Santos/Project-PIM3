import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VagaComponent } from './components/vaga/vaga.component';
import { AreaLazerComponent } from './components/area-lazer/area-lazer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VagaComponent, AreaLazerComponent]
})
export class CadastroMestreModule { }
