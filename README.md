# MERN Zustand Auth - Authentication and Authorization with JSON Web Tokens

This is a simple user authentication application using email and password. In which you can only access the url of the profile if you previously authenticate through a login.

The frontend is developed with React, TypeScript and zustand as global state handler and data persistence as the token. In the backend we use the jsonwebtokens library to validate a user who logs in.

![](https://i.ibb.co/hdJ8F6M/mern-zustand-auth.png)

## 💻 Quick start

### Backend

To deploy this project, you must first install the node_modules packages. To do this, open a console with the path of the project's server folder and run:

```bash
npm install
```

Next, create a `.env` file in the project's server directory with the following environment variables:

    PORT=<Port>

Finally, in this terminal run:

```bash
npm run dev
```

### Frontend

As in the backend you need to load the node_modules from the client folder through the `npm install` command, finally run also `npm run dev` to launch the client application.

## 📚 References

- 🔗 [MDN: CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- 🔗 [NPM: CORS package](https://www.npmjs.com/package/cors)
- 🔗 [Intro to JSON Web Tokens](https://jwt.io/introduction)
- 🔗 [NPM: jsonwebtoken package](https://www.npmjs.com/package/jsonwebtoken)
- 🔗 [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
