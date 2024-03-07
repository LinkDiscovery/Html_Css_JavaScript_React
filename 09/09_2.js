let arr = ['가', 1, '나', 2, '다', 3]; // window + ' . '
// 배열 map 함수(react에서 엄청 중요함) 
console.log("배열 map함수");
//arr.map() 메소드 이해 잘하기 콜백함수를 가진다. 
// 변하기 전 
// arr.map((v) => {
//   console.log(v)
//   return v+'🤦‍♂️';

// } );
// 인덱스를 받아 준다. 값하고 인덱스 받아줄때는 map를 사용한다. map 이라는게 인덱스랑 value를 알려준다.
let arr2 = arr.map((v, i) => {
  console.log(v, i)
  return v + '🤦‍♂️' + i + '❤';
});

console.log(arr2)

// 콜백의 인수가 1개인 경우는 () 생략가능 
arr2 = arr.map((v) => v + '🤦‍♂️'); // 첫번째 v 에 ()가 있어도 된다.
console.log(arr2)
// 콜백의 body에 실행문이 없고 return문만 있으면 {}와 return 생략 가능**

// filter 
let arr21 = [];
for(let item of arr){
    if(isNaN(item))arr21.push(item);
}
console.log(arr21)

arr2 = arr.filter(v=> (isNaN(v)) ) // return 값에 조건식이 들어간다.
console.log(arr2)

//-------------------------------------------
// map()과 filter()는 배열에만 사용가능 
//-------------------------------------------

//오브젝트 (Jason타입과 관련있다.)

let obj = { '😊': 1, '👏': 2, '❤': 3, }
console.log("오브젝트 : ", obj);
//tailing 쉼표 맨끝에 ','를 넣어도 오류가 나지 않는다.
console.log("오브젝트 요소 접근:", obj['😊'])

//오브젝트 순회
for (let i in obj) {
  console.log("오브젝트 : ", obj[i]);
}


for (let c of Object.entries(obj)) { // 오브젝트는 of만으로 하기 어렵기 때문에 entries를 사용해야함 
  console.log("오브젝트 : ", c); // 배열이 됌 
  console.log("오브젝트 키 : ", c[0]);
  console.log("오브젝트 값: ", c[1]);
}

for (let [k, v] of Object.entries(obj)) { // 구조분해 할당
  console.log("오브젝트 키 : ", k);
  console.log("오브젝트 값: ", v);
}

console.log("오브젝트 키배열 :", Object.keys(obj));
let arr3 = Object.keys(obj).map(k=>k +obj[k]);
console.log("arr3=",arr3);

//전개연산자

let arr22 = [...arr];
console.log("전개연산자: ",arr22)
//push or map 을 통해서 값 한개씩 추가한걸 전개연사자를 통해서 넣음
// 더보기 와 같은 창에서 사용 





