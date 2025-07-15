import { useState, useEffect } from "react";

function Dog3(){
    const [dogs, setDogs] = useState([]); //useEffect 밖에 작성하기!

    //첫 앱 실행 시 강아지 5마리 보이기 위한 마운트처리
    useEffect(()=>{ //useEffect안에 작성하는건 한번 처리하는 것만!
        //api 비동기로 불러오기
        const getDogs = async ()=>{
            try{
                // map함수 이용을 위한 배열 생성하기
                const dogArr = []; //빈배열준비(for생성되는 객체삽입위해)
                for(let i=0; i<5; i++){
                    const response = await fetch('https://dog.ceo/api/breed/maltese/images/random');
                    const data = await response.json();  //await 필수작성
                    //console.log(data);
                    //for가 종료하지 않고 반복할때 반복하는 객체를 위 빈배열에 삽입
                    //배열 삽입 함수 => 배열명.push(값)
                    dogArr.push(data.message) //이미지 경로값을 배열로 삽입
                }
                console.log(dogArr);
                setDogs(dogArr);  //HTML을 위한 상태변수에 배열 삽입하기
            }catch(error){
                console.error('강아지 로딩 실패', error)
            }
        }
        getDogs();
    },[])

    return(
        <ul>
            {/* map함수를 이용해서 li>img 5개 출력 */}
            {/* map함수 이용조건은 접근데이터가 배열이어야한다. */}
            {/* {배열변수.map((데이터,인덱스)=>(실행 JSX))} */}  
            {dogs.map((data,idx)=>(
                <li key={idx}>  {/* map 작성 시 key={idx} 필수작성 */}
                    <img src={data} alt="" style={{width:'200px'}}/>
                </li>
            ))}
        </ul>
    )
}
export default Dog3;