const obj = {
  id: "10002",
  name: "Eco-Friendly Water Bottle",
  description: "Stay hydrated with our durable, eco-friendly water bottle.",
  price: 14.99,
  currency: "USD",
  imageURL: "https://example.com/images/product-10002.jpg",
};

function List() {
  console.log(Object.entries(obj));
  return (
    <table>
      <thead>
        <tr>
          <th>Key</th>
          <th>Value</th>
          <th>Position</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(obj).map(([key, value], position) => {
          return (
            <tr>
              <td>{key}</td>
              <td>{value}</td>
              <td>{position}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default function Assignment3() {
  return <List />;
}
