import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/service/navigation-service.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {
  public navs: any | undefined;
  public textSearch = '';

  constructor(private router: Router, private navigationService: NavigationService) { }

  ngOnInit() {
    this.navigationService.getListNavigations().subscribe((res) =>{
      this.navs = res;
      this.router.navigate([this.navs[1].link]);
      this.navs[1].active = true;
    })
  }

}
