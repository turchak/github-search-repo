import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  private reponame = ''
  private client_id = '6ecb904551086f80ecb2';
  private client_secret = '06599d1d13f81e396ae023ef9866b569563e57a8';

  constructor(private http:Http) { 
    console.log('Data service started...')
  }

  getRepos() {
    return this.http.get('https://api.github.com/search/repositories?q='+this.reponame+'+in%3Aname'+'&per_page=100'+'&client_id='+this.client_id+'&client_secret='+this.client_secret)
       .map(res => res.json());
  }
  updateRepos(reponame){
    this.reponame = reponame;
  }
}
