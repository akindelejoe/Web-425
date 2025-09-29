import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuildListComponent } from './guild-list.component';
import { By } from '@angular/platform-browser';

describe('GuildListComponent', () => {
  let component: GuildListComponent;
  let fixture: ComponentFixture<GuildListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuildListComponent] // standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(GuildListComponent);
    component = fixture.componentInstance;
  });

  it('should show message when no guilds exist', () => {
    component.guilds = [];
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('No guilds yet.');
  });

  it('should display guild names when guilds exist', () => {
    component.guilds = [{ name: 'Fellowship of the Ring' }, { name: 'Avengers' }];
    fixture.detectChanges();
    const items = fixture.debugElement.queryAll(By.css('ul li'));
    expect(items.length).toBe(2);
    expect(items[0].nativeElement.textContent).toContain('Fellowship of the Ring');
    expect(items[1].nativeElement.textContent).toContain('Avengers');
  });
});
