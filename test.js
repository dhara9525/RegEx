var openFile = function (event) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function () {
        var text = reader.result;
        debugger
        var node = document.getElementById('output');
        node.innerText = text;
        console.log(reader.result.substring(0, 200));

        var node1 = document.getElementById('output1');
        node1.innerText = foo(text);

        var node2 = document.getElementById('output2');
        node2.innerText = patternMatch1(text);

        var node3 = document.getElementById('output3');
        node3.innerText = phoneNumber(text);
    };
    reader.readAsText(input.files[0]);
};

var foo = function (text) {
    return (text.match(/\w{4}/g));
}


var patternMatch1 = function (text) {
    return (text.match(/b.t/g));
};

var phoneNumber = function (text) {
    return (text.match(/\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})/));
}


//String regEx = "b.t";


/* var string_1 = 'ABCDEF 1234 XYZ';
 var string_2 = 'dhara@dhara.dhara  @fght@gt.com fght@gt.com';
 var c=(string_1.match(/^\w{4}$/g));
 console.log(string_1.match(/\d/g));
 console.log(string_1.replace(/\s/g, ':'));
 console.log(c);
 console.log(string_2.match(/^\w+@\w+.\w+/g)); */