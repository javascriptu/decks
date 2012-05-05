Model - View - ViewModel
==============================

---
# Follow Along<br />[bit.ly/sdjs-mvvm]()
---

## Software Design Patterns

- Software design patterns provide a template or methodology for solving common development issues.
- In our case we will use them to separate our code from our UI.
- MVC, MVP, MVVM are the most commonly used patterns.

---
## Software Design Patterns
#### MVC

- Stands for: Model - View - Controller.
- The oldest of the design patterns. MVP and MVVM are attempts to improve upon this pattern.
- Model &mdash; The domain specific data (e.g. User email, name, etc.). 
- - __Note:__ In all of the patterns the way a Model is used does not change.
- View &mdash; The UI, what the user interacts with.
- Controller &mdash; Takes the user input, manipulates the model and loads the view.
- Used in: Ruby on Rails, CodeIgniter and BackboneJS.

---
## Software Design Patterns
#### MVC

<img src="img/workshop/3/mvc-pattern.jpg" alt="MVC Pattern" />

---
## Software Design Patterns
#### MVP

- Stands for: Model - View - Presenter.
- An improvement upon MVC.
- Created to facilitate the automation of unit testing.
- The presenter takes the place of the controller.
- Retrieves data for the View, converts it if needed, and sending to the View.
- Also gets data from the Model and updates the View.
- Allows for 2-way communication between Presenter and View.
- 1 Presenter per View.

---
## Software Design Patterns
#### MVP

<img src="img/workshop/3/mvp-pattern.jpg" alt="MVP Pattern" />

---
## Software Design Patterns
#### MVVM

- Stands for: Model - View - ViewModel.
- Newest pattern created by Microsoft for use with Silverlight and WPF.
- Allows for 2-way communication.
- ViewModels bind themselves to Views.
- ViewModels synchronize the View and Model by listen to updates in both directions.
- Converts data if needed.
- 1 ViewModel per View. 

---
## Software Design Patterns
#### MVVM

<img src="img/workshop/3/mvvm-pattern.jpg" alt="MVVM Pattern" />

---
# How MVVM is used in JavaScript

---
## MVVM

- Several JavaScript Libraries (KnockoutJS, Kendo MVVM, KnockBackJS) make use of this pattern.
- This pattern is well suited for web applications that perform several tasks without the page being reloaded.
- Data-binding is used to monitor changes to the View and perform updates accordingly.
- UI Designers can create the Views and plugin the data-binding without affecting the ViewModel and Model layers.
- Unit tests can easily be done with ViewModels.
- Data can be mocked-up to allow for concurrent development of UI and Code.

---
## MVVM
#### Models

- Contains domain specific data.
- Usually just passes data from the Server but can also have validation functions (i.e. test if email address is valid.).

	code src="mvvm/mvvm-model-basic.js"
	
---
## MVVM
#### Models

- Holds domain specific data.
- Receives data from ViewModel and updates server.
- Makes new requests for data (via Ajax) and pushes information to ViewModel.
- Models do not communicate with the View directly.
- Doesn't transform any data that is the job of the ViewModel.

---
## MVVM
#### ViewModels

- The "Man-in-the-middle".
- Manages the 2-way data-binding.

	code src="mvvm/mvvm-viewmodel-basic.js"

---
## MVVM
#### ViewModels

- Updates/Gets information from the View and ViewModel pass passes it along.
- Responsible for keeping everything in sync.
- 1 ViewModel per View.

---
## MVVM
#### Views

- A View is just the document that the user interacts with. In our case the HTML document.

	code src="mvvm/view-no-binding.txt"
	
- Adding data-bindings to elements allows the ViewModel to update it.

	code src="mvvm/view-with-binding.txt" highlight="data-bind"
	
---
## MVVM
#### Views

- Views can even perform logical functions inside the binding.

	code src="mvvm/views-logic.txt" linewrapping="true"
	
---
## MVVM
#### Views

- UI Designers can set data-bindings that ViewModels will attach to.
- With frameworks like KnockoutJS you can add functions inside the View.

---
## Final Thoughts

- Advantages:
	
	- Allows for parallel development of UI and Backend code that powers it.
	- UI Designers can easily mockup datasets for development.
	- Easier to perform Unit or TDD tests on ViewModels than on event driven functions.
	
- Disadvantages:

	- For smaller projects this might be overkill.
	- Data-bindings can take more work to keep track of as the project grows.
	- In large application planning ViewModels can be a little more difficult to implement.
	
---
## Find Out More

- MVVM:
	
	- [Addy Osmani](http://addyosmani.com)
	- [MVVM Foundation](http://mvvmfoundation.codeplex.com/)
	
- Frameworks:

	- [KnockoutJS](http://knockoutjs.com)
	- [Kendo MVVM](http://www.kendoui.com/)
	- [KnockBackJS](https://github.com/kmalakoff/knockback)