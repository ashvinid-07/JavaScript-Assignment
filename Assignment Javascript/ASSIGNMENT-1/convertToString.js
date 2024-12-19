function convertToString(input) {
    if(input === null || input === undefined){
        input = String(input);
    }else if (typeof input !== "string") {
        input = input.toString();
    }
    document.write("typepf &nbsp;",input, " : ",typeof input, "<br>");
}

var arr = [2,7,9,3,6];
convertToString(arr);

var num = 30;
convertToString(num);

var boolean = true;
convertToString(boolean);

var Und = undefined;
convertToString(Und);

var nullType = null;
convertToString(nullType);
