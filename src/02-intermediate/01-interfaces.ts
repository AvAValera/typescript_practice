interface Person {
    firstName: string,
    lastName: string,
    age: number,
    gender: "Male" | "Female"
}

interface Contact  {
    phone: string,
    email: string,
    city: string,
    street: string,
    house: number,
    country?: string
}

interface Character extends Person, Contact{
    skills: string[],
    career: string,
    experience: number
}

interface Character {
    isWorked: boolean
}

interface UserFunc {
    say: (word: string) => void
}

const s : UserFunc = {
    say: word => {
        console.log(word);
    }
}
s.say("Hi")