import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './pages/accueil/accueil.component';
import { MeditationGuideeComponent } from './pages/meditation-guidee/meditation-guidee.component';
import { JournalComponent } from './pages/journal/journal.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProfilComponent } from './pages/profil/profil.component';

const routes: Routes = [{ path: '', redirectTo: 'home', pathMatch: "full" },
{ path: 'home', component: AccueilComponent },
{ path: 'guide', component: MeditationGuideeComponent },
{ path: 'journal', component: JournalComponent },
{path: 'profil', component: ProfilComponent},
{ path: '**', component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
