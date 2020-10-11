// @see https://stackoverflow.com/questions/55377365/what-does-keyof-typeof-mean-in-typescript
export const loadMovingTypes = () => {
    // keyof only for an interface
    interface Person {
        name: string
        age: number
        location: string
    }
    type SomeNewType = keyof Person
    let newTypeObject: SomeNewType
    newTypeObject = "name"
    newTypeObject = "age"
    // newTypeObject = "anythingElse" // Error: Type '"anythingElse"' is not assignable to type '"red" | "blue"'
    console.log(`newTypeObject : ${newTypeObject}`);

    // keyof typeof together on an object
    const colors = {
        red: 'red',
        blue: 'blue'
    }
    // console.log(`typeof colors : ${keyof typeof colors}`)
    type Colors = keyof typeof colors;

    let color: Colors; // same as let color: "red" | "blue"
    color = 'red'; // okay
    color = 'blue'; // okay
    // color = 'anythingElse'; // Error: Type '"anythingElse"' is not assignable to type '"red" | "blue"'
    console.log(`color : ${color}`);
}