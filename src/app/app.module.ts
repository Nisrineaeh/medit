import { NgModule } from '@angular/core';
import { BrowserModule, HydrationFeatureKind } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { MeditationGuideeComponent } from './components/meditation-guidee/meditation-guidee.component';
import { JournalComponent } from './components/journal/journal.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AccueilComponent,
    MeditationGuideeComponent,
    JournalComponent,
    PageNotFoundComponent,
    CardComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
