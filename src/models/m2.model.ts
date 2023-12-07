// 评测记录 (初筛 精筛 干警评估)
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
  Default,
  NotNull,
  PrimaryKey,
} from '@sequelize/core/decorators-legacy';

export class M2 extends Model<
  InferAttributes<M2>,
  InferCreationAttributes<M2>
> {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare id: number;

  @Attribute(DataTypes.JSONB)
  declare result?: any; //

  @Attribute(DataTypes.STRING)
  @Default('')
  declare comment: string;

  @Attribute(DataTypes.INTEGER)
  @NotNull
  @Default(0)
  declare progress: number;

  @Attribute(DataTypes.DATE)
  declare startAt?: string; // 测评开始时间

  @Attribute(DataTypes.DATE)
  declare endAt?: string; // 测评结束时间
}
