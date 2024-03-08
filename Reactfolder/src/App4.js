export default function App6() {
    // const [count, setCount] = useState(() => {
    //   return complexFunction() //runs once
    // });
    const [count, setCount] = useState(complexFunction()); //runs on every render
    return (
      <>
        <button onClick={() => setRuns((prevState) => prevState + 1)}>
          Runs({runs})
        </button>
        <button onClick={() => setWickets((prevState) => prevState + 1)}>
          Wickets({wickets})
        </button>
        <button onClick={() => setCount((prevState) => prevState - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount((prevState) => prevState + 1)}>+</button>
      </>
    );
  }