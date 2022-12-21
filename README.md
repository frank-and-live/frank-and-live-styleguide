# Moneyflow Style Guide
The styleguide provides a number of asset through the `/dist` folder.
Notably `mf.min.css` and `mf.min.js` along with static assets can be found here.

## Documentation
For information on how to use the styleguide please see the <a href="https://style.moneyflow.dev/docs/dist/">documentation</a>.

## How to update the styleguide
If you want to update anything in the styleguide follow these steps (node.js is required)
- in a terminal `cd` into `moneyflow-core/code/assets/moneyflow-styleguide-v2` and run `npm i`. This will install all depencies
- then run `npm start`. This will start a file watcher, that will re-build the `/dist` folder every time a file is changes. You can now do your updates in eg. `/src/_buttons.scss` if you wish to update the apperance of the buttons. 
- to run the docs - open a new terminal in the same location and `cd` into `/docs` and run `npm i`.
- then run `npm run dev`. This will start the Vue app in development mode. A local ip-address will be printed where you can see the docs. You can now do your updates in eg. `/docs/src/views/ButtonsView.vue` if you wish to update the documentation page for the buttons.
- when you are done, stop `control + c` the Vue app and run `npm run build`. This will build a production ready version.
- then `cd ..` back to root dir and stop `control + c` the file watcher, and run `npm run build`. This will build the `/dist` folder.
- add, commit and push to github and wait for a few minutes. This will allow github pages to serve the updated version of the styleguide.

Remember to update the commit hash in submodules to reflect your latest changes.
