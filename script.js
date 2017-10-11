//Alex Denny
//Javascript problems 11-20
//09/27/2017

function firstLast6(array) {
    var aLength = array.length;
    if(array[0] == 6 || array[aLength - 1] == 6) {
        return true;
    } else {
        return false;
    }
}

//write second method
function has23(array) {
    for (var i = 0; i < 2; i++) {
        if (array[i] == 2 || array[i] == 3) {
            return true;
        }
    }
    if (array[i] != 2 || array[i] != 3) {
        return false;
    }
}

function fix23(array){
    for (var i = 0; i < 3; i++){
    if(array[i] == 2 && array[i+1] == 3){
        array[i+1] = 0;
        }
    }
    return array;
}
//make the program not care for capitalization
function countYZ(stringA){
    var string = stringA.toLowerCase();
    var count = 0;
    var sLength = string.length;
    var letters = string.split("");
    if(string[sLength - 1] == "z" || string[sLength - 1] == "y"){
        count++;
    }
    for(var i = 0; i < sLength; i++){
        if(letters[i] == " "){
            if(letters[i-1] == "z" || letters[i-1] == "y"){
                count++;
            }
        }
    }
    return count;
}

function endOther(string1, string2){
    var length1 = string1.length;
    var length2 = string2.length;
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();
   var string1start = length1 - length2;
    var string2start = length2 - length1;
    var truth = false;

    if(length1 >= length2){
        var result = string1.indexOf(string2);
    }
    else {
        var result = string2.indexOf(string1);
    }
    if (result > -1){
        if(string1.substring(string1start, length1) == string2){
            truth = true;
        }
        if(string2.substring(string2start, length2) == string1){
            truth = true;
        }
    }
    return truth;
}




//find the stars then take stars + 1 and - 1 and remove
function starOut(input){
    var stars = input.split("*").length - 1
        for(var i = 0; i < stars; i++) {
            var location;
            location = input.indexOf("*");
            var input = input.substring(0, location - 1) + input.substring(location + 2);
        }
    return input;

}

function getSandwich(sand){
    var isSandwich = sand.split("bread").length-1;
    var insideSand = "";
    if(isSandwich >= 2){
        var bread1 = sand.indexOf("bread") + 5;
        var bread2 = sand.lastIndexOf("bread");
        var newWord = sand.substring(bread1, bread2);
        return newWord;
    } else {
        return insideSand;
    }
}

function canBalance(balance){
    var balanceLength = balance.length;
    for(var i = 0; i < balanceLength; i++){
        var tester1 = balance.slice(0, i);
        var tester2 = balance.slice(i);
        var total1 = 0;
        var total2 = 0;
        for (var t = 0; t < tester1.length; t++){
            var total1 = total1 + tester1[t];
        }
        for (var g = 0; g < tester2.length; g++) {
            var total2 = total2 + tester2[g];
        }
        if(total2 == total1){
            return true;
        }
    }
   return false;
}

function countClumps(clump){
    var clumpLength = clump.length;
    var clumpCount = 0;
    for (var i = 0; i < clumpLength; i++){
        if(clump[i] == clump[i+1]){
            if(clump[i+1] != clump[i+2]){
                clumpCount += 1;
            }
        }
    }
    return clumpCount;
}

function evenlySpaced(int1, int2, int3){
    var large;
    var medium;
    var small;

    if(int1 > int2 && int1 > int3){
        large = int1;
        if(int2 > int3){
            medium = int2;
            small = int3;
        } else {
            medium = int3;
            small = int2;
        }
    }
    if(int2 > int3 && int2 > int1){
        large = int2;
        if(int3 > int1){
            medium = int3;
            small = int1;
        } else {
            small = int3;
            medium = int1;
        }
    } else {
        large = int3;
        if (int1 > int2) {
            medium = int1;
            small = int2;
        }
        else {
            medium = int2;
            small = int1;
        }
    }
    if(large - medium == medium - small){
        return true;
    }
    return false;
}




function tester() {

   document.getElementById("output").innerHTML = firstLast6(true, false);
   document.getElementById("output1").innerHTML = has23(true, false);
   document.getElementById("output2").innerHTML = fix23([1, 2 , 3]);
    document.getElementById("output3").innerHTML = countYZ("fez day");
    document.getElementById("output4").innerHTML = endOther("Hiabc", "abc");
    document.getElementById("output5").innerHTML = starOut("ab*cd");
    document.getElementById("output6").innerHTML = getSandwich("breadjambread");
    document.getElementById("output7").innerHTML = canBalance([1, 1, 1, 2, 1]);
    document.getElementById("output8").innerHTML = countClumps([1, 2, 2, 3, 4, 4]);
    document.getElementById("output9").innerHTML = evenlySpaced(2, 4, 6);
    //test third method, etc
}
