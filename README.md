# Barrel file and Tree-Shaking

Example repository for the question on Stackoverflow at:

https://stackoverflow.com/questions/58527907/barrel-file-and-tree-shaking

To run the example just:

```
npm install
npm run bootstrap
```
The bootstrap will run the build for the mylib project and for the `lib-user` project.

The `lib-user` project uses webpack to create a `main.js` bundle in the `public` folder. Also, webpack will automatically show a bundle analysis report that shows the content of the created bundle.

## Case 1: no tree-shaking
Is the default case in this repository. The `/lib-user/src/index.ts` has the following code:
```
import { LibAMain } from 'mylib';
LibAMain();
```
### Expected Result: 
A `main.js` bundle containing the `LibA.js` file along with the unused `LibB.js` file.

## Case 2: tree-shaking working
Change the content of `/lib-user/src/index.ts` to be as in the following example
```
import { LibAMain } from 'mylib/lib/LibA';
LibAMain();
```
### Expected Result: 
A `main.js` bundle containing only the `LibA.js` file.
