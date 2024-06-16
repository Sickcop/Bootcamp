import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosPagesComponent } from './resultados-pages.component';

describe('ResultadosPagesComponent', () => {
  let component: ResultadosPagesComponent;
  let fixture: ComponentFixture<ResultadosPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultadosPagesComponent]
    });
    fixture = TestBed.createComponent(ResultadosPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
