# Frontend Tagesschau Clone

<div align="center">
    <img src="./public/tagesschau.png" alt="Logo" width="80" height="80">

  <h3 align="center">FE-Tagesschau-Clone</h3>

  <p align="center">
    This is personal Tagesschau Frontend Clone Coding Project
    <br />
    <!-- <a href="">View Demo</a> -->
    <!-- · -->
    <a href="https://github.com/puddingForever/tagesschau-clone/issues">Report Bug</a>
    ·
    <a href="https://github.com/puddingForever/tagesschau-clone/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#convention">Convention</a></li>
        <li><a href="#commit-convention">Commit Convention</a></li>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

### Built With

- [React.js](https://reactjs.org/)
- [Redux.js](https://redux.js.org/)
- [TanStack](https://tanstack.com/query/latest)
- [TypeScript](https://www.typescriptlang.org/)

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

### convention

- Conding Convention

1. Event Handler Naming : ~handler
   ```ts
   const exampleHandler = (): void => {};
   ```
2. Handler Function Prop Naming: on~
   ```ts
   return <ExampleComponent onSubmit={exampleHandler} />;
   ```
3. Interface Naming : Pascal Case +

   - When passing props, ~Props

   ```ts
   interface ExampleProps {
     name: string;
   }
   ```

   - Other cases, ~Type
     <br />

4. styled-components : Only once on the top-level tag

   ```ts
   const StyledTag = styled.div``;

   return (
     <StyledTag>
       <div>Not</div>
       <div>There</div>
     </StyledTag>
   );
   ```

5. Type Management

- Globally reused types: Declare them in `src/@types/index.d.ts` (no need for import/export).

- `Types used only within a single component: It’s fine to declare them inside that component’s file.

- Type declaration style: Use interface for most types, and type alias for primitive types.

6.  File(Folder) Naming : Pascal Case(except components, pages )

    ```ts
    ExampleFileName;
    ```

7.  Component Folder Structure

    ```txt
    /SomeComponent
    │ index.js
    │ SomeComponent.tsx
    ├── /SomeChildrenComponent
    │ ├── index.js
    │ └── SomeChildrenComponent.tsx
    /SomeComponent2
    │ index.js
    │ SomeComponent2.tsx
    ```

8.  Separation of Concerns

- Separate UI and logic.
  - UI: .tsx files
  - Logic:
    - custom hooks: logic that requires hooks
    - utils: logic that does not require hooks

### Commit Convention

- feat: Commit for a new feature
- fix: Commit for a bug fix
- build: Commit for build-related changes
- etc: Commit for miscellaneous minor changes
- docs: Commit for documentation updates (e.g., README.md)
- style: Commit for code style or formatting changes (e.g., prettier)
- refactor: Commit for code refactoring

### Directory Structure

```txt
/src
│ App.tsx
│ Index.tsx
│ react-app-env.d.ts
│ Routes.tsx
├── /@type
│ └── index.d.ts
├── /app/store
│ ├── /ducks
│ │ └── / names for each module...
│ │   └── ...Slice.ts
│ │   └── ...Thunk.ts
│ ├── hooks.ts
│ └── store.ts
├── /assets
│ ├── Images
│ └── Svgs
├── /components
│ ├── /Commmon
│ ├── /Direct
│ ├── /Home
│ ├── /Login
│ └── /Signup
├── /pages
│ ├── /Direct
│ ├── /Home
│ └── /Login
├── /styles
│ ├── /UI
│ ├── globalStyles.ts
│ ├── styled.d.ts
│ └── theme.ts
```

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
   <p align="right">(<a href="#top">back to top</a>)</p>

## License

Distributed under the CC License.
https://tagesschau.de/creativecommons

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#top">back to top</a>)</p>

## Acknowledgments

- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
- [Malven's Grid Cheatsheet](https://grid.malven.co/)
- [Img Shields](https://shields.io)
- [GitHub Pages](https://pages.github.com)
- [Font Awesome](https://fontawesome.com)
- [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#top">back to top</a>)</p>
