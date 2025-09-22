import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent {
  form: FormGroup;
  characters: Array<{ name: string; clazz: string; level: number }> = [];

  classes = ['Warrior', 'Mage', 'Rogue', 'Cleric'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      clazz: ['', Validators.required],
      level: [1, [Validators.required, Validators.min(1)]],
    });
  }

  get f() { return this.form.controls; }

  submit() {
    if (this.form.invalid) {
      Object.values(this.form.controls)
        .forEach((c: AbstractControl) => c.markAsTouched());
      return;
    }
    this.characters.push(this.form.value);
    this.form.reset({ name: '', clazz: '', level: 1 });
  }

  remove(i: number) { this.characters.splice(i, 1); }
}
