import { Component, Input, OnInit } from '@angular/core';
import { TrendingService } from 'src/app/service/trending-service.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-trending-component',
  templateUrl: './trending-component.component.html',
  styleUrls: ['./trending-component.component.css']
})
export class TrendingComponentComponent implements OnInit {
  @Input() listTrending: any;
  public deviceInfo: any;

  constructor(private deviceService: DeviceDetectorService) { }

  ngOnInit() {
    this.deviceInfo = this.deviceService.getDeviceInfo();

  }

}
