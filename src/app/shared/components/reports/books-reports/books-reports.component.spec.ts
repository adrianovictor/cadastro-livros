import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksReportsComponent } from './books-reports.component';

describe('BooksReportsComponent', () => {
  let component: BooksReportsComponent;
  let fixture: ComponentFixture<BooksReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksReportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
