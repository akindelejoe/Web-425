import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterListComponent } from './character-list.component';
import { By } from '@angular/platform-browser';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterListComponent] // standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
  });

  it('should show message when no characters exist', () => {
    component.characters = [];
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('No characters yet.');
  });

  it('should display character rows when characters exist', () => {
    component.characters = [
      { name: 'Aragorn', clazz: 'Ranger', level: 10 },
      { name: 'Gandalf', clazz: 'Mage', level: 20 }
    ];
    fixture.detectChanges();
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(2);
    expect(rows[0].nativeElement.textContent).toContain('Aragorn');
    expect(rows[1].nativeElement.textContent).toContain('Gandalf');
  });
});
