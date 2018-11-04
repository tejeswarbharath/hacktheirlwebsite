import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  ngOnInit() {
  }
  public safeURL: SafeResourceUrl;
  constructor(private _sanitizer: DomSanitizer) { 
  this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/hmNVdjiDHzg');
  }
}