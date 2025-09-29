import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-list',
  standalone: true,                    
  imports: [CommonModule],  
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {
  @Input() characters: { name: string; clazz: string; level: number }[] = [];
}
