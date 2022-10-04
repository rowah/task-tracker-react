function App() {
  const name = "Rowa";
  const livesIn = false;
  const city = "Nairobi";
  return (
    //you can only return a single parent element and so putting the h1 out of the div produces an error
    <div className="container">
      <h1>
        Hello {name}, how is {livesIn ? city : "your city?"}
      </h1>
    </div>
  );
}

export default App;
