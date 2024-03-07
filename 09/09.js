//자바스크립트 데이터 타입
//기본 타입 
// let - 바꿀 수 있다
// const - 안 바뀐다
let n1 = 10; // 정수 
let n2 = 10.5; // 실수 
let s1 = "안녕하세요" // 문자열

console.log("정수 : ", n1);
console.log("실수 : ", n2);
console.log("문자열 : ", s1);

//문자열 순회 in 과 of 의 차이 , in은 key값 , of는 문자열 값
for (let i in s1) {
  console.log("문자열 : ", s1[i]);
}

for (let c of s1) {
  console.log("문자열 : ", c);
}
console.log("문자열: ", "녕")


//배열

let arr = ['가', 1, '나', 2, '다', 3]; // window + ' . '
console.log(arr);
console.log("배열의 요소 접근:", arr[1])

//배열의 순회
for (let i in arr) {
  console.log("배열 : ", arr[i]); // 배열의 인덱스에 있는 값을 출력한다.
}

for (let c of arr) {
  console.log("배열 : ", c); // c에 배열의 값을 가져와서 출력한다.
}



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

// 오브젝트로 바꾸어 보자 
let obj = { '😊': 1, '👏': 2, '❤': 3, }
console.log("오브젝트 : ", obj);
//tailing 쉼표 맨끝에 ','를 넣어도 오류가 나지 않는다.
console.log("오브젝트 요소 접근:", obj['😊'])

//오브젝트 순회
for (let i in obj) {
  console.log("오브젝트 : ", obj[i]);
}


for (let c of Object.entries(obj)) {
  console.log("오브젝트 : ", c);
  console.log("오브젝트 키 : ", c[0]);
  console.log("오브젝트 값: ", c[1]);
}

for (let [k, v] of Object.entries(obj)) {
  console.log("오브젝트 키 : ", k);
  console.log("오브젝트 값: ", v);
}
////////////////////////////////////////////////////////////////////////////////////

//arr3 만들기 
let arr3 = [];
console.log("arr3 = ", arr3)

//반복문으로 
for (let item of arr) {
  arr3.push(item);
}
console.log("반복문으로 arr3 = ", arr3)

// 배열 map 함수
console.log("배열 map함수")
arr3 = arr.map((v, i) => {
  console.log("map=> v:", v, "map=>i:", i)
})

//arr1 만들기
let arr1 = [0, 0, 0, 0, 0, 0]
for (let i in arr) {
  arr[i] = arr1[i];
}
console.log("반복문 첨자로", arr1)


// filter 
let arr21 = [];
for(let item of arr){
  
}