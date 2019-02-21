# FogWeb

FogWeb is a dotnet core project in the backend and react/redux at the front end.

  - Backend dotnet core MVC
  - React/Redux and Typescript 

The front end project was create by using 'Create React App' with typescript options. 

# Folder structures
```
Linko.FogWeb/ 
 README.md
 Controllers
    SampleDataController
 Pages
    _ViewImports.cshtml
    Error.cshtml
 appsettings.json
 Program.cs
 Startup.cs
 ClientApp
      README.md 
      node_modules/
      package.json 
      package-lock.json
      tsconfig.json 
      public/
        index.html
        favicon.ico
    	assets/img
    	manifest.json
      src/
    	assets
    		css
    		font
    		img
        components 
    		dasboard 
    			active-card 
    				active-card.scss
    				active-card.tsx
    			dashboard.tsx
    			index.tsx
    			dashboard.scss
    		disposal-sites 
    			disposal-sites.tsx
    			index.tsx
    		facilities 
    			facilities.tsx
    			index.tsx
    
    		....other components
    		linko-types 
    		route
    			linko-route.tsx 
    
    		about.tsx
    		counter.tsx
    		fetch-data.tsx
    		home.scss
    		home.tsx
    	rest-client
    		moc-data
    			active-cards.tsx 
    		data-services.tsx
    	store 
    		actions
    			action-creators
    				dashboard-action-creators.tsx
    			action-types
    				dashboard-action-types.tsx
    		reducers
    			dashboard-reducers.tsx 
    		configreStore.tsx
    		counter.tsx
    		weather-forecasts.js
    	app.test.js
    	app.tsx;
    	index.tsx;
    	react-app-env.d.ts
    	registerServiceWorker.js   
```

For the front end project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.   

## To start debug mode and production mode
in ClientApp folder run: 
```sh
To install dependencies:
$ npm install

To start front end in debug mode:
$ npm run start  

To start front end in production mode:
$ npm run build
The build process will create optimized static artifacts under /ClientApp/build folder, which can be served by any web server.
``` 
You can also load the whole solution into Visual Studio, and press F5 to start

## How to add a new react component:
For better code structure,  we prefer to create a dedicated folder for each component. 
Here is steps to create a component 
1. `Create a new folder under 'ClientApp/src/components' folder`
2. `Create the component code `
3. `If there are special styles to the compoent,  create a new SASS file as well`
4. `If the component needs to work with redux state,  refer 'dashboard.tsx', 'active-card.tsx' to find how to do it`
5. `If the component also needs to do asyncronous call to get data,  refer to 'dashboard.tsx', 'active-card.tsx', 'fetch-dta.tsx'` 

## How to debug
- Put `'debugger'` in the places you want to debug in source files, load the website and navigate the place, the program will stop these break points.
- Use `'React Developer Tools'` https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en 
You can use this tool to inspect the component details.
- Use `'Redux DevTools'` https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
You can do time travel debug. 

## Dependencies
- Node JS
- DOTNET CORE 2.2 