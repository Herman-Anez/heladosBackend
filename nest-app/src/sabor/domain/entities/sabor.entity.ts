export type saborData = {
  id: string;
  name: string;
  price: number;
};

export class Sabor implements saborData {
  constructor(
    public id: string,
    public name: string,
    public price: number,
  ) {}

  updateName(name: string) {
    if (!name) throw new Error('Name is required');
    this.name = name;
  }

  updatePrice(price: number) {
    if (price < 0) throw new Error('Invalid price');
    this.price = price;
  }
}
