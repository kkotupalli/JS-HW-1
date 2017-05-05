function compose(f, g) {
    // Composing two functions here!
    return function (...args) {
        return f(g(...args));
    }
}
