export class NodeItemModel {
	id: any = new Date().valueOf();
	name: string = `${new Date().valueOf()}`;
	value: any = new Date().valueOf();
	items: NodeItemModel[] = [];

	constructor(items: NodeItemModel[] = []){
		this.items = items;
	}
}
