import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './components/accueil/accueil.component';
import { MeditationGuideeComponent } from './components/meditation-guidee/meditation-guidee.component';
import { JournalComponent } from './components/journal/journal.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [{path:'', redirectTo:'home', pathMatch: "full"},
                        { path: 'home', component: AccueilComponent },
                        { path: 'guide', component: MeditationGuideeComponent },
                        { path: 'journal', component: JournalComponent },
                        { path: '**', component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
