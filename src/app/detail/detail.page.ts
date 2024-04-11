import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  res!: Result;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    let lid = this.route.snapshot.params.lid;

    let url =
      'https://mock.apifox.com/m1/4302352-3944954-default/detail?lid=' + lid;

    this.http.get(url).subscribe((res: any) => {
      console.log(res);

      this.res = res;
    });
  }
}

interface Result {
  details: ResultDetail;
  family: any;
}

interface ResultDetail {
  category: string;
  lid: string;
  lname: string;
  price: string;
  picList: picInfo[];
  title: string;
  subtitle: string;
}

interface picInfo {
  picURL: string;
}
