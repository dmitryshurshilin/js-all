function* SimpleGeneratorExample() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const g1 = SimpleGeneratorExample();
console.log(g1.next()); // { value: 1, done: false}
console.log(g1.next()); // { value: 2, done: false}
console.log(g1.next()); // { value: 3, done: false}
console.log(g1.next()); // { value: 4, done: false}
console.log(g1.next()); // { value: 5, done: false}
console.log(g1.next()); // { done: true}
console.log(g1.next()); // { done: true}

for (let value of g1) {
    console.log(value);
} // Generator is finished, nothing in console

const g2 = SimpleGeneratorExample();
for (let value of g2) {
    console.log(value);
} // 1, 2, 3, 4, 5

let iterableObjectExample = {
    from: 0,
    to: 5,
    *[Symbol.iterator]() {
        for (let value = this.from; value <= this.to; value++) {
            yield value;
        }
    }
};

function* Survey() {
    const questions = [
        "Your name",
        "Your age",
        "Your profession"
    ];

    const answers = [];
    for (let i = 0; i < questions.length; i++) {
        answers.push({
            question: questions[i],
            value: yield questions[i]
        });
    }
    return answers;
}

const survey = Survey();
let answer
answer = window.prompt(survey.next().value);
answer = window.prompt(survey.next(answer).value);
answer = window.prompt(survey.next(answer).value);
console.log(survey.next(answer));
