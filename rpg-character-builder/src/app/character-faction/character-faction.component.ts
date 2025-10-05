import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character-faction',
  templateUrl: './character-faction.component.html',
  styleUrls: ['./character-faction.component.css']
})
export class CharacterFactionComponent implements OnInit {
  characterFactions: any[] = [];
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getCharacterFactions();
  }

  getCharacterFactions(): void {
    this.http.get<any[]>('http://localhost:3000/api/character-factions')
      .subscribe({
        next: (data) => {
          this.characterFactions = data;
          this.errorMessage = '';
        },
        error: (error) => {
          this.errorMessage = 'Error fetching character factions.';
          console.error('API Error:', error);
        }
      });
  }
}
