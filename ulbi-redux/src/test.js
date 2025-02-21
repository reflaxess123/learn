function* generatorFunction() {
    for (let index = 0; index < 5; index++) {
        yield index;
    }
}

const iter = generatorFunction();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
