import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css'],
  providers: [DataService]
})
export class RepoComponent implements OnInit {
  repos:any;
  reponame:any;
  constructor(private dataService:DataService) { }

  ngOnInit() {
    // this.dataService.getRepos().subscribe((repos) => {
    //   this.repos = repos.items;
    // });  
  }
  search() {
    this.dataService.updateRepos(this.reponame);
    this.dataService.getRepos().subscribe(repos => {
    this.repos = repos.items;
    });
  }
}
