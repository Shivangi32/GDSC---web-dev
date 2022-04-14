import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';

let todos=[
  {
    sno:1,
    title:"Go to market"
  },
  {
    sno:2,
    title:"learn reactjs"
  },
  {
    sno:3,
    title:"dsa"
  }
];
function App() {
  return (
    <>
      <Header title="My Todos List"/>
      <Todos todos={todos}/>
      <Footer/>
    </>
  );
}

export default App;
