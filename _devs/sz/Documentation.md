## To start the localhost application: 
1. In order to run the code in localhost, first you must do this is git bash: npm install
2. Then change the directory to the frontend folder: cd frontend
3. To start the application: npm start


## To find the database tables associated to the live website in AWS
1. Log into your AWS account
2. In the search bar, look up "DynamoDB" and click on it
3. To ensure you are able to view the tables, in the top right of the web page, ensure the region is "us-east-1" 
4. Then expand the side navbar on the left side of the window using the toggle icon and click "Tables" 
5. Choose the table you want to inspect the information for 
6. Click the button at the top right: "Explore table items" and scroll down to view all table entries


## Navigation bar using React Bootstrap
1. Import Navbar from 'react-bootstrap/Navbar' to the appropriate .jsx file
2. Use the <Navbar> tag as the parent. To make the navbar stick to the top of the page no matter the scroll position, use sticky="top"
3. To make a collapsible navbar, use <Navbar.Collapse> and add a sandwich icon for toggling with <Navbar.Toggle> 


## To add OAuth options (Google/Login with Amazon)
1. In AWS, navigate to Cognito by searching it at the search bar, making sure the location at the top right is "us-east-1"
2. Click on "DataMLUserPool" 
3. Go to "Sign-in experience" and scroll down to the Federated identity provider section and click the "Add identity provider" button
4. Click on the OAuth option of your choice. Use the respective Developers account or make a one if we do not have one. (Credentials stored elsewhere currently for security reasons. Contact SZ if you need to know the credentials) 
5. Follow the instructions as directed by AWS. 
    For Google: https://docs.aws.amazon.com/cognito/latest/developerguide/google.html
    For LoginWithAmazon: https://docs.aws.amazon.com/signin/latest/userguide/how-to-sign-in.html 
6. Once OAuth is set up within the Dev account, note the client ID and secret and go back to AWS and enter the respective info and scopes then click the "Add identity provider" button at the bottom
7. Then go back to the User Pool overview. Find "App integration" and click on it. Scroll to the very bottom and click "DataMLCognitoClient"
8. Scroll to the "Hosted UI" section and click the "Edit" button
9. Under "identity providers", click on the drop down menu and choose the OAuth options you set up, add the OAuth 2.0 grant types, and OpenID connect scopes then click "Save changes" at the bottom
10. To test the Hosted UI, scroll to the Hosted UI section in the app client (steps 7 & 8) and click "View Hosted UI"

