import { Component } from '@angular/core';
import { NodeItemModel } from './node-item/node-item-model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'cabtech-pwa';

	listItems =  [
		new NodeItemModel([
			new NodeItemModel([
				new NodeItemModel([
					new NodeItemModel(),
					new NodeItemModel()
				]),
				new NodeItemModel(),
				new NodeItemModel(),
				new NodeItemModel()
			]),
			new NodeItemModel([new NodeItemModel(), new NodeItemModel()])
		]),
		new NodeItemModel([
			new NodeItemModel(),
			new NodeItemModel([new NodeItemModel(), new NodeItemModel()])
		]),
		new NodeItemModel(), new NodeItemModel(),
		new NodeItemModel(), new NodeItemModel(),
		new NodeItemModel(), new NodeItemModel(),
		new NodeItemModel([
			new NodeItemModel([
				new NodeItemModel([
					new NodeItemModel(),
					new NodeItemModel()
				]),
				new NodeItemModel()
			]),
			new NodeItemModel()
		])
	];

	onSelectAll(){
		console.log("Slected all");
	}

	onAdd(items: NodeItemModel[]){
		items.push(new NodeItemModel());
	}
}
