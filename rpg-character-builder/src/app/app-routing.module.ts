import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGuildComponent } from './create-guild/create-guild.component'; 
const routes: Routes = [
  { path: 'create-guild', component: CreateGuildComponent },
  { path: 'character-faction', component: CharacterFactionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
