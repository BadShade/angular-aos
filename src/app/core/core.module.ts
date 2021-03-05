import {NgModule, Optional, SkipSelf} from '@angular/core';
import {PublicModule} from '../public/public.module';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [MainMenuComponent, PageNotFoundComponent],
  exports: [
    MainMenuComponent
  ],
  imports: [
    SharedModule,
    PublicModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded.');
    }
  }
}
