import Navbar from "./components/Navbar"

const App = () => {
  const data ={
        appname: "Hari",
        age:21
    };
  const test="hello world"
  return (
      <>

        <p className="text-green-500">{test}</p>
        <Navbar param1={data}/>
      </>
  )
}

export default App