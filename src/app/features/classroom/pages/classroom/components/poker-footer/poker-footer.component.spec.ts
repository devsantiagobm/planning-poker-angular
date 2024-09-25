import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokerFooterComponent } from './poker-footer.component';

describe('PokerFooterComponent', () => {
  let component: PokerFooterComponent;
  let fixture: ComponentFixture<PokerFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokerFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokerFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
