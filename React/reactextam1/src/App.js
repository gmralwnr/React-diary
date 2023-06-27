//import './App.css';

import Myheader from './MyHeader';
import Myfooter from './Myfooter';
import Counter from './Counter';
import OddEventResult from './OddEvenResult';
import Container from './Container';

function App() { //id 가 root안에  디렉토리로 들어갔다
  
  const style={
    App:{
      backgroundColor : "black",
    },
    h2:{
      color:"red",
    },

    bold_text :{
      color:"green",
    },
  }
  let name ="하하" //변수 생성
  const number =5;

  //함수 생성 -> 함수 호출 func()
  const func =()=>{
    return "fnuc";
  };

  const counterProps = {
    a : 1,
    b : 2,
    c : 3,
    d : 4,
    e : 5,
    initialValue : 5,
  };
  //{...counterProps} => 위에 props 
  return (
    <div className="App">
      <Container>
        <Myheader/>
        <Counter {...counterProps}/>  
      </Container>





      <header className="App-header">
         <h2 style={style.h2}> 안녕 리액트 {name} {1-5} {func()}</h2>  
         <b style={style.bold_text} id='bold_text' >React.js 
         <br/> {number} 는  {number %2==0 ? "짝수" :"홀수" }</b>
      </header>
      <Myfooter/>
   
    </div>
  );
}

export default App;  //index.js 에서 import 할 수 있도록 함 
