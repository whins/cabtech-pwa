import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { NodeItemModel } from "./node-item-model";

@Component({
	selector: "app-node-item",
	templateUrl: "./node-item.component.html",
	styleUrls: ["./node-item.component.scss"]
})
export class NodeItemComponent implements OnInit, OnChanges {
	@Input() item: NodeItemModel;
	@Input() parentItem?: NodeItemModel | null;

	constructor() {}

	ngOnInit() {}
	ngOnChanges(a) {}

	drop(event: CdkDragDrop<NodeItemModel[]>) {
		moveItemInArray(this.item.items, event.previousIndex, event.currentIndex);
	}

	onClick(s: any) {
		this.item.toggle();
	}
	onToggleExpand(){
		this.item.toggleExpand();
	}
}
