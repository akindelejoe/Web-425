import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGuildComponent } from './create-guild/create-guild.component'; // ✅ correct relative path

const routes: Routes = [
  { path: 'create-guild', component: CreateGuildComponent },
  // other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
