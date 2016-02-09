# Blood Donation Management System

## Installation

1. Unzip
2. Set up server port in `package.json` or use `npm config set bdms:port PORT`
3. Set up MongoDB connection url in `package.json` or use `npm config set bdms:db URL`
4. Run `npm start`

http://kuvalda.ru:8080/

## Dependencies

1. Angular1. I have no experience with React and Angular2
2. jQuery in one line of code `loadScript`. It would be replaced by vanila JS at refactoring time
3. Bootstrap for prototyping
4. Express
5. Socket.io
6. MongoDB
7. Google Maps

## Design

### Backend

Single collection Donator. Simple CRUD REST API as Express controller. After create, update and delete Socket.io emits event for all. Find query allow bound rect conditions.

Client controller deliver static files (js, css), and index.html at any other requests.

### Frontend

Map is a directive, becouse I need element access for Google Maps API. Displaing pins on map idle after bounds change inside map directive. Donator pins inside map directive is bad architecture. I thought for a `layer` directive for it, but mark it task with low priority.

All UI switching using ngRoute. It best for having no cost permanent links for all app points, e.g. `/become`, `/view/:donator`, `/manage/:donator`.

Single data-service `Donators` work with REST API and using ngResource. It has two templates: form mode and view mode.

# Task

Develop a single page blood donation management system to facilitate the patients from all around the world, find blood donors near them.

##Functional Specifications:

The app will provide a bridge between the patients and the volunteer blood donors.

The index page of application would load a map. Preferably it should be navigated to visitors’ location or the user can use search to navigate.

###For Donors:

Donors can find their location and tap/click on it. On clicking it should open a form in popup, where the donor can add the following information:

* First Name
* Last Name
* Contact Number
* Email Address 
* Blood Group

All these fields should have proper validation i.e. proper email address and a proper telephone number (+xx xxx xxxx xxx | 00xx xxx xxxx xxx).

On submitting the form a success message should be shown to user and his information along with his address, ip and geographical coordinates should be saved in database. 
A unique private link should be generated and displayed to him, from where he can edit or delete his posting.

###For Patients:

The map on index page should show all the posts in database as small pins at their respective coordinates. These pins should be lazy loaded, so only the pins that belong to the visible area of map should be loaded. As the user navigates the map, more pins should load accordingly.

On clicking any pin, a popup should appear displaying the donor’s information. In place of email and phone number, there should be a text (click to show). When the user clicks on this text, it should replace with the respective information. (This is to avoid bots from reading donor’s email address and contact information)

If any pin changes (a user made change to his post or deleted it) The change should be visible real time to other users.


##Requirements

1. A single page architecture of data driven app, using MEAN stack.

1. Feel free to chose between Angular 2 or REACT as your front end framework.

1. Index page should mainly contain a map. (ArcGIS preferred)

1. The postings should be real time, using sockets. (socket.io)

1. No Sql database should be used. (MongoDb)

1. Unit tests should be written, where necessary.

1. A design document that describes

	* System design (component interaction diagram).
	* All the technologies, libraries and APIs used to develop the application.
	* Any other technical details you would like to share.

1. A readme file containing:

	* Steps to initialize and run the application.
	* Any missing requirements.
	* Any feedback you can give for improvements in assignment

1. A link to live hosted version of application. (AWS or Heroku)

1. Source code of the application.

##To be evaluated

* System Design.

* Screen Designs.

* Used technologies.

* Fulfillment of building, deploying and running your application.

* Implementing all mentioned functionalities.

* Code quality (style, documentation and performance).

* Fulfillment of unit tests.

##Delivery / What to submit

Please, read and follow this section carefully. Any delivery that does not follow this section will score much less or simply won't be evaluated.

First of all, review Delivery Instructions (Sent to your personal mail), which describes general delivery process. Delivery for this assignment should consist of: Archive named `<your_name – FSD>.zip` containing the following:

* `README.txt` -> Contains instructions and feedback.

* `Design.doc` -> Contains your solution design and technologies.

* `Demo.txt` -> Contains link to live version on application.

* `Code Folder` -> Contains your solution.

* `Tests Folder` -> Contains all tests.

So the resulting structure of your delivery should be:

* `<your_name - FSD>.zip \ README.txt`

* `<your_name - FSD>.zip \ Design.doc`

* `<your_name - FSD>.zip \ Demo.txt`

* `<your_name - FSD>.zip \ Code\`

* `<your_name - FSD>.zip \ TESTS\`