import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlepathComponent } from './articlepath.component';

describe('ArticlepathComponent', () => {
  let component: ArticlepathComponent;
  let fixture: ComponentFixture<ArticlepathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticlepathComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlepathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
