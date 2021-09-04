import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'cruella',
    loadChildren: () => import('./filmes/cruella/cruella.module').then( m => m.CruellaPageModule)
  },
  {
    path: 'o-esquadrao-suicida',
    loadChildren: () => import('./filmes/o-esquadrao-suicida/o-esquadrao-suicida.module').then( m => m.OEsquadraoSuicidaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
