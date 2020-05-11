import { Flat} from "../models/flat"

interface FlatSerializer {
  city: number;
    street: string;
    address: string;
}

export const show = (flat: Flat): FlatSerializer => {
  return {
    city: flat.zip,
    street: flat.street,
    address: `${flat.zip} ${flat.street}`
  }
};


export const index = (users: Array<Flat>): Array<FlatSerializer> => {
  return users.map((flat: Flat) => show(flat));
}