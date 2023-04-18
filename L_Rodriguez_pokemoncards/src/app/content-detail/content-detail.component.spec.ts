import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDetailComponent } from './content-detail.component';

describe('ContentDetailComponent', () => {
  let component: ContentDetailComponent;
  let fixture: ComponentFixture<ContentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
