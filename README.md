# React with MobX


### **2 x Data Stores**
1. UI State
> It might very well be that these pieces of information start as internal state of a specific component (for example the visibility of a toolbar). But after a while you discover that you need this information somewhere else in your application. Instead of pushing state in such a case upwards in the component tree, like you would do in plain React apps, you just move that state to the ui-state-store.
2. Domain State
 
> The main responsibility of stores is to move logic and state out of your components into a standalone testable unit that can be used in both frontend and backend JavaScript.

- MobX State Tree - https://github.com/mobxjs/mobx-state-tree)

**Debugging**
- Dev Tools - npm install mobx-react-devtools
