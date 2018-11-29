
import { Lookup } from '../shared/lookup';

export class Account extends Lookup{
  constructor(public id: string, public name: string) {
    super(id, name);
  }
}
