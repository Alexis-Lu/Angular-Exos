import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css'],
})
export class InfosComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}
  id: any = '';
  details: any;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.getJson().subscribe((data) => {
      console.log(data);
      this.details = data;
      console.log(this.details);
    });
  }

  public getJson(): Observable<any> {
    return this.http.get(`./assets/data/${this.id}.json`);
  }
}
