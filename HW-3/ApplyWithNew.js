function factory(){
    return {
        createGreeting() {
           return construct(Greeting, arguments);
        }
    }
}
function construct(Class){
    return new(Class.bind.apply(Class, arguments))()
}
