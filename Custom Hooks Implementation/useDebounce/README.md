# useDebounce Custom Hook

This project demonstrates the implementation and usage of a custom `useDebounce` hook in React.

## What is Debouncing?

Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, making them more efficient. In this context, it delays the processing of the input value until the user has stopped typing for a specified amount of time.

## The useDebounce Hook

The `useDebounce` hook takes two parameters:

1. `value`: The input value to debounce
2. `delay`: The time in milliseconds to wait before updating the debounced value

It returns the debounced value, which updates only after the specified delay has passed since the last change to the input value.

### How it Works

1. The hook initializes a state variable `debouncedValue` with the initial input value.
2. It uses `useEffect` to set up a timer whenever the input `value` changes.
3. If the `value` changes again before the timer completes, the old timer is cleared, and a new one starts.
4. When the timer completes, it updates `debouncedValue` with the latest input value.

## Usage Example

In the `App` component:

1. We create a state variable `search` to store the current input value.
2. We use our `useDebounce` hook to create a `debouncedValue`, which updates 2 seconds after the user stops typing.
3. The component renders an input field and displays both the immediate and debounced values.

This setup allows you to see the difference between the immediate input value and the debounced value, which updates after a 2-second delay.

## Benefits

- Reduces the number of unnecessary operations (e.g., API calls, heavy computations) when dealing with rapidly changing input.
- Improves application performance and user experience.
- Can be easily reused across different components and projects.
