export class NodeItemModel {
	id: any = new Date().valueOf();
	name: string = `${new Date().valueOf()}`;
	value: any = new Date().valueOf();
	items: NodeItemModel[] = [];
	checked: boolean = false;
	enabled: boolean = true;

	constructor(items: NodeItemModel[] = []){
		this.items = items;
	}

	check(val: boolean){
		this.checked = !!val;
		this.items.forEach(c=>c.check(this.checked));
	}
	toggle(){
		this.checked = !this.checked;
		this.items.forEach(c=>c.check(this.checked));
	}
}
