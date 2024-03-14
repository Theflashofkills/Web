import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AC1SeguroComponent } from './ac1-seguro.component';

describe('AC1SeguroComponent', () => {
  let component: AC1SeguroComponent;
  let fixture: ComponentFixture<AC1SeguroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AC1SeguroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AC1SeguroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
