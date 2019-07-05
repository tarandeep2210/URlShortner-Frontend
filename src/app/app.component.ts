import { Component } from '@angular/core';
import { NgForm } from '../../node_modules/@angular/forms';
import { UrlService } from './url.service';
import { myURL } from './url.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'URlshortner-Frontend';
  shortUrl: String;

  constructor(private service : UrlService){

  }

  onSubmit(form: NgForm){
    console.log(form.value.url);
    let url : myURL = { originalUrl : form.value.url,
    shortBaseUrl : "http://localhost:3000/api/item" }

    this.service.addURL(url).subscribe((data) => {
      console.log(data.shortUrl);
      this.shortUrl = data.shortUrl;
    });
  }
}
