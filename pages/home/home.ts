import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl
} from "@angular/platform-browser";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  value: number;
  str="";
  constructor(private sanitizer: DomSanitizer) {}

  public getSantizeUrl() {
    let val = 0;
    val = 1100 + 11* this.value
    this.str ="stroke-dashoffset: "+val.toString()+"px; transition: stroke-dashoffset 1s ease-out 0s";
    return this.sanitizer.bypassSecurityTrustStyle(this.str);
  }
}
