import { Component, OnInit, Input, OnChanges, SimpleChanges } from "@angular/core";
import { NodeItemModel } from "../node-item/node-item-model";
import { trigger, state, style, transition, animate } from "@angular/animations";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

@Component({
	selector: "app-node-items-list",
	templateUrl: "./node-items-list.component.html",
	styleUrls: ["./node-items-list.component.scss"],
	animations: [
		trigger('openClose', [
		  // ...
		  state('open', style({
			height: '400px',
			opacity: 1,
			display: 'flex',
		  })),
		  state('closed', style({
			height: '0px',
			display: 'none',
			opacity: 0,
		  })),
		  transition('open => closed', [
			animate('0.1s')
		  ]),
		  transition('closed => open', [
			animate('0.1s')
		  ]),
		  transition('* => closed', [
			animate('0.05s')
		  ]),
		  transition('* => open', [
			animate('0.1s')
		  ]),
		  transition('open <=> closed', [
			animate('0.1s')
		  ]),
		  transition ('* => open', [
			animate ('0.1s',
			  style ({ opacity: '*' }),
			),
		  ]),
		  transition('* => *', [
			animate('0.1s')
		  ]),
		]),
	  ],
})
export class NodeItemsListComponent implements OnInit {
	isSelectAll: boolean = false;
	isOpen = true;
	items: NodeItemModel[] = [];

	@Input() dataSource: NodeItemModel[] = [];

	@Input() onSelectedAll: () => {};
	@Input() onAdd: (items: NodeItemModel[]) => any = (s:any)=>{};

	constructor() {}

	ngOnInit() {
		this.items = this.dataSource;
	}

	toggle() {
	  this.isOpen = !this.isOpen;
	}

	onToggleSelectAll(val: boolean){
		this.isSelectAll = !this.isSelectAll;
		this.items.forEach(i=>i.check(this.isSelectAll));
		this.onSelectedAll();
	}

	drop(event: CdkDragDrop<NodeItemModel[]>) {
		moveItemInArray(this.items, event.previousIndex, event.currentIndex);
	}

	add(){
		this.onAdd(this.items);
	}
}
