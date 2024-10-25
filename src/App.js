
import './App.css';
import Header from './components/Header';
import Tarif from './components/Tarif';

function App() {
const cards=[{name:100,class:"card1", speed:"250ms", text:"Объем включенного трафика не ограничен" , button:"Выбрать тариф"},{name:200 ,class:"card2", speed:"300ms" ,text:"Объем включенного трафика не ограничен", button:"Выбрать тариф"},{name:300, speed:"400ms",class:"card3", text:"Объем включенного трафика не ограничен", button:"Выбрать тариф"}];


  return (
    <div className="App">
    <Header/> 
    <div className="ListOfCard">
    {
      cards.map(item=> <Tarif name={item.name} speed={item.speed} text={item.text} class={item.class} button={item.button}/>)
    }
    </div>
   </div>
    
  );
}

export default App;
