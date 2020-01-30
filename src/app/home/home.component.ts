import { Component, OnInit } from '@angular/core';
import { IplService } from '../ipl.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  teams
  players
  constructor(private iplService:IplService) { }
teamname
  ngOnInit() {
    this.iplService.teamLabels().subscribe(res=>{
      this.teams=res["labels"]
    })
  }
getPlayers(event){
   this.teamname=event.target.value;
   if(this.teamname && this.teamname.length>0){

   this.iplService.getPlayersByName(this.teamname).subscribe(res=>{
     this.players=res["players"]
   })
   }
}
}