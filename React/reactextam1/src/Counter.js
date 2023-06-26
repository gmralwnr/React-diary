import React,{useState} from 'react';  //상태를 입력하려면 import react ->useState 사용
const Counter = () =>{
   
    //기본값이 0에서 출발
    // 1씩증가 하고
    //1씩 감소
    //count 상태
    
    
    //useState 메서드 -> 배열을 반환 하고 0번째 인덱스 count  return 값을 표시 
    //count 함수를 변환하는 setCount
    //useState(0); => count 0 으로 표현 
    const[count, setCount] = useState(0); 

    const onIncrease = () =>{
        if(count <10)
        setCount(count +1);
    };
    const onDecrease = () =>{
       
        if(count !=0 ){
            setCount(count -1);
        }
    };

    const[count2, setCount2] = useState(0); 

    const onIncrease2 = () =>{
      
        setCount2(count2 +1);
    };
    const onDecrease2 = () =>{
            setCount2(count2 -1);
       
    };


    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>


            <h2>{count2}</h2>
            <button onClick={onIncrease2}>+</button>
            <button onClick={onDecrease2}>-</button>
        </div>
    )
};

export default Counter;