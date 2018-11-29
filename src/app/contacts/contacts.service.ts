import { Injectable } from '@angular/core';
import { MessageService } from '../messages/message.service';
import { of, Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
	providedIn: 'root'
})
export class ContactsService {

	constructor(private messageService: MessageService) { }

	getContacts(): Observable<Contact[]> {
		this.messageService.add('ContactService: data received');
		return of([
			new Contact('1', 'Bob'),
			new Contact('2', 'Ben'),
			new Contact('3', 'Bibi'),
			new Contact('4', 'john'),
		]);
	}
}
