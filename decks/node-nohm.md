# Nohm
---

### Nohm
- Node Object Hash Mapper
- An object relational mapper (ORM) written for node.js and redis.
- Define your model properties, custom methods and let nohm do the rest.
- Browser / Server Shared Validations
- Nohm supports simple .save(), .delete(), .load(), .find(), .sort(), .link()
- Indexing Models By Specific property - index : true
- Nohm has built in pub/sub support. Subscribe to models and allow others to get updates
---

# So How's It Work?
---

### ./app
- Require Nohm in app.js
code.slide src="node/nohm-model.js" highlight='' lines='1'
- Set the Nohm Client to redisClient
code src='node/nohm-setClient.js' highlight='Nohm.setClient'
- Now Nohm is set to use Redis to store the Object Hash mappings
---

### ./lib/models/user
- Require Dependencies
code.slide src="node/nohm-model.js" highlight='' lines='1-3'

- Start building the User Model
code.slide src="node/nohm-model.js" highlight='' lines='5-6'
- You may either choose the <u>incremental scheme</u> or provide a <u>custom method</u> for generating unique ids.
- By default the ids associated with the instance are unique strings and are generated on the first save call.
---

### ./lib/models/user
code.slide src='node/nohm-model.js' highlight='email' lines='6-8'

- Defining the properties is one of the most important pieces
- A Model can consist of:
  - <em>type</em> - String/Function
  - <em>defaultValue</em> - Any value (If Not Defined - 0)
  - <em>validations</em> - Array of strings/arrays/methods
  - <em>index</em> - Boolean
  - <em>unique</em> - Boolean
  - <em>load_pure</em> (false by default)
---

### ./lib/models/user
code.slide src="node/nohm-model.js" highlight='type' lines='8-9'

- Supported Types:
- <strong>string, integer, float, boolean, timestamp and json </strong>
- <em>String</em> : Normal javascript string
- <em>Integer / Float</em> : Parsed Int(base 10) or Float and defaults to 0 if NaN
- <em>Boolean</em> : Casts to boolean (except ‘false’ string, which casts to false boolean)
- <em>Timestamp</em> : Converts Date to Timestamp Milliseconds From Epoch. (Can Be ISO String with TimeZone, Or Any new Date() string)
- As a User Defined Method With value as the first argument
---

### ./lib/models/user
code.slide src="node/nohm-model.js" highlight='unique' lines='9-11'

- Unique allows for unique index among all instances of this model
- There are three kinds of indexes: unique, simple and numeric
- Unique is the fastest .find() lookups
- Case Insensitive. Empty strings are not unique
- Index sets a database index for the specified key/model
---

### ./lib/models/user
code.slide src="node/nohm-model.js" highlight='validations' lines='11-15'

- You can use multiple built in Nohm validators for each property
- Custom Methods must be async with 3 arguments: new_value, options and callback.
- Some Supported Validators:
  - notEmpty(value) <br/>
    min / max(value, options)<br/>
    email(value, options)<br/>
    url(value, options)<br/>
    date(value, options)<br/>
    dateISO(value, options) <br/>
    number(value, options)<br/>
---

### ./lib/models/user
- Add in the password field
code.slide src="node/nohm-model.js" highlight='' lines='17-22'
---

### ./lib/models/user
code.slide src="node/nohm-model.js" highlight='' lines='24'

- If you want your model to have custom methods you can define them here
- They will be bound to the model and have 'this' context being the instance of the model
---

### The Base Of The User Model
code.slide src="node/nohm-model-fixed.js" highlight=''
---