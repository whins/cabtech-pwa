import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Account } from './account';
import { MessageService } from '../messages/message.service';


@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private messageService: MessageService) { }

  getAccounts(): Observable<Account[]> {
    this.messageService.add('AccountsService: data received');
    return of([
      new Account('1', 'Bob'),
      new Account('2', 'Ben'),
      new Account('3', 'Bibi'),
      new Account('4', 'john'),
    ]);
  }
}
