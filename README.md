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
- Data that your application is all about. eg. Orders, books, galleries, media.
- Provide backend integration
- Store data when needed
- If backend sends updates the existing instances get updated.
- Test your store can be run server side

> The main responsibility of stores is to move logic and state out of your components into a standalone testable unit that can be used in both frontend and backend JavaScript.

- MobX State Tree - https://github.com/mobxjs/mobx-state-tree)


## Debugging
- Dev Tools - npm install mobx-react-devtools
