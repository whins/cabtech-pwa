import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { ContactsService } from './contacts.service';
import { MessageService } from '../messages/message.service';
import { MatSnackBar } from '@angular/material';


@Component({
	selector: 'app-contacts',
	templateUrl: './contacts.component.html',
	styleUrls: ['./contacts.component.scss'],
	providers: [ContactsService]
})
export class ContactsComponent implements OnInit {
	contacts: Contact[] = [];
	selectedContact: Contact;
	displayedColumns: string[] = ['id', 'name'];

	constructor(private contactsService: ContactsService, public messageService: MessageService, public snackBar: MatSnackBar) { }

	ngOnInit() {
		this.getContacts();
	}

	getContacts(): void {
		this.contactsService.getContacts().subscribe(a => this.contacts = a);
	}

	onSelect(selectedContact: Contact): void {
		const snackBarRef = this.snackBar.open(`Undo selecting: ${selectedContact.name}?`, 'OK');

		snackBarRef.afterDismissed().subscribe((e) => {
			if (!!e.dismissedByAction) {
				return;
			}
			this.selectedContact = selectedContact;
			this.messageService.add(`Selected: ${selectedContact.name}`);
		});

		snackBarRef.onAction().subscribe(() => {

		});
	}
}
