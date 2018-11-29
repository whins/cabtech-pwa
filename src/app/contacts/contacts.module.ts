import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { MatTableModule } from '@angular/material';

@NgModule({
	declarations: [
		ContactsComponent
	],
	imports: [
		CommonModule,
		MatTableModule,
	],
	exports: [ContactsComponent]
})
export class ContactsModule { }
