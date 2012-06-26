# Passport
---

### Passport
- Authentication middleware for Node.js.
- Extremely flexible and modular
- Passport can be easily dropped into any Connect/Express-based web app.
#####.slide "Passport uses what are termed strategies to authenticate requests. Strategies range from verifying username and password credentials, delegated authentication using OAuth or federated authentication using OpenID." - passportjs.org
- 40+ of these authentication strategies
- Supports Single sign-on with OpenID and OAuth
- Supports persistent sessions
- Dynamic scope and permissions
- Implement custom strategies
---

### Local Authentication Strategy
- We chose to use the Local Strategy for email/password user based sessions
- This strategy requires a verify callback to verify a user's credentials, calling done when completed
<h3 class='center slide'>This separation is key, keeping the database agnostic</h3>
---

### ./app
- Express allows us the ability to connect to the session with our Authentication methods
- In `app.configure` add
code.slide src="node/passport-setup.js" highlight=''
- This connects Express and its session management to the Passport Authentication Middlewear
- Since we want persistent login sessions we include line 2
---

### Local Strategy With Persistent Session Authentication
- Once the User logs in the session is populated with the current user
- Each subsequent request after the login will only contain a unique cookie that identifies the current session, keeping the credentials 'safe'
- In order to support persistent login sessions, Passport needs to serialize and deserialize user instances.
- These will allow us to lookup the userId and attach the user Object to the current session

<h3 class='slide center'>Lets Get Started, Create : /lib/auth/index.js</h3>
---

### ./lib/auth
- You want to include Passport, the Local Authentication Strategy and Nohm
code.slide src="node/passport-auth.js" highlight='' lines='1-4'

- Now To The serializeUser method
code.slide src="node/passport-auth.js" highlight='' lines='19-21'
- We pass on the user Id so the de-serialize can lookup the user's Id for the User Object
---

### ./lib/auth
- What about de-serializing?
code.slide src="node/passport-auth.js" highlight='' lines='23-32'
- Grab the User Model From the Factory
- Call the built-in .load() looking up user by id index
- Allowing you to save time writing an index load method
- When the Request finishes we fire the done() callback with the appropriate arguments
---

### ./lib/auth
- Now lets implement the Local Strategy
- Define the local method for passport.authenticate to call
- `new LocalStrategy(options, verify)` - `done(err,user [,flashMessage])`
code.slide src="node/passport-auth.js" highlight='' lines='6-17'
---

### ./lib/models/user
- Nohm has a section in the model for local access and model method implementations
- In the methods object create an authenticate method
<pre class='slide'><code class='code' src="node/passport-authenticate.js"></code></pre>
---

### ./routes
- Now we have to tie the Nohm local strategy to the login.post route
code.slide src="node/passport-authenticate-call.js" highlight='post'
- On Verify Success go /home
- On Verify Faulure go /login
---

### Using authenticate and the local strategy
- Now you should be set up to use Passport's Local Strategy with a nice decoupling of the authentication layer
- `./app` (Passport Initialized)
- `./lib/auth` (Defines Strategy)
- `./lib/models/user` (Methods To Query User Record)
- `./routes` (Authenticate is tied to login route)

<h3 class='center slide'>Now Check it out and see if it works!!!</h3>
---



