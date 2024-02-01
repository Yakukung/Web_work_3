import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActordetailComponent } from './actordetail.component';

describe('ActordetailComponent', () => {
  let component: ActordetailComponent;
  let fixture: ComponentFixture<ActordetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActordetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActordetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
