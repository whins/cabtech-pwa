import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './accounts.component';
import { AccountDetailsComponent } from './account-details/account-details.component';

@NgModule({
  declarations: [AccountsComponent, AccountDetailsComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ AccountsComponent, AccountDetailsComponent],
})
export class AccountsModule { }
