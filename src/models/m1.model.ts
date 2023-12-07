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

export class M1 extends Model<
  InferAttributes<M1>,
  InferCreationAttributes<M1>
> {
  @Attribute(DataTypes.INTEGER)
  declare id: number;
}
