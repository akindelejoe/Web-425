import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateCharacterComponent } from './create-character.component';
import { By } from '@angular/platform-browser';

describe('CreateCharacterComponent', () => {
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

  it('should not emit if form is invalid', () => {
    spyOn(component.characterCreated, 'emit');
    component.submit();
    expect(component.characterCreated.emit).not.toHaveBeenCalled();
  });

  it('should emit character when form is valid and submitted', () => {
    spyOn(component.characterCreated, 'emit');

    component.form.setValue({
      name: 'Frodo',
      clazz: 'Rogue',
      level: 5
    });

    component.submit();

    expect(component.characterCreated.emit).toHaveBeenCalledWith({
      name: 'Frodo',
      clazz: 'Rogue',
      level: 5
    });
  });

  it('should reset form after submit', () => {
    component.form.setValue({
      name: 'Aragorn',
      clazz: 'Warrior',
      level: 10
    });

    component.submit();

    expect(component.form.value).toEqual({
      name: '',
      clazz: '',
      level: 1
    });
  });
});
