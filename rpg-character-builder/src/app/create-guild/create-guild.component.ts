import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Guild } from './guild.model';

@Component({
  selector: 'app-create-guild',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-guild.component.html',
  styleUrls: ['./create-guild.component.css']
})
export class CreateGuildComponent {
  guildForm: FormGroup;
  guilds: Guild[] = [];

  types = ['Competitive', 'Casual', 'Social', 'Educational'];
  notificationOptions = ['Email', 'SMS', 'In-App'];

  constructor(private fb: FormBuilder) {
    this.guildForm = this.fb.group({
      guildName: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      notificationPreference: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
    });
  }

  get f() { return this.guildForm.controls; }

  onSubmit(): void {
    if (this.guildForm.invalid) {
      Object.values(this.guildForm.controls).forEach((c: AbstractControl) => c.markAsTouched());
      return;
    }

    const newGuild: Guild = {
      ...(this.guildForm.value as any),
      createdAt: new Date().toISOString()
    };
    this.guilds.push(newGuild);

    this.guildForm.reset({
      guildName: '',
      description: '',
      type: '',
      notificationPreference: '',
      acceptTerms: false
    });
  }

  removeGuild(index: number) {
    this.guilds.splice(index, 1);
  }
}
