import { Component, Output, EventEmitter } from '@angular/core';
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

  classes = ['Warrior', 'Mage', 'Rogue', 'Cleric'];

  @Output() characterCreated = new EventEmitter<{ name: string; clazz: string; level: number }>();

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
      Object.values(this.form.controls).forEach((c: AbstractControl) => c.markAsTouched());
      return;
    }
    this.characterCreated.emit(this.form.value); // 🔹 Parent receives character
    this.form.reset({ name: '', clazz: '', level: 1 });
  }
}
