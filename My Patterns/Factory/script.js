import {
  LowCategory, MediumCategory, HighCategory
} from './categories';

class CategoriesFactory {
  static list = {
    low: LowCategory,
    medium: MediumCategory,
    high: HighCategory
  };

  create(name, status = 'low') {
    const Category = CategoriesFactory.list[status];
    const newCategory = new Category(name);

    return newCategory;
  }
}

const factory = new CategoriesFactory();

const categories = [
  factory.create('Nick', 'low'),
  factory.create('Mac', 'medium'),
  factory.create('Jack', 'high'),
];

console.log(categories);
