import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PageOne } from './domains/info/info.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule ({
  imports: [
    MatSlideToggleModule,
    PageOne
  ],exports:[
    PageOne
  ],
  declarations:[PageOne]
})
class AppModule {}