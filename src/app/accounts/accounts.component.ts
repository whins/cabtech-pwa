import { Component, OnInit } from '@angular/core';
import { Account } from './account';
import { AccountsService } from './accounts.service';
import { MessageService } from '../messages/message.service';

@Component({
	selector: 'app-accounts',
	templateUrl: './accounts.component.html',
	styleUrls: ['./accounts.component.scss'],
	providers: [AccountsService]
})
export class AccountsComponent implements OnInit   {
	accounts: Array<Account> = [];
	selectedAccount: Account;

	constructor(
		private accountService: AccountsService,
		private messageService: MessageService,
	) {}

	ngOnInit() {
		this.getAccounts();
	}

	getAccounts(): void {
		this.accountService.getAccounts().subscribe(a => (this.accounts = a));
	}

	onSelect(selectedAccount: Account): void {
		this.selectedAccount = selectedAccount;
		this.messageService.add(`Selected: ${selectedAccount.name}`);
	}
}
