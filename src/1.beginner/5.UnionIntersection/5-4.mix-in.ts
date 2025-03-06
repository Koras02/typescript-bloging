class Person {
    constructor(public name: string) {}
}

interface Loggable {
    log(name: string): void;
}

class ConsoleLogger implements Loggable {
    log(name: string) {
        console.log(`Hello, I'm a ${name}`);
    }
}

function extend<First extends {}, Second extends {}>(
    first: First,
    second: Second
): First & Second {
    const result: Partial<First & Second> = {};

    // first의 프로퍼티 복사
    for (const prop in first) {
        if (first.hasOwnProperty(prop)) {
            (result as First)[prop] = first[prop];
        }
    }

    // second의 프로퍼티 복사
    for (const prop in second) {
        if (second.hasOwnProperty(prop)) {
            (result as Second)[prop] = second[prop];
        }
    }

    return result as First & Second;
}

// ConsoleLogger의 인스턴스를 생성
const logger = new ConsoleLogger();
const jak = extend(new Person("jak"), logger);

// jak 객체에서 log 메서드 사용
jak.log = logger.log.bind(logger); // log 메서드를 바인딩
jak.log(jak.name); // "Hello, I'm a jak"
