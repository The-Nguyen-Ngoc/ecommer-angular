import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/service/navigation-service.service';
import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {
  public navs: any | undefined;
  public textSearch = '';
  public deviceInfo: any;
  public displayMenuMobile = false;

  constructor(private router: Router, private navigationService: NavigationService,
    private deviceService: DeviceDetectorService) { }

  ngOnInit() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    console.log(this.deviceInfo)
    this.navigationService.getListNavigations().subscribe((res) => {
      this.navs = res;
      // this.router.navigate([this.navs[1].link]);
      this.navs[0].active = true;
    })
  }

  showHideMenuMobile(){
    this.displayMenuMobile = !this.displayMenuMobile
  }

}
