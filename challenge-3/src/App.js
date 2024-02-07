import Challenge3 from "./Challenge3";

function App() {
    return (
        <div>
            <h3>Challenge - 3</h3>
            <p>Conditional Rendering Puzzle: Build a react component that renders "Hello World" initally. After "5" sec
                change the text to "Goodbye!" without using any external state management libaries / timer
            </p>

            <p>Updated the question with added the timer as well and once the message is changed stop the timer</p>
            <Challenge3 />
        </div>
    )
}

export default App;
