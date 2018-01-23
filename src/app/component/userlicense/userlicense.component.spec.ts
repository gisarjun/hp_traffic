/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserlicenseComponent } from './userlicense.component';

describe('UserlicenseComponent', () => {
  let component: UserlicenseComponent;
  let fixture: ComponentFixture<UserlicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserlicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
