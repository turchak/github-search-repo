import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css'],
  providers: [DataService]
})
export class RepoComponent implements OnInit {
  repos: GitHubRepo[];
  reponame: string;
  constructor(private dataService: DataService) { }

  ngOnInit() { }
  search() {
    this.dataService.updateRepos(this.reponame);
    this.dataService.getRepos().subscribe(repos => {
      this.repos = repos.items;
    });
  }

}
interface GitHubRepo {
  name: string;
  owner: GitHubOwner[];
  stargazers_count: number;
  open_issues: number;
  html_url: string;
}

interface GitHubOwner {
  login: string;
  avatar_url: string;
}