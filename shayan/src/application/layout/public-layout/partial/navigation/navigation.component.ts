import { Component, OnInit } from '@angular/core';
import { NavigationService } from './navigation.service';
import { Navigation } from './navigation';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
 data : Navigation[]
  constructor(private navigationService : NavigationService) { }

  ngOnInit() {
      this.navigationService.get().subscribe(resp =>{
        this.data = resp
      })
    }

    // this.data.forEach(el =>{
    //   if(el.Title != "آموزش"){
    //   this.result.push(el);
    //   }
    // })
  
}
