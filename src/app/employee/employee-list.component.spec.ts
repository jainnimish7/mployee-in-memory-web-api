import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee-list.component';
import { MatDialog } from '@angular/material/dialog';

import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

describe('EmployeeListComponent', () => {
  let fixture: ComponentFixture<EmployeeListComponent>;
  let component: EmployeeListComponent;
  beforeEach(async(() => {
    const matDialogStub = {
      open: () => ({
        componentInstance: {
        },
        afterClosed: () => ({
          subscribe: () => ({})
        })
      })
    };
    TestBed.configureTestingModule({
      imports: [
        FormsModule, ReactiveFormsModule,
        RouterTestingModule,
      ],
      declarations: [
        EmployeeListComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ],
      providers: [
        { provide: MatDialog, useValue: matDialogStub }

      ]
    }).compileComponents();
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
