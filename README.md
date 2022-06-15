# SVG Icons Library as React components
Just put SVG's to `./src/static/svg` folder and magically get optimized React component.

## Get a new build without code touching:
1. 🏗 Manually put your new svg to `./static/svg` folder via GitHub
2. 🔔 Create Pull Request to `master`
3. 👍 Get approves from developers
4. 🕗 Wait till GitHub Actions finished
5. 🎉 Whoola! New build is released!

## Local development
Please use following rules to build and check project locally

### Check SVG optimization manually
```
npm run prebuild:icons
```
This will remove unnecessary attributes and generate React components from the SVG.

### Run Storybook locally
```
npm run storybook
```
