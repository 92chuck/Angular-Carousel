import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from './carousel/carousel.module';

@NgModule({
  declarations: [AppComponent, CarouselComponent],
  imports: [BrowserModule, CarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
