import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css']
})
export class ContactComponentComponent implements OnInit {
  public deviceInfo: any;

  constructor(private deviceService: DeviceDetectorService) { }

  ngOnInit() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
  }

}
