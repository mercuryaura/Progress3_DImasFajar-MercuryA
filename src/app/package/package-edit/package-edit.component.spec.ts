/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PackageEditComponent } from './package-edit.component';

describe('RecipeEditComponent', () => {
  let component: PackageEditComponent;
  let fixture: ComponentFixture<PackageEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
