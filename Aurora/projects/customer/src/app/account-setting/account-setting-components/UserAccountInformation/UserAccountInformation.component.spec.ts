/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserAccountInformationComponent } from './UserAccountInformation.component';

describe('UserAccountInformationComponent', () => {
  let component: UserAccountInformationComponent;
  let fixture: ComponentFixture<UserAccountInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAccountInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAccountInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
