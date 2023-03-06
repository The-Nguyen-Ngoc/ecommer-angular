import { Component, OnInit } from '@angular/core';
import { TrendingService } from 'src/app/service/trending-service.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-trending-component',
  templateUrl: './trending-component.component.html',
  styleUrls: ['./trending-component.component.css']
})
export class TrendingComponentComponent implements OnInit {
  public listTrending: any;
  public deviceInfo: any;

  constructor(private trendingService: TrendingService, private deviceService: DeviceDetectorService) { }

  ngOnInit() {
    this.deviceInfo = this.deviceService.getDeviceInfo();

    this.trendingService.getListTrending().subscribe((res)=>{
      this.listTrending = res;
    })
  }

}
