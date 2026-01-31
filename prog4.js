function foo(){
    return function(){
        console.log(`what gets printed?`);
    };
}
foo
foo();
foo()();