import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateschemaComponent } from './generateschema.component';

describe('GenerateschemaComponent', () => {
  let component: GenerateschemaComponent;
  let fixture: ComponentFixture<GenerateschemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateschemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateschemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
