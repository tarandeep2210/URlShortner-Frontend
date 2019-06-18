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

  constructor(private service : UrlService){

  }

  onSubmit(form: NgForm){
    console.log(form.value.url);
    let url : myURL = { url : form.value.url}
    this.service.addURL(url).subscribe(() => {
      console.log(url);
    });
  }
}
