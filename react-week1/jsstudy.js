function test1() {
  const animals = [
    "강아지",
    "고양이",
    "햄스터",
    "강아지",
    "고양이",
    "고양이",
    "토끼",
  ];
  let count = 0;
  let result = animals.map((item) => {
    "고양이" === item ? (count += 1) : count;
  });

  console.log(count);
}

function test2() {
  const animals = [
    "복슬 강아지",
    "검정 고양이",
    "노란 햄스터",
    "강아지",
    "노랑 고양이",
    "고양이",
    "흰 토끼",
  ];

  const result = animals.filter((value) => {
    let animal = value;

    return animal.indexOf("고양이") !== -1;
  });
  console.log(result);
}

function test3() {
  const dogs = ["검은 강아지", "노란 강아지", "흰 강아지"];
  const cats = ["검은 고양이", "복슬 고양이", "노란 고양이"];
  let result = dogs.concat(cats);

  console.log(result);
}
test3();
