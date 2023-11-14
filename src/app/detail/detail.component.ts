import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  data: any
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    ){

  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.userService.getUserById(id)
    .subscribe((res: any) =>{
      console.log(res)
      this.data = res
    })
  }

}
