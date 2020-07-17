1. What problem does the context API help solve?
    It is aimed at solving the problem of prop drilling.
2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions are functions that dispatch a reducer. Reducers define our initial state, and handle cases that set state respectively. The store is simply a global state storage area to which all components can freely access the same props as long as they're wrapped in the provider.
3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state is global and component state lives withing the individual component, although can be passed on through props to sub components.
4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Thunk allows you to call action creators that return functions rather than action objects.
5. What is your favorite state management system you've learned and this sprint? Please explain why!
    Redux, while complicated and large, is just too versatile and all-inclusive in functionality, I will be using it.
