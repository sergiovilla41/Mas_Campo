import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsecticidasComponent } from './insecticidas.component';

describe('InsecticidasComponent', () => {
  let component: InsecticidasComponent;
  let fixture: ComponentFixture<InsecticidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsecticidasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsecticidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
