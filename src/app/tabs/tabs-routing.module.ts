import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      
      {
        path: 'noticias',
        loadChildren: () => import('../pages/noticias/noticias.module').then( m => m.NoticiasPageModule)
      },
      {
        path: 'leer',
        loadChildren: () => import('../pages/leer/leer.module').then( m => m.LeerPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      },
      {
        path: 'tab3',
        loadChildren: () => import('../pages/tab3/tab3.module').then(m => m.Tab3PageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/noticias',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
