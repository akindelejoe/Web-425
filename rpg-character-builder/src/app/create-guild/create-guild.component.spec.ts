import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateGuildComponent } from './create-guild.component';
import { By } from '@angular/platform-browser';

describe('CreateGuildComponent', () => {
  let component: CreateGuildComponent;
  let fixture: ComponentFixture<CreateGuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGuildComponent] // standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(CreateGuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should not emit if form is invalid', () => {
    spyOn(component.guildCreated, 'emit');
    component.submit();
    expect(component.guildCreated.emit).not.toHaveBeenCalled();
  });

  it('should emit guild when form is valid and submitted', () => {
    spyOn(component.guildCreated, 'emit');

    component.form.setValue({
      name: 'Fellowship of the Ring'
    });

    component.submit();

    expect(component.guildCreated.emit).toHaveBeenCalledWith({
      name: 'Fellowship of the Ring'
    });
  });

  it('should reset form after submit', () => {
    component.form.setValue({
      name: 'Avengers'
    });

    component.submit();

    expect(component.form.value).toEqual({
      name: ''
    });
  });
});
