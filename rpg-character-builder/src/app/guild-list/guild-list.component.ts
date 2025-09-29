import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guild-list',
  standalone: true,
  imports: [CommonModule],   // 🔹 needed for *ngFor and *ngIf
  templateUrl: './guild-list.component.html',
  styleUrls: ['./guild-list.component.css']
})
export class GuildListComponent {
  @Input() guilds: { name: string }[] = [];
}
