# Wunderman Thompson Starter Kit
 A Starter kit to develop HTML templace base on TailwindCSS and using the Wunderman Thompson Portugal best practices

## To get started

1. Clone the repository:

   ```bash
   git clone https://github.com/Wunderman-Thompson-Portugal/starter-kit.git new-project

   cd new-project
   ```

2. Install the dependencies:

   ```bash
   # Using npm
   npm install

   # Using Yarn
   yarn
   ```

3. Start the development server:

   ```bash
   # Using npm
   npm run dev

   # Using Yarn
   yarn dev
   ```

   Now you should be able to see the project running at [localhost:8080](http://localhost:8080).

4. Open `public/index.html` in your editor and start experimenting!

 ## Tools
 We recomend to develop using [Visual Studio Code](https://code.visualstudio.com/) for IDE software, and on top on that we have some plugins that recomend to install to help your performance during the development phase
 - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss): Enhances the Tailwind development experience by providing Visual Studio Code users with advanced features such as autocomplete, syntax highlighting, and linting.
 - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.

 ## Building for production

Even though this isn't necessarily a starter kit for a proper project, we've included an example of setting up [cssnano](https://cssnano.co/) to optimize your CSS for production.

To build an optimized version of your CSS, simply run:

```bash
# Using npm
npm run production

# Using Yarn
yarn production
```

After that's done, check out `./public/build/tailwind.css` to see the optimized output.
