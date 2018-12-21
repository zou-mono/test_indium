function test() {
    var a = 1;
    var b = 2;
    a = 555;
    b = 567;
    c = b - a;

    console.log("OK");
}

function test2(a){
    var c = 111;
    console.log(a + c);
}

function test3(a){
    var c = 111;
    console.log(a + c);
}

function test4(a){
    var c = 111;
    console.log(a + c);
}

test2(2);
test3(4);
test4(3);

