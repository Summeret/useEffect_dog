import { useState, useEffect } from "react";

function Dog1(){
    const [dog, setDog] = useState(null);

    //api 주소 불러오기(async + await 활용)
    //async function 비동기함수명(){ try{}catch{} }
    //const 비동기함수명 = async()=>{  try{}catch{} }
    //useEffect 마운트:컴포넌트 처음 렌더링 시 실행 훅
    //useEffect(()=>{},[]) //기본형태
    useEffect(()=>{
        async function getDog(){
            try{
                //const response = await fetch('api주소'); //데이터 불러오기
                //const datd =await response.json(); //데이터 JSON변환(리액트에서 사용하기 위해 변환)
                const response = await fetch('https://dog.ceo/api/breeds/image/random');
                const data = await response.json();
                console.log(data.message);
                setDog(data);
            }catch(error){
                console.error('강아지 로딩 실패', error);
            }
        }
        getDog();
    },[]) //처음 렌더링(마운트)

    //useSate의 dog값이 빈 값일 경루 풀력 조건문
    if(!dog) return <div>강아지 사진 로딩 중...</div>

    return (
        <>
            <h1>강아지 보여줘!</h1>
            <img src={dog.message} alt="" />
        </>
    )
}
export default Dog1;