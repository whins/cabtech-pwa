import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule, MatSnackBar, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';

import { AccountsModule } from './accounts/accounts.module';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './messages/message.service';
import { ContactsModule } from './contacts/contacts.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
		MessagesComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MatToolbarModule,
		FormsModule,

		AccountsModule,
		ContactsModule,
		OverlayModule,
		MatSnackBarModule,
		BrowserAnimationsModule,
		HttpClientModule
	],
	providers: [
		MessageService,
		MatSnackBar,
		{ provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 3500 } }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
