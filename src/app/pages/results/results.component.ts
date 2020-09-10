import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ReposService } from 'src/app/services/repos.service';
import { User } from 'src/app/interfaces/User';
import { Repo } from 'src/app/interfaces/Repo';

import { take } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  user: User;
  repos: Repo[];
  username: string;

  loading: boolean = false;

  constructor(
    private userService: UserService,
    private reposService: ReposService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.activatedRoute.queryParams.subscribe(params => {
      this.username = params['user'];
      console.log(this.username);
      this.getUser(this.username);
    });
  }

  submit(username) {
    this.router.navigate(['/results'], { queryParams: { user: username } });
  }

  getUser(username) {
    this.username = username;
    this.loading = true;

    this.userService.getUser(username)
      .pipe(take(1))
      .subscribe((res: User) => {
        this.user = res;
        this.getReposUser();
      }, error => {
        this.user = null;
        this.loading = false;
      });
  }

  getReposUser() {
    this.reposService.getUserRepos(this.username)
      .pipe(take(1))
      .subscribe(response => {
        this.repos = this.orderByStargazers(response);
        this.loading = false;
      }, error => {
        this.repos = null;
        this.loading = false;
      });
  }

  orderByStargazers(repos) {
    return repos.sort((a, b) => (a.stargazers_count > b.stargazers_count) ? -1 : 1);
  }

}
