import { ExploreContainerComponentModule } from '../../componentes/explore-container/explore-container.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeerPageRoutingModule } from './leer-routing.module';

import { LeerPage } from './leer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeerPageRoutingModule,
    ExploreContainerComponentModule
  ],
  declarations: [LeerPage]
})
export class LeerPageModule {}
