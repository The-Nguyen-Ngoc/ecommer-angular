import { Component, Input, OnInit } from '@angular/core';
import { TrendingService } from 'src/app/service/trending-service.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { GalleryItem, ImageItem } from 'ng-gallery';
@Component({
  selector: 'app-trending-component',
  templateUrl: './trending-component.component.html',
  styleUrls: ['./trending-component.component.css']
})
export class TrendingComponentComponent implements OnInit {
  @Input() listTrending: any;
  
  images: GalleryItem[];
  public deviceInfo: any;

  constructor(private deviceService: DeviceDetectorService) { 

    this.images = [
      new ImageItem({ src: 'assets/img/trending/anh-1.jpg', thumb: 'IMAGE_THUMBNAIL_URL' }),
      new ImageItem({ src: 'assets/img/trending/anh-2.jpg', thumb: 'IMAGE_THUMBNAIL_URL' }),
      new ImageItem({ src: 'assets/img/trending/anh-3.png', thumb: 'IMAGE_THUMBNAIL_URL' }),
    ];
  }

  ngOnInit() {
    this.deviceInfo = this.deviceService.getDeviceInfo();

  }

  clickThumb(){
    console.log('click');
    
  }

}
