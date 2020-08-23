import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomSelectComponent } from './custom-select.component';

describe('CustomSelectComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CustomSelectComponent
      ],
    }).compileComponents();
  }));

  it('should create the component', () => {
    const fixture = TestBed.createComponent(CustomSelectComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
