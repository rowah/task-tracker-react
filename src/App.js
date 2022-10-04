//if we use class component instead of a function component
import React from "react";
import Header from "./components/Header";
// function App() {
//   return <Header />;
// }
class App extends React.Component {
  render() {
    return <h1>Hello from a Class Component</h1>;
  }
}

export default App;
