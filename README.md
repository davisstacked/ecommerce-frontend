### ECOMMERCE FRONTEND 

This is a [Next.js](https://nextjs.org/) project

## Getting Started
### Scripts

`npm install` to install dependencies 

`npx json-server --watch db.json --port 3001` to start the JSON server backend

`npm run dev` to run app in development mode on [http://localhost:3000](http://localhost:3000)

`npm run build` to build app for production 

`npm run start` to start the server after building the app

`npm run lint` to run ESLint for identifying and reporting on patterns in JavaScript

### Overview
#### USER STORIES 

`ECOMMERCE FRONTEND` is a React Typecript app for browsing and purchasing products (particurally sneakers).

Users can view a `Home` product page, click on image links to view the individual product's `ProductPage`, add products to a shopping cart, and proceed to a mock checkout process.

##### Shopping Cart and Checkout

The shopping cart icon at the top right corner of the page displays the number of unique items currently in the cart. Upon clicking this icon or the 'Add to Cart' button on the `ProjectPage` the `CartPage` is displayed, showing a list of items added to the cart, each with options to increase, decrease, or remove the item entirely.

There is a summary component which calculates the total cost of the shopping cart including discounts, shipping, and tax.

### TECHNOLOGY

**Language**: Javascript 
**Tools**:   

|Tool Name|Function|
|---|---|
|**Next.js**|to build server-side rendered and static web applications|
|**React**|to write reusable components|
|**TypeScript**|to add static typing to JavaScript, enhancing code quality and understandability|
|**Recoil**|for state management|
|**JSON Server**|to create a fake REST API for development and testing|
|**Ant Design**|for UI components|
|**react-slick**|to create responsive carousel sliders|
|**ESLint**|to find and fix problems in your JavaScript code|
|**Sass**|for advanced CSS scripting|

### Approach 

##### State management

* I managed global state using the Recoil library. It's clean and intuitive and dare I say fun. Recoil works and thinks like React, allowing all of the components to easily access shared state without prop drilling. Unlike Context API, which would have made sense for a small application, Recoil state persists on reload.

##### Responsive Design

* The application is nearly fully-responsive. It is capable of going from large browser windows down to mobile while remaining asthetically pleasing. This is accomplished by using relative units **rem** and **percentages** instead of fixed heights and widths.  

##### Fetching Data

* Data fetching was managed through a custom hook function within Recoil. When the data hasn't yet been fetched on the `Home` page, the page will display **Loading...** The fetched data is stored in a JSON file and served by the JSON Server to simulate a backend API. 

## A Short Reflection
#### GREAT STUFF

One of the aspects I'm most proud of in this project is the shopping cart functionality. Managing the state of the cart, enabling users to update quantities of products, and simulating a checkout process was an enriching experience. Implementing the carousel slider for product images was also exciting.

#### NEXT STEPS:

- Implement automated tests using a testing library like Cypress to ensure the business logic is correct.
  
- **Next.js** recently updated their Image componenthe responsive sizing on some Image components needs fixing, as the screen enlargement sometimes skews the styling, and it is loading the largest version of the image unnecessarily in some cases. 

- The code in `ProductPage.tsx`, as well as other components, can be further modularized into smaller components for better maintainability.

- Ideally, the application should be connected to an actual database and a proper backend instead of a JSON server.

- Create more global scss variables for site design cohesiveness. 

- Fix minor UI issues like the alignment of dots in the unordered list on the product page, the advertisement padding on the home page, and how the product link images line up on the home page. 

- The badge on the cart button currently shows the number of unique items in the cart. It would be better if it displayed the total quantity of all items.

- The images array for each product should be updated to have actual images of the project. For time's sake I used the same images for many of each project's images. 

- Work on the performance optimization of the application. For example, implementing lazy loading of images, pagination, or virtualization will improve the loading times and overall performance of the application, especially when dealing with a large inventory of products.

#### In a Concurrent Environment

If the application was intended to run in a concurrent environment, the following changes would need to be made:

- Implementing a locking mechanism or using transactional operations to handle multiple concurrent updates to the same cart. 

- Implement real-time updates to product availability to prevent selling out-of-stock items.

- Implement session management to handle multiple users and carts.

#### Some Final Thoughts

This project was really fun! I had a lovely week crafting React application with all the latest frontend technologies. And the ticking clock? Felt just like a day at the dot.cards office (see you soon!) I'm happy to have a new portfolio piece and grateful I had some motivation to stay up late programming! I enjoyed the challenge and all the little mini-challenges along the way. Thank you for making a really well-thought out project. 

