import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from 'src/app/backend.service';
import { Ticket } from 'src/interfaces/ticket.interface';
import { User } from 'src/interfaces/user.interface';

@Component({
  selector: 'app-detailsscreen',
  templateUrl: './detailsscreen.component.html',
  styleUrls: ['./detailsscreen.component.css']
})
export class DetailsscreenComponent implements OnInit {

  users: User[];
  tickets: Ticket[];
  ticket: Ticket;
  constructor(private readonly backendService: BackendService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id'])
    this.loadTickets();
  }
  loadTickets() {
    this.backendService.tickets().subscribe(
      res => {
        this.ticket = res.find(obj => obj.id == this.route.snapshot.params['id']);
      },
      err => {
        alert('error loading tickets!');
      }
    )
  }

}
