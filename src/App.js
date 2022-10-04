import Header from "./components/Header";
function App() {
  return <Header title={1} />; //passing in number props while we declated the type to be string would give an wrros
} //Failed prop type: Invalid prop `title` of type `number` supplied to `Header`, expected `string`

export default App;
