import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpersonneComponent } from './listpersonne.component';

describe('ListpersonneComponent', () => {
  let component: ListpersonneComponent;
  let fixture: ComponentFixture<ListpersonneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListpersonneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
