import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

type Gender = 'Male' | 'Female' | 'Other';
type PClass = 'Warrior' | 'Mage' | 'Rogue';

export interface Character { id: number; name: string; gender: Gender; class: PClass; }
export interface CharacterForm { name: string; gender: Gender; class: PClass; }

@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent {
  @ViewChild('createForm') createForm?: NgForm;

  formModel: CharacterForm = { name: '', gender: 'Male', class: 'Warrior' };
  characters: Character[] = [];

  generateId(): number {
    // integer in [1, 1000]
    return Math.floor(Math.random() * 1000) + 1;
  }

  onSubmit(): void {
    if (!this.createForm?.valid) return;

    const c: Character = {
      id: this.generateId(),
      name: this.formModel.name.trim(),
      gender: this.formModel.gender,
      class: this.formModel.class
    };

    // add to list
    this.characters = [...this.characters, c];

    // reset form to defaults
    this.resetForm();
  }

  resetForm(): void {
    this.formModel = { name: '', gender: 'Male', class: 'Warrior' };
    this.createForm?.resetForm(this.formModel);
  }

  // used by *ngFor for better DOM perf
  trackById(_: number, item: Character): number {
    return item.id;
  }
}
