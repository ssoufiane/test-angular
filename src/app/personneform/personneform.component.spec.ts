import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneformComponent } from './personneform.component';

describe('PersonneformComponent', () => {
  let component: PersonneformComponent;
  let fixture: ComponentFixture<PersonneformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonneformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonneformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
