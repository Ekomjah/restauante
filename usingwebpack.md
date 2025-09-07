## How to use the Webpack bundler

- If you haven't yet, install `npm` from the official site
- First run `npm init -y`

  > This if for the purpose of installing the `package.json` file. So if you have the file, you can skip this step!

- Run `npm -D webpack webpack-cli webpack-dev-server html-webpack-plugin style-loader css-loader html-loader` in any **CLI** of your choice (for installing the necessary devDependecies!)

  > NOTE: For most basic SPAs (Single Page Applications), the above command is sufficient to load your `html`, `css` and `webpack` dependencies.
  >
  > > Feel free to remove any dependency that you may not be using to avoid **_loading unneccessary code_** and **_slowing the loading of your application_**!
  > >
  > > > To do this run
  > > > `npm uninstall package_name`

- Then, run `npx webpack`for bundling the code and any other attached assets.

> P.S `html loader` is used to run any `non-JS , non-html type files` like images wrapped in `img` els.

> If using images in the javascript, default import the images like:
> `import <any_Name> from "./picture.extensionName"`

- For a typical webpack project, the file structure should look like:

```
project/
 |--src/
 | |--index.js
 | |--template.html
 |--public/
 |  |--assets/
 ├───package.json
 └───readme.md
```

- Run `npm webpack` to bundle the package;
- Run `npm webpack serve` to load the project in a browser environment on a local server.
- For ease of use of this commands, add these to your scripts tag in your package.json file like so:

```
{
    //some lines of code...
    scripts: {
    "build": "webpack",
    "dev": "webpack serve",
    //add the other existing lines in the scripts here...
    },
    //some other remaining lines of code...
}
```

- With this, you can then run `npm run dev` to view your project load the project in a browser environment on a local server.

- Then run `npm run build` to bundle the code for deployment.

> NOTE: When running these new commands, note that it is `npm` that is used and not `npx ` as was used before! Hence, it is `npm run dev` and not `npx run dev` as this will throw an error in your CLI.

- With this, your project should be ready for deployment.
