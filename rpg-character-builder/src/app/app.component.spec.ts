import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent] // standalone root
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should add a new character when onCharacterCreated is called', () => {
    component.onCharacterCreated({ name: 'Legolas', clazz: 'Archer', level: 15 });
    expect(component.characters.length).toBe(1);
    expect(component.characters[0].name).toBe('Legolas');
  });

  it('should add a new guild when onGuildCreated is called', () => {
    component.onGuildCreated({ name: 'Justice League' });
    expect(component.guilds.length).toBe(1);
    expect(component.guilds[0].name).toBe('Justice League');
  });
});
