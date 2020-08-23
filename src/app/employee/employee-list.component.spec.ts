import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee-list.component';
import { MatDialog } from '@angular/material/dialog';

import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedService } from '../services/shared.service';

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
    const sharedServiceStub = {

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
        { provide: MatDialog, useValue: matDialogStub },
        { provide: SharedService, useValue: sharedServiceStub }

      ]
    }).compileComponents();
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
