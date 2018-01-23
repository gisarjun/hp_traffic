/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CasehistoryComponent } from './casehistory.component';

describe('CasehistoryComponent', () => {
  let component: CasehistoryComponent;
  let fixture: ComponentFixture<CasehistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasehistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasehistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
