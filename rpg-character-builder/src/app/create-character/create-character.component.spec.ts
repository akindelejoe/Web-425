import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CreateCharacterComponent } from './create-character.component';

function setValue(el: HTMLInputElement | HTMLSelectElement, v: string) {
  el.value = v;
  el.dispatchEvent(new Event('input'));
  el.dispatchEvent(new Event('change'));
}

describe('CreateCharacterComponent (TDD)', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCharacterComponent] // standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should generate an integer ID between 1 and 1000', () => {
    for (let i = 0; i < 200; i++) {
      const id = component.generateId();
      expect(Number.isInteger(id)).toBeTrue();
      expect(id).toBeGreaterThanOrEqual(1);
      expect(id).toBeLessThanOrEqual(1000);
    }
  });

  it('should add a character with correct customization', () => {
    const nameInput: HTMLInputElement = fixture.debugElement.query(By.css('input[name="name"]')).nativeElement;
    const genderSelect: HTMLSelectElement = fixture.debugElement.query(By.css('select[name="gender"]')).nativeElement;
    const classSelect: HTMLSelectElement = fixture.debugElement.query(By.css('select[name="class"]')).nativeElement;

    setValue(nameInput, 'Aragorn');
    setValue(genderSelect, 'Male');
    setValue(classSelect, 'Warrior');
    fixture.detectChanges();

    // submit
    fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement.click();
    fixture.detectChanges();

    expect(component.characters.length).toBe(1);
    const c = component.characters[0];
    expect(c.name).toBe('Aragorn');
    expect(c.gender).toBe('Male');
    expect(c.class).toBe('Warrior');
    expect(Number.isInteger(c.id)).toBeTrue();

    // appears in DOM
    const rowText = fixture.debugElement.query(By.css('tbody tr')).nativeElement.textContent as string;
    expect(rowText).toContain('Aragorn');
    expect(rowText).toMatch(/Warrior|Mage|Rogue/);
  });

  it('should reset form fields to defaults after resetForm()', () => {
    const nameInput: HTMLInputElement = fixture.debugElement.query(By.css('input[name="name"]')).nativeElement;
    const genderSelect: HTMLSelectElement = fixture.debugElement.query(By.css('select[name="gender"]')).nativeElement;
    const classSelect: HTMLSelectElement = fixture.debugElement.query(By.css('select[name="class"]')).nativeElement;

    setValue(nameInput, 'Nyx');
    setValue(genderSelect, 'Other');
    setValue(classSelect, 'Mage');
    fixture.detectChanges();

    component.resetForm();
    fixture.detectChanges();

    expect(nameInput.value).toBe('');
    expect(genderSelect.value).toBe('Male');
    expect(classSelect.value).toBe('Warrior');
  });
});
