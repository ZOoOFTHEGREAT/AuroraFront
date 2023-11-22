/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UseraddressesComponent } from './useraddresses.component';

describe('UseraddressesComponent', () => {
  let component: UseraddressesComponent;
  let fixture: ComponentFixture<UseraddressesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseraddressesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseraddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
