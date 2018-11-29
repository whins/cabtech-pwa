import { Lookup } from '../shared/lookup';

export class Contact extends Lookup{
  constructor(public id: string, public name: string) {
    super(id, name);
  }
}
