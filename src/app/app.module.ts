import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';
import { LatestComponent } from './latest/latest.component';
import { HttpClientModule } from '@angular/common/http';
import { SpectatorsComponent } from './spectators/spectators.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { NewsComponent } from './news/news.component';
import { HistogramComponent } from './histogram/histogram.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxEchartsModule } from 'ngx-echarts';



@NgModule({
  declarations: [
    AppComponent,
    LatestComponent,
    SpectatorsComponent,
    MainHeaderComponent,
    NewsComponent,
    HistogramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule.forRoot(),
    BrowserAnimationsModule,
    NgxEchartsModule
  ],
  providers: [{ provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' }}],
  bootstrap: [AppComponent]
})
export class AppModule { }
