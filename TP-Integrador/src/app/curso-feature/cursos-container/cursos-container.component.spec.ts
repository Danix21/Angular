import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosContainerComponent } from './cursos-container.component';

describe('CursosContainerComponent', () => {
  let component: CursosContainerComponent;
  let fixture: ComponentFixture<CursosContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
