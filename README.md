# Hotel Manager 

Hotel Manager is an application that allows a customer to book hotel rooms. It allows them to find a room based on the date and room type they are looking for. It will also keep track of the total amount of money a customer has spent.

## Built With

  * JavaScript
  * CSS
  * HTML
  * WebPack

## Getting Started:

### Where to Start

1. Start by going [here](https://github.com/shanekwarning/hotel-managerClone). From here you will want to click on the green rectangular button titled 'Code'. This should open a drop down menu where you should see a link. To the left of the link there should be an icon with tow over lapping squares. You can click the icon to copy the link. For convience you can copy it here, git@github.com:shanekwarning/hotel-manager.git. 
2. You will want to clone down the reop to your terminal using 'git clone git@github.com:shanekwarning/hotel-manager.git'. 
3. Once you have cloned the repo, change inot the directory and install the project dependencies. Run 'npm install' to install the project dependencies.
4. Run npm start in the terminal to see the HTML page link. You will need to copy and paste the local servre from the terminal and paste it into your browser. The local server should be simialiar to 'http://localhost:8080/'. You can stop the local server by using. 'Control + c' in your terminal. Closing the terminal without stopping the server first could allow the server to continue to run in the background and cause problems. This is because this application uses wepPack.
5. Do not run 'npm audit fix --force'. This will update the latest verison of packages. You need to be using the correct webPack which is not the latest verison.
6. You will now need to clone down a second reop to your local. This site does not use local data but uses data from another deployable API. You can clone down the repo [here](https://github.com/turingschool-examples/overlook-api), and follow the instructions on its ReadMe.

### Using the Application

* On page load you will be brought to a login screen. You will need to login to access the rest of the applications content. To login you can type any user name between 'customer1' through 'customer50'. The user name always needs to start with 'customer' and end with a number between 1-50. The number at the end will determine which data you pull for the current customer. The password, regardless of the customer is always 'overlook2021'.
 ![Login Page](https://user-images.githubusercontent.com/97068979/165383613-68d63f68-629b-4b8d-99e8-8a4ce9418632.png)

 * From here you will be brought to the booking page. You will be able to select the date you would like to book a hotel and filter the room prefences by room type using the drop down menu.
 ![Photo of the Booking Page](https://user-images.githubusercontent.com/97068979/165384960-1c2a9619-ee83-4614-816e-b8c48dff064f.png)
 
 * Making selections can be seen in the below GIF. Once you make your selection it will populate the room options. You can click the booking button which will bring you to the confirmation page. If you click confirm booking, the booking will be added the customers booking list which can be seen on another page. 

![BookRoom](https://user-images.githubusercontent.com/97068979/165390135-9f85e2e4-05b1-434d-b61c-cd9e277a3f66.gif)

 * To view you bookings you can click the 'View Your Bookings' button. This will take you to your booking page. From here you can click the 'View All Bookings' button to display all your booked rooms and total cost of the rooms. You can select the 'Look for Rooms' button on this page to go back to book additional rooms.
 
 * Lastly you are able to logout by clicking the 'Log Out' button. This will clear your customer info and take you back to the login page.

![LogOut](https://user-images.githubusercontent.com/97068979/165395313-7252e6b6-1110-4103-9b13-ddb2fe8eabdb.gif)

## Contributors

* Shane Warning [GitHub](https://github.com/shanekwarning)


## Challeneges
 * The challeneges for this project included working with fetch requests and timing. Learning to incorporate functions that were time sensitive inside .then() was a major break through. Another challenge was using two iterator methods in one function. The difficulty was having them in the correct order so that they would iterator over all needed data.

## Future Additions

 * Having the booked dates sort by date.
 * Having the customer be able to view, prior bookings, todays bookings, and future bookings.
 * Add photos to room information display cards.
 * Create a cancel button for the confirm reservation cards.

## Testing

 * Tests have been built into the application for the classes. You can run the tests by running 'npm test' in the terminal.
