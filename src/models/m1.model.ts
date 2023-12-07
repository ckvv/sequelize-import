// 用户
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
  AutoIncrement,
  Index,
  NotNull,
  PrimaryKey,
} from '@sequelize/core/decorators-legacy';

export class M1 extends Model<
  InferAttributes<M1>,
  InferCreationAttributes<M1>
> {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare id: number;

  @Attribute(DataTypes.STRING)
  @NotNull
  @Index({ unique: true })
  declare username: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare password: string; // 变更原因
}
