

const Foo = function(a){
    function biz(){
        return a
    }
    this.bar = function(){
        return a
    }
}
Foo.prototype =  {
    box: function(){
        return a
    }
}

const obj1 = new Foo(3)
console.log(obj1)