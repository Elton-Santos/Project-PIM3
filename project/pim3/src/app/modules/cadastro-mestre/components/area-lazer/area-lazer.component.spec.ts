import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaLazerComponent } from './area-lazer.component';

describe('AreaLazerComponent', () => {
  let component: AreaLazerComponent;
  let fixture: ComponentFixture<AreaLazerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaLazerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaLazerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
