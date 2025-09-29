import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-guild',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-guild.component.html',
  styleUrls: ['./create-guild.component.css']
})
export class CreateGuildComponent {
  form: FormGroup;

  @Output() guildCreated = new EventEmitter<{ name: string }>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required]
    });
  }

  get f() { return this.form.controls; }  

  submit() {
    if (this.form.invalid) {
      Object.values(this.form.controls).forEach(c => c.markAsTouched());
      return;
    }
    this.guildCreated.emit(this.form.value);   // emit to parent
    this.form.reset();
  }
}
