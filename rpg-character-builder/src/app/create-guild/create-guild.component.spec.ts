import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CreateGuildComponent } from './create-guild.component';

describe('CreateGuildComponent', () => {
  let component: CreateGuildComponent;
  let fixture: ComponentFixture<CreateGuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGuildComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateGuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have invalid form initially', () => {
    expect(component.guildForm.valid).toBeFalse();
  });

  it('should require acceptTerms to be checked', () => {
    const form = component.guildForm;
    form.patchValue({
      guildName: 'Testers',
      description: 'A test guild',
      type: 'Casual',
      notificationPreference: 'Email',
      acceptTerms: false
    });
    expect(form.valid).toBeFalse();
    form.patchValue({ acceptTerms: true });
    expect(form.valid).toBeTrue();
  });

  it('should not add guild on invalid submit', () => {
    expect(component.guilds.length).toBe(0);
    component.onSubmit();
    expect(component.guilds.length).toBe(0);
  });

  it('should add guild on valid submit', () => {
    const form = component.guildForm;
    form.patchValue({
      guildName: 'Alpha',
      description: 'First',
      type: 'Competitive',
      notificationPreference: 'SMS',
      acceptTerms: true
    });
    component.onSubmit();
    expect(component.guilds.length).toBe(1);
    expect(component.guilds[0].guildName).toBe('Alpha');
  });

  it('should render created guild in table after submit', () => {
    component.guildForm.patchValue({
      guildName: 'Bravo',
      description: 'Second',
      type: 'Casual',
      notificationPreference: 'In-App',
      acceptTerms: true
    });
    component.onSubmit();
    fixture.detectChanges();
    const cell = fixture.debugElement.query(By.css('tbody tr td'));
    expect(cell.nativeElement.textContent).toContain('Bravo');
  });
});
