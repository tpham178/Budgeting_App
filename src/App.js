function App() {
  const expense = [
    {
      id: 'e1',
      title: 'Gaming PC',
      amount: 1200,
      date: new Date(2023, 5, 1),
    },
    {
      id: 'e2',
      title: 'Gaming Monitor',
      amount: 400,
      date: new Date(2023, 5, 3),
    },
    {
      id: 'e3',
      title: '3-piece suit',
      amount: 350,
      date: new Date(2023, 5, 20),
    },
  ];
  return (
    <div>
     <h2>Let's get started</h2>
     <div className="expense">

     </div>
     </div>
  );
}

export default App;
