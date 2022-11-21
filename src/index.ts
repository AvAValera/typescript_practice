interface Man {
    name: string;
    age?: number;
}

const personFirst: Man = {
    name: "Well",
    age: 30,
};

function checkAge(man: Man): boolean{
    if(typeof man.age === "number"){
        return true;
    }
    else{
        return false;
    }
}

function showMan(man: Man) {
    if(checkAge(personFirst)){
        console.log(man.name, man.age);
    }
    else{
        console.log(man.name);
    }
}

showMan(personFirst);