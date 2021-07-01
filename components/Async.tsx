function Async() {
  console.log('<Async /> renders')

  return (
    <div>
      Async
      <button onClick={() => alert('hydrated')}>Test</button>
    </div>
  )
}

export default Async
