### Lets Talk about Node's Events Module
- What is the Events Module?
- In a Nut Shell its something that:
  - Emits Events
  - Listens to and handles Events
  - Has a Driver That causes the events to be emitted
- This Events Module has an EventEmitter Class which does most of the heavy lifting
- Emit your own events, and let methods attach to them. The EventEmitter makes this easy!
- Node is Event Based, why shouldn't we be able to fire and listen to events.
---

### The EventEmitter
- Most Node objects support the EventEmitter and emit custom events
- lets take the `http` module for example
code src="node/node-event-http.txt" highlight='server.on'
- What if we want to build event emitting support into our modules?
---

### Using Custom Event Emitters
code src="node/node-event-emitter.txt" lines='1-2'
---

### Using Custom Event Emitters
code src="node/node-event-emitter.txt" highlight='events.EventEmitter.call' lines='4-25'
---

### Using Custom Event Emitters
code src="node/node-event-emitter.txt" highlight='this.emit' lines='4-25'
---

### Using Custom Event Emitters
code src="node/node-event-emitter.txt" highlight='this.on' lines='4-25'
---

### Extending the Event Emitter
code src="node/node-event-emitter.txt" highlight='util.inherits'  lines='27-28'
---

### Extending the Event Emitter
code src="node/node-event-emitter.txt"
---

### Lets use this Blog object
Now we want to use this Blog object
code.slide src="node/node-event-binding.txt" highlight='new Blog'
---

### Lets use this Blog object
Now we want to use this Blog object
code src="node/node-event-binding.txt" highlight='MyBlog.on'
term src="node/node-event-call.txt"
---