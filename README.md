# Subiz campaign templates
# Usage
You must install the package first
```sh
npm i --save @subiz/campaign-template
```
Then, import the package
```js
import {CampTemp} from '@subiz/campaign-template`

let template = CampTemp.New()

// call each time you need to render or change the parameter
template.render('#pop', {
  template: template,
  page: page,
  select: 'secondary_button',
  onClick: () => true,
  onClose: () => true,
})
```

# Development
## To build a production version
```sh
npm run build
```

## Start dev server for development
```sh
npm run dev
```

Visit `localhost:8081#template1` to test template 1, visit `localhost:8081#template2` to test template 2, ...

## To run report
Uncomment the line in `./webpack.config.js`
