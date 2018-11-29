
export interface ILookup {
  id: string;
  name: string;
}

export class Lookup implements ILookup{
  constructor(public id: string, public name: string) {
  }
}
