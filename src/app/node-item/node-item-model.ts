export class NodeItemModel {
	id: any;
	name: string = ``;
	value: any;
	items: NodeItemModel[] = [];
	checked: boolean = false;
	enabled: boolean = true;

	constructor(items: NodeItemModel[] = []){
		let r = Math.random() * 10000000000000000;
		this.id = this.value = r;
		this.name = `${r}`;
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
