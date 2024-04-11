import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  userName = '';
  userPwd = '';

  constructor(public http: HttpClient, public alertC: AlertController) {}

  ngOnInit() {}

  login() {
    let url = 'https://mock.apifox.com/m1/4302352-3944954-default/login';
    let params = `userName=${this.userName}&password=${this.userPwd}`;

    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };

    this.http.post(url, params, options).subscribe((res: any) => {
      console.log(res);

      let code = res.code;

      if (code == 200) {
        this.alertC
          .create({
            header: '恭喜',
            message: '登录成功',
            buttons: ['确定'],
          })
          .then((res) => res.present());
      } else {
        this.alertC
          .create({
            header: '错误',
            message: '您的输入信息有误，登录失败',
            buttons: ['确定'],
          })
          .then((res) => res.present());
      }
    });
  }
}
