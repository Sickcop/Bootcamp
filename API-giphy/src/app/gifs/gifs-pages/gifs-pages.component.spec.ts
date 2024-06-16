import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsPagesComponent } from './gifs-pages.component';

describe('GifsPagesComponent', () => {
  let component: GifsPagesComponent;
  let fixture: ComponentFixture<GifsPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GifsPagesComponent]
    });
    fixture = TestBed.createComponent(GifsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
