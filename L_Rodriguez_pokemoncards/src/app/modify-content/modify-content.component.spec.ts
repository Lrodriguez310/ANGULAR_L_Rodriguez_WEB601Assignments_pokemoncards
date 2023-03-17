import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyContentComponent } from './modify-content.component';

describe('ModifyContentComponent', () => {
  let component: ModifyContentComponent;
  let fixture: ComponentFixture<ModifyContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
