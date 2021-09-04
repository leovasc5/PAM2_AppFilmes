import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OEsquadraoSuicidaPage } from './o-esquadrao-suicida.page';

const routes: Routes = [
  {
    path: '',
    component: OEsquadraoSuicidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OEsquadraoSuicidaPageRoutingModule {}
