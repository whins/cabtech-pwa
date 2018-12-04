import { Component, OnInit, Input } from '@angular/core';
import { NodeItemModel } from './node-item-model';

@Component({
  selector: 'app-node-item',
  templateUrl: './node-item.component.html',
  styleUrls: ['./node-item.component.scss']
})
export class NodeItemComponent implements OnInit {

	@Input() nodeItem: NodeItemModel;

  constructor() { }

  ngOnInit() {

  }

}
