
[importModels][https://github.com/sequelize/sequelize/blob/main/packages/core/src/import-models.ts#L16-L34] does not work as expected

# Reproduction steps

+ `pnpm install`
+ `pnpm test`

expect `[ M1, M2 ]`
Print `[]`


edit file `node_modules/@sequelize/core/lib/import-models.js`

```js
async function importModelNoGlob(path, modelMatch) {
  const module2 = await import(path);

  console.log(module2) // add console
  return Object.keys(module2).filter((exportName) => {
    if (!(0, import_model_utils.isModelStatic)(module2[exportName])) {
      return false;
    }
    if (modelMatch) {
      return modelMatch(path, exportName, module2[exportName]);
    }
    return true;
  }).map((exportName) => module2[exportName]);
}
```

Print 
```
[Module: null prototype] { default: { M1: [Getter] } }
[Module: null prototype] { default: { M2: [Getter] } }
```

expect
```
{ M1: [Getter] } }
{ M2: [Getter] } }
```

It was working fine before, The code has not changed, I'm not sure what I did to cause the `import()` value to always be wrapped by `{ default : ...}`



