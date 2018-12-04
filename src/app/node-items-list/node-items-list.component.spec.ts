import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeItemsListComponent } from './node-items-list.component';

describe('NodeItemsListComponent', () => {
  let component: NodeItemsListComponent;
  let fixture: ComponentFixture<NodeItemsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeItemsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
