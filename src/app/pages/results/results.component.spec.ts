import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsComponent } from './results.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResultsComponent],
      imports: [ComponentsModule, RouterModule.forRoot([]), HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('return correctly the stargazers order desc', () => {
    const noSortMock = [
      { id: 0, stargazers_count: 2 },
      { id: 1, stargazers_count: 1 },
      { id: 2, stargazers_count: 3 },
    ];

    const sortMock = [
      { id: 2, stargazers_count: 3 },
      { id: 0, stargazers_count: 2 },
      { id: 1, stargazers_count: 1 },
    ]

    expect(component.orderByStargazers(noSortMock)).toEqual(sortMock);
  });
});
