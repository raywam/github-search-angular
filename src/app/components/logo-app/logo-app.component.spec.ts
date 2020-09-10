import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { LogoAppComponent } from './logo-app.component';

describe('LogoAppComponent', () => {
  let component: LogoAppComponent;
  let fixture: ComponentFixture<LogoAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogoAppComponent],
      imports: [RouterModule.forRoot([])]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
