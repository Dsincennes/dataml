1. Linking Contact Us Form with the database:

    1. We will be storing all the data entered by the user in our Contact Us Form into our DynamoDB database.
    2. In order to do so, We need access Keys.
    3. Go to Aws dashboard -> Services -> search "Identity and Access Management (IAM) " -> click "Users".  Refer (image.png).

    4. Every user can create their access keys and provide roles with them.
    5. In my case, i have created access keys under my own username.
    6. Click "manveer"      refer (image-1.png)
    
    At this point you would be able to see 2 access keys on right hand side of the screen.

    I have used these access keys in awsConfig.js file and then created an object called dynamodb. Later on i have used this object to store data into the ContactUsFrom table as you can see in Dynamo DB.
    Services -> DynamoDB -> Tables -> ContactForm

    refer (image-2.png)

    Note : If you are unable to see any table on the dashboard then make sure your region on the top is "US East (N. Virginia)"

    Note : For Directorship form, we have used the same process to store the data into the DirectorshipEnquiries table.
     
2. In case you want new access keys

    Go to Services -> IAM -> Users

    Whichever user you want to create access keys for, click that user. Click "Security Credentials" -> go down and click on " Create access key". For use case, i would prefer to select "Command Line Interface (CLI)" option. Select the check box and then click Next. On next page, click "Create Access key".

    refer (image-3.png)
    
    Once you have new access keys, you can use those in your code to connect your form to the database.

    Note : You might need to install and import new CLI libraries in order to use the access keys and connect it to the database.