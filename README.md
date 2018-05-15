#Template for React application with client side navigation.

## Code
1. In the index.js
```
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('app'));
```
2. From where you want to declare the routes (body.js in this example)
```
<Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/page1' component={Page1}/>
    <Route path='/page2' component={Page2}/>
</Switch>
```
3. From where you want to navigate to the links (Refer home.js, page1.js, page2.js in this example)
```
import { Link } from 'react-router-dom'
.
.
.
<Link to='/page1'>Page 1</Link>
``` 

## Available Scripts

In the project directory, you can run:

### `npm dev`

Runs the app in the development mode.(using webpack-dev-server)<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run start`
This serves the production build using 'serve' module.
Run this after you create the production build.<br>

Open [http://localhost:8080](http://localhost:8080) to view it in the browser.
