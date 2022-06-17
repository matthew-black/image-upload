# You Can Make This Work:

1. Get a [Cloudinary](https://cloudinary.com/users/register/free) account.
    * For "Select a product," choose "Programmable Media..."
2. When logged-in on cloudinary.com, click the dashboard tab and grab the values that you'll need to add to your `.env` file:
      ```
        CLOUDINARY_CLOUD_NAME = yourName
        CLOUDINARY_API_KEY = yourKey
        CLOUDINARY_API_SECRET = yourTaco
      ```
3. That's about it. 🖖

---

Also, this is real easy to implement with a Heroku-hosted app, too. Instead of a `.env` file, Heroku has a `Config Vars` GUI where you can add key/value pairs. (Just like the local `.env` file.)
