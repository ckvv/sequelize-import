import { join } from 'node:path';
import { importModels } from '@sequelize/core';

(async () => {
  console.log(await importModels(join(__dirname, '../models/*.model.ts')))
})()