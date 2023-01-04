
const $text_1 = document.getElementById("center-praise-1");
const $text_2 = document.getElementById("center-praise-2");

// 글자 모음
const letters_1 = [
    "Under Grace,",
    "Anything But",
    "4000 Bartizan Movement",
    "Jesus Is",
    "In God",
];

const letters_2 = [
    "No Choice But To.",
    "In Everything.",
    "237 Healing Movement.",
    "Crist.",
    "We Trust."
]

// 글자 입력 속도
const speed = 100;
let i = 0;

// 타이핑 효과
export const typing = async () => {
    const letter_1 = letters_1[i].split("");
    const letter_2 = letters_2[i].split("");
    
    while (letter_1.length) {
    await wait(speed);
    $text_1.innerHTML += letter_1.shift(); 
    }

    while (letter_2.length) {
    await wait(speed);
    $text_2.innerHTML += letter_2.shift();
    }
    
    // 잠시 대기
    await wait(1000);
    
    // 지우는 효과
    remove();
}

// 글자 지우는 효과
const remove = async () => {
    const letter_1 = letters_1[i].split("");
    const letter_2 = letters_2[i].split("");
    
    while (letter_2.length) {
    await wait(speed);
    
    letter_2.pop();
    $text_2.innerHTML = letter_2.join(""); 
    }

    while (letter_1.length) {
    await wait(speed);
    
    letter_1.pop();
    $text_1.innerHTML = letter_1.join(""); 
    }
    
    // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
    i = !letters_1[i + 1] ? 0 : i + 1;
    typing();
}

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
    return new Promise(res => setTimeout(res, ms))
}
