# React with MobX

## The Basics - adapted from https://mobx.js.org/

### Data Stores

1. UI State (ui-state-store)
> Using container/class state may be sufficient for some UI but after a while you may need another container/class to use the same state. Instead of pushing that state up like in a standard react way, you will end up putting this state into the **ui-state-store**

2. Domain State (domain-state-store)
 
> The main responsibility of stores is to move logic and state out of your components into a standalone testable unit that can be used in both frontend and backend JavaScript.

- MobX State Tree - https://github.com/mobxjs/mobx-state-tree)

**Debugging**
- Dev Tools - npm install mobx-react-devtools
