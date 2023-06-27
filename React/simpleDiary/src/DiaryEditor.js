import {useState} from "react";

const DiaryEditor = () =>{
    
    //const [author , setAtuhor] = useState("");
    //const [content, setContent] = useState("");
    
    //위에 두줄을 한줄로 정리 
    const [state, setState] = useState({
        author : "",
        content :"",
        emotion:1 ,
        
    });

    //글 작성 후 반환
    const handleOnchange = (e) =>{
        console.log(e.target.value);
        console.log(e.target.name);

        setState ({
            ...state, //author : author , content : content
            [e.target.name] : e.target.value,
        });
    };

    //submit
    const handleSubmit = () =>{
        console.log(state);
        alert("저장 되었습니다");


    }
    return <div className='DiaryEditor' >
        <h2>오늘의 일기</h2>
        <div>
        <input name="author" 
            //value={author} 
            value={state.author} 
            onChange ={handleOnchange}
            //onChange={(e) =>{
                //console.log(e.target.value);
                //console.log(e.target.name);
                //setAtuhor(e.target.value);
                /*setState({
                    //같은 객체 안에 있어서 동시에 다 같이 적어야하는 불편함이 있음
                    //author: e.target.value,
                    //content: state.content,
                    //스프레드 연산자를 사용하면
                    ...state, //author : author , content : content
                    author: e.target.value, //...state 순서도 중요 

                });*/
                
           // }}
        /> 
        </div>
        <div>
            <textarea
                name = "content" 
                //value = {content}
                value={state.content}
                onChange ={handleOnchange}
                /*
                onChange={(e) =>{
                    //setContent(e.target.value);
                    setState({
                        ...state, //author : author , content : content
                        content: e.target.content,
                    });
                
                }}
                */
             />
        </div>
        <div>
            오늘의 감정점수 : 
             <select name="emotion" 
                value={state.emotion} 
                onChange={handleOnchange}>
                
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>

            </select>

        </div>

        <div>
            <button  onClick={handleSubmit}>일기 저장하기 </button>
        </div>
    </div>
    
};

export default DiaryEditor;