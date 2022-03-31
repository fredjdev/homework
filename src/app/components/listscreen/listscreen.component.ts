import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/backend.service';
import { Ticket } from 'src/interfaces/ticket.interface';
import { User } from 'src/interfaces/user.interface';

@Component({
  selector: 'app-listscreen',
  templateUrl: './listscreen.component.html',
  styleUrls: ['./listscreen.component.css']
})
export class ListscreenComponent implements OnInit {

  users: User[];
  tickets: Ticket[];

  constructor(private readonly backendService: BackendService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
    this.loadTickets();
  }
  loadUsers() {
    this.backendService.users().subscribe(
      res => {
        this.users = res;
      },
      err => {
        alert('error loading users!');
      }
    )
  }
  loadTickets() {
    this.backendService.tickets().subscribe(
      res => {
        this.tickets = res;
      },
      err => {
        alert('error loading tickets!');
      }
    )
  }
  createTicket() {
    const description: string = prompt('Please enter the description:');
    if(description) {
      this.backendService.newTicket({description: description}).subscribe(
        res => {
            this.loadTickets();
        }, err => {
          alert('error creation!');
        }
      )
    }
    
  }
  onChangeInput(idTicket) {
    const ticket = this.tickets.find(obj => obj.id == idTicket);
    if(ticket) {
      ticket.completed = !ticket.completed;
      this.backendService.complete(idTicket, ticket.completed);
    }
  }

  navigateToDetails(idTicket) {
    this.router.navigate(['/details', idTicket]);
  }
  assign(idTicket) {
    const idUser = prompt('Please enter the id of user:');
    if(idUser && parseInt(idUser)) {
      this.backendService.assign(idTicket, parseInt(idUser)).subscribe(
        res => {
          console.log('success assign.');
        }, err => {
          console.log('error assign.');
        }
      )
    }
  }

}
