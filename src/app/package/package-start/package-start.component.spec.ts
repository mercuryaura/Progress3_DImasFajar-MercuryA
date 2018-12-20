/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PackageStartComponent } from './package-start.component';

describe('PackageStartComponent', () => {
  let component: PackageStartComponent;
  let fixture: ComponentFixture<PackageStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
