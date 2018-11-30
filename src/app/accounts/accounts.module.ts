import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AccountsComponent } from "./accounts.component";
import { AccountDetailsComponent } from "./account-details/account-details.component";
import { AccountsService } from "./accounts.service";

@NgModule({
	declarations: [AccountsComponent, AccountDetailsComponent],
	imports: [CommonModule, FormsModule],
	exports: [AccountsComponent, AccountDetailsComponent],
	providers: [AccountsService]
})
export class AccountsModule {}
