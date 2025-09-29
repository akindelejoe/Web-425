import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { CreateCharacterComponent } from './create-character/create-character.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CreateGuildComponent } from './create-guild/create-guild.component';
import { GuildListComponent } from './guild-list/guild-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CreateCharacterComponent,
    CharacterListComponent,
    CreateGuildComponent,
    GuildListComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isAuth = false;
  email = '';

  characters: { name: string; clazz: string; level: number }[] = [];
  guilds: { name: string }[] = [];

  constructor(private cookies: CookieService) {}

  ngOnInit(): void {
    const session = this.cookies.get('session_user');
    if (session) {
      this.isAuth = true;
      this.email = session;
    }
  }

  signout(): void {
    this.cookies.delete('session_user', '/');
    this.isAuth = false;
    this.email = '';
  }

  onCharacterCreated(c: { name: string; clazz: string; level: number }) {
    this.characters.push(c);
  }

  onGuildCreated(g: { name: string }) {
    this.guilds.push(g);
  }
}
