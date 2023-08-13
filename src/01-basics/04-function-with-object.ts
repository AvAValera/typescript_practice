function printPoint(points: { x: number, y: number }): void {
    console.log(`Point X ${points.x} Point Y ${points.y}`);
}

const point1 = {
    x: 1,
    y: 2,
    z: 3
};

printPoint(point1);

function sayHello(human: { firstName: string, lastName?: string }): void {
    if (human.lastName) {
        console.log(human.firstName.toLowerCase(), human.lastName.toLowerCase());
    } else {
        console.log(human.firstName.toLowerCase());
    }
}

sayHello({firstName: "Well"});

interface Points {
    x: number,
    y: number,
}


function coordinates(point: Points):void{
    console.log(point.x, point.y);
}

coordinates({x: 1, y:3})