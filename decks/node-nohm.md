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

### The Setup
code src="node/nohm-setup.js" highlight=''

- You first want to require nohm and redis
- Once Redis is connected set the Redis Client as the Nohm Client
- Now you should be ready to start building your first Nohm Model
---

### Basic Usage
code.slide src="node/nohm-model.js" highlight='' lines='1-2'

- You may either choose the <u>incremental scheme</u> or provide a <u>custom method</u> for generating unique ids.
- By default the ids associated with the instance are unique strings and are generated on the first save call.
---

### Basic Usage
code.slide src="node/nohm-model.js" highlight='' lines='1-3'

- Defining the properties is one of the most important pieces
- A Model can consist of:
  - <em>type</em> - String/Function
  - <em>defaultValue</em> - Any value (If Not Defined - 0)
  - <em>validations</em> - Array of strings/arrays/methods
  - <em>index</em> - Boolean
  - <em>unique</em> - Boolean
  - <em>load_pure</em> (false by default)
---

### Basic Usage
code.slide src="node/nohm-model.js" highlight='' lines='1-5'

- Supported Types:
- <strong>string, integer, float, boolean, timestamp and json </strong>
- <em>String</em> : Normal javascript string
- <em>Integer / Float</em> : Parsed Int(base 10) or Float and defaults to 0 if NaN
- <em>Boolean</em> : Casts to boolean (except ‘false’ string, which casts to false boolean)
- <em>Timestamp</em> : Converts Date to Timestamp Milliseconds From Epoch. (Can Be ISO String with TimeZone, Or Any new Date() string)
- As a User Defined Method With value as the first arg
---

### Basic Usage
code.slide src="node/nohm-model.js" highlight='' lines='3-6'

- Unique allows for unique index among all instances of this model
- There are three kinds of indexes: unique, simple and numeric
- Unique is the fastest .find() lookups
- Case Insensitive. Empty strings are not unique
---

### Basic Usage
code.slide src="node/nohm-model.js" highlight='' lines='3-11'

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

### Basic Usage
code.slide src="node/nohm-model.js" highlight='' lines='14'

- If you want your model to have custom methods you can define them here
- They will be bound to the model and have 'this' context being the instance of the model
---

### Basic Usage
code.slide src="node/nohm-model.js" highlight='' lines='14-28'

- Here we have our getByEmail (email index lookup) method
- We use the built in .find() method to lookup by hash property
- This executes an asynchronous Redis lookup with a callback to be fired
- Once an Id is retrieved from the lookup, we load the user object
- If this succeeds we callback the user properties with built-in .allProperties()
---

### The Start of Our User Model
code.slide src="node/nohm-model.js"
---