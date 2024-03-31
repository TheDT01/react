import ListGroup from "./components/ListGroup";

function App() {
  let item = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Philadelphia",
    "Phoenix",
  ];
  return (
    <div>
      <ListGroup item={item} heading="cities" />
    </div>
  );
}

export default App;
