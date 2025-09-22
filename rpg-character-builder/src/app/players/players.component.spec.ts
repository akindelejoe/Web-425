import { TestBed } from '@angular/core/testing';
import { PlayersComponent } from './players.component';
import { provideRouter, Routes } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

describe('PlayersComponent', () => {
  it('creates the component', async () => {
    await TestBed.configureTestingModule({ imports: [PlayersComponent] }).compileComponents();
    const fixture = TestBed.createComponent(PlayersComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders 10 player cards', async () => {
    await TestBed.configureTestingModule({ imports: [PlayersComponent] }).compileComponents();
    const fixture = TestBed.createComponent(PlayersComponent);
    fixture.detectChanges();
    const cards = fixture.nativeElement.querySelectorAll('.player-card');
    expect(cards.length).toBe(10);
  });

  it('route /players displays PlayersComponent', async () => {
    const routes: Routes = [{ path: 'players', component: PlayersComponent }];
    await TestBed.configureTestingModule({
      imports: [PlayersComponent],
      providers: [provideRouter(routes)],
    }).compileComponents();

    const harness = await RouterTestingHarness.create();
    const comp = await harness.navigateByUrl('/players', PlayersComponent);
    expect(comp).toBeTruthy();
  });
});
