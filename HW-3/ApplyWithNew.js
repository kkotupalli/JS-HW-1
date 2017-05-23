function Construct(Class, ...arg){
    var obj - Object.create(Class.prototype);
    Class.apply(obj, arg);
    return obj;
}
