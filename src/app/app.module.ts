import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SocialmediaiconsComponent } from './components/socialmediaicons/socialmediaicons.component';
import { ProductComponent } from './components/product/product.component';
import { ProductContainerComponent } from './components/product-container/product-container.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { InfoSectionHomeComponent } from './components/info-section-home/info-section-home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomepageComponent,
    SocialmediaiconsComponent,
    ProductComponent,
    ProductContainerComponent,
    SliderComponent,
    FooterComponent,
    InfoSectionHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
