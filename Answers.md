1. What problem does the context API help solve?

Addressed prop drilling if an app has many components nested many levels deep. It allows the component to access the state without having to have it passed down the component tree.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions: associated with the event listeners in an app. Based on which event listeners a user interacts with, it will send an action to dispatch to the reducer.

reducers: reducers return a new piece of state. They interact with the global store based on the actions that are dispatched.

store: this is the global store in redux that allows the component to access state without having to drill down on props.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state is stored locally while application state may not be. Component state is not accessible to other components unless passed down via props. Application state can (ie Global Store)

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

This allows for promise-based functions to run in between the action and reducer. This allows for finite state machines in an app. It changes action-creators by allowing multiple things to be dispactched in one call.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

So far I like redux even though it is very intricate. It is something that is widely used and will be useful in our future careers. I like that it is declarative. 
