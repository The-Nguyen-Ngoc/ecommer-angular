import { Component, OnInit } from '@angular/core';
import { TrendingService } from 'src/app/service/trending-service.service';
@Component({
  selector: 'app-trending-component',
  templateUrl: './trending-component.component.html',
  styleUrls: ['./trending-component.component.css']
})
export class TrendingComponentComponent implements OnInit {
  public listTrending: any | undefined;
  constructor(private trendingService: TrendingService) { }

  ngOnInit() {
    this.trendingService.getListTrending().subscribe((res)=>{
      this.listTrending = res;
      console.log(this.listTrending)
    })
  }

}
