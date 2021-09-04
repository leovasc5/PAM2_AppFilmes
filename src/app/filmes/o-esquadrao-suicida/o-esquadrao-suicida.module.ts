import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OEsquadraoSuicidaPageRoutingModule } from './o-esquadrao-suicida-routing.module';

import { OEsquadraoSuicidaPage } from './o-esquadrao-suicida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OEsquadraoSuicidaPageRoutingModule
  ],
  declarations: [OEsquadraoSuicidaPage]
})
export class OEsquadraoSuicidaPageModule {}
