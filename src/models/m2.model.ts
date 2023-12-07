import type {
  InferAttributes,
  InferCreationAttributes,
} from '@sequelize/core';
import {
  DataTypes,
  Model,
} from '@sequelize/core';
import {
  Attribute,
} from '@sequelize/core/decorators-legacy';

export class M2 extends Model<
  InferAttributes<M2>,
  InferCreationAttributes<M2>
> {
  @Attribute(DataTypes.INTEGER)
  declare id: number;
}
