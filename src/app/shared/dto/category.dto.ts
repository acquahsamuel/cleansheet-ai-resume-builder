export interface ICategory {
  categoryId: string;
  categoryName: string;
}

export interface IUpdateCategory {
  categoryName?: string;
}

export class Category implements ICategory {
  constructor(public categoryName: string, public categoryId: string) {}
}
