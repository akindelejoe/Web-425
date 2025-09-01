import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Gender = 'Male' | 'Female' | 'Other';
type Class  = 'Warrior' | 'Mage'  | 'Rogue';

interface Player {
  name: string;
  gender: Gender;
  class: Class;
  faction: string;
  startingLocation: string;
  funFact: string;
}

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="players">
      <h1>Players</h1>
      <div class="grid">
        <div class="player-card" *ngFor="let p of players">
          <h3>{{ p.name }}</h3>
          <p><strong>Gender:</strong> {{ p.gender }}</p>
          <p><strong>Class:</strong> {{ p.class }}</p>
          <p><strong>Faction:</strong> {{ p.faction }}</p>
          <p><strong>Start:</strong> {{ p.startingLocation }}</p>
          <p class="muted">{{ p.funFact }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .players { padding: 16px; }
    .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
    .player-card { border: 1px solid #e5e7eb; border-radius: 12px; padding: 12px; }
    .muted { opacity: 0.8; font-style: italic; }
    @media (max-width: 900px) { .grid { grid-template-columns: 1fr 1fr; } }
    @media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }
  `]
})
export class PlayersComponent {
  players: Player[] = [
    { name: 'Thorn', gender: 'Male', class: 'Warrior', faction: 'The Iron Brotherhood', startingLocation: 'Ironhold', funFact: 'Once single-handedly defeated a dragon.' },
    { name: 'Lyra', gender: 'Female', class: 'Mage', faction: 'Circle of Embers', startingLocation: 'Ashenreach', funFact: 'Can read two grimoires at once.' },
    { name: 'Nyx', gender: 'Other', class: 'Rogue', faction: 'Silent Veil', startingLocation: 'Nightport', funFact: 'Never leaves footprints in sand.' },
    { name: 'Eldon', gender: 'Male', class: 'Mage', faction: 'Verdant Order', startingLocation: 'Greenbarrow', funFact: 'Talks to trees (and they answer).' },
    { name: 'Kira', gender: 'Female', class: 'Rogue', faction: 'Silver Knives', startingLocation: 'Harborfall', funFact: 'Steals only to return it later.' },
    { name: 'Bram', gender: 'Male', class: 'Warrior', faction: 'Stoneguard', startingLocation: 'Frostwatch', funFact: 'Collects enemy banners.' },
    { name: 'Seris', gender: 'Female', class: 'Mage', faction: 'Starlit Conclave', startingLocation: 'Skystead', funFact: 'Charts constellations by memory.' },
    { name: 'Orin', gender: 'Male', class: 'Rogue', faction: 'Raven Court', startingLocation: 'Blackfeather', funFact: 'Speaks 12 dialects.' },
    { name: 'Maeve', gender: 'Female', class: 'Warrior', faction: 'Crimson Vow', startingLocation: 'Redcrest', funFact: 'Broke a tower shield in half (with a kick).' },
    { name: 'Voss', gender: 'Other', class: 'Mage', faction: 'Azure College', startingLocation: 'Bluewater', funFact: 'Boils tea with a snap.' }
  ];
}
