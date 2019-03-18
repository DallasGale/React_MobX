# React with MobX

## The Basics
Adapted from https://mobx.js.org/

### Data Stores

**1. UI State (ui-state-store)**
- Not alot of logic
- Store loosely coupled pieces of information
- Current theme, language, screen size
- Visibility of elements
etc...

> Using container/class state may be sufficient for some UI but after a while you may need another container/class to use the same state. Instead of pushing that state up like in a standard react way, you will end up putting this state into the **ui-state-store**



**2. Domain State (domain-state-store)**
- Only one instance of the store
- Data that your application is all about. *eg. Orders, books, galleries, media*
- Provides backend integration
- Stores data when needed
- If backend sends updates the existing instances get updated.
- Tests that your store can be run server side

> The main responsibility of stores is to move logic and state out of your components into a standalone testable unit that can be used in both frontend and backend JavaScript.


**3. Domain Objects**
- Expressed as a *class*, or *constructor function*
- Can be expressed as plain objects, but classes offer methods
- Constructor functions can mix *observable* properties and functions, and *non-observable*  properties and methods
- Constructor functions can be strictly type-checked

- MobX State Tree - https://github.com/mobxjs/mobx-state-tree)


## Debugging
- Dev Tools - npm install mobx-react-devtools
