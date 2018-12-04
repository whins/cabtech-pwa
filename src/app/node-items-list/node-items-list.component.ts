import { Component, OnInit } from '@angular/core';
import { NodeItemModel } from '../node-item/node-item-model';

@Component({
  selector: 'app-node-items-list',
  templateUrl: './node-items-list.component.html',
  styleUrls: ['./node-items-list.component.scss']
})
export class NodeItemsListComponent implements OnInit {

	items: NodeItemModel[] = [];

  constructor() { }

  ngOnInit() {
	  this.items = [
		new NodeItemModel([new NodeItemModel([new NodeItemModel([new NodeItemModel(),new NodeItemModel(),]),new NodeItemModel(),new NodeItemModel(),new NodeItemModel(),]),new NodeItemModel([new NodeItemModel(),new NodeItemModel(),]),]),
		new NodeItemModel([new NodeItemModel(),new NodeItemModel([new NodeItemModel(),new NodeItemModel(),]),]),
		new NodeItemModel([new NodeItemModel([new NodeItemModel([new NodeItemModel(),new NodeItemModel(),]),new NodeItemModel(),]),new NodeItemModel(),]),
	  ]
  }

  onSelectAllClick(){

  }
}
