let result = document.getElementById("result");

function getOption() {
    var selectElement = document.querySelector('#select1').value;

    switch (selectElement) {
        case "dec":
            decChecker();
            break;
        case "bin":
            binChecker();
            break;
        case "oct":
            octChecker();
            break;
        case "hex":
            hexChecker();
            break;
    }
}

function reset() {
    document.getElementById('numberInput').value = null;
    document.getElementById("result").innerHTML = "THIS IS WHERE THE RESULT SHOULD BE DISPPLAYED";
}

let decChecker = function() {
    let numberInput = Number(document.getElementById("numberInput").value);
    var isDec = Number.isNaN(numberInput);
    if (isDec == false){
        decToAny();
    }
    else {
        result.innerHTML = "NUMBER IS NOT DECIMAL";
    }
}

let decToAny = function () {
    var numberInput = Number(document.getElementById("numberInput").value);
    var selectElement2 = document.querySelector("#select2").value;

    if (selectElement2 == "bin") {
        var binary = "";
        while (numberInput != 0) {
            quotient = Math.floor(numberInput / 2);
            toBin = numberInput % 2;
            numberInput = quotient;
            binary = toBin + binary;
        }
        result.innerHTML = binary;
    }
    else if (selectElement2 == "oct") {
        var octal = "";
        while (numberInput != 0) {
            quotient = Math.floor(numberInput / 8);
            toOct = numberInput % 8;
            numberInput = quotient;
            octal = toOct + octal;
        }
        result.innerHTML = octal;
    }
    else if (selectElement2 == "hex") {
        var hexa = "";
        while (numberInput != 0) {
            quotient = Math.floor(numberInput / 16);
            toHex = numberInput % 16;
            switch (toHex) {
                case 10:
                    toHex = 'A';
                    break;
                case 11:
                    toHex = 'B';
                    break;
                case 12:
                    toHex = 'C';
                    break;
                case 13:
                    toHex = 'D';
                    break;
                case 14:
                    toHex = 'E';
                    break;
                case 15:
                    toHex = 'F';
                    break;
                default:
                    toHex = toHex;
                    break;
            }
            numberInput = quotient;
            hexa = toHex + hexa;
        }
        result.innerHTML = hexa + "<br><br>10 = A<br>11 = B<br>12 = C<br>13 = D<br>14 = E<br>15 = F";
    }
    else {
        result.innerHTML = "INVALID OPTIONS"
    }
}

let binChecker = function () {
    var numberInput = document.getElementById('numberInput').value;
    let isBinary = true;
    for (let number of numberInput) {
        if (number < 0 || number > 1) {
            result.innerHTML = "NUMBER IS NOT A BINARY";
            isBinary = false;
        }
    }
    if (isBinary) {
        binToAny();
    }
}

let binToAny = function () {
    var numberInput = document.getElementById("numberInput").value;
    var selectElement2 = document.querySelector("#select2").value;
    var revBin = '';
    for (let i = numberInput.length - 1; i >= 0; i--) {
        revBin += numberInput[i];
    }
    if (selectElement2 == "dec") {
        var dec = 0;
        for (let i = 0; i < revBin.length; i++) {
            dec += revBin[i] * (2 ** i);
        }
        result.innerHTML = dec;
    }
    else if (selectElement2 == "oct") {
        var oct = "";
        var toOct = 0;
        var digits = 1;
        for (let i = 0; i < revBin.length; i++) {
            if (digits > 4) {
                oct = toOct + oct;
                digits = 1;
                toOct = 0;
            }
            if (revBin[i] == 1) {
                toOct += digits;
            }
            digits *= 2;
        }
        result.innerHTML = toOct + oct;
    }
    else if (selectElement2 == "hex") {
        var hex = "";
        var toHex = 0;
        var digits = 1;
        for (let i = 0; i < revBin.length; i++) {
            if (digits > 8) {
                hex = toHex + hex;
                digits = 1;
                toHex = 0;
            }
            if (revBin[i] == 1) {
                toHex += digits;
                switch (toHex) {
                    case 10:
                        toHex = 'A';
                        break;
                    case 11:
                        toHex = 'B';
                        break;
                    case 12:
                        toHex = 'C';
                        break;
                    case 13:
                        toHex = 'D';
                        break;
                    case 14:
                        toHex = 'E';
                        break;
                    case 15:
                        toHex = 'F';
                        break;
                    default:
                        toHex = toHex;
                        break;
                }
            }
            digits *= 2;
        }
        result.innerHTML = toHex + hex + "<br><br>10 = A<br>11 = B<br>12 = C<br>13 = D<br>14 = E<br>15 = F";
    }
    else {
        result.innerHTML = "INVALID OPTIONS";
    }
}

let octChecker = function(){
    let numberInput = document.getElementById("numberInput").value;
    let isOct = true;
    for (const val of numberInput) {
        if (!(val >= 0 && val <= 7)) {
            isOct = false;
        }
    }
    if (isOct){
        octToAny();
    }
    else {
        result.innerHTML = "NUMBER IS NOT OCTAL";
    }
}

let octToAny = function () {
    var numberInput = document.getElementById("numberInput").value;
    var selectElement2 = document.querySelector("#select2").value;
    var revOct = '';
    for (let i = numberInput.length - 1; i >= 0; i--) {
        revOct += numberInput[i];
    }
    if (selectElement2 == "dec") {
        var dec = 0;
        for (let i = 0; i < revOct.length; i++) {
            dec += revOct[i] * (8 ** i);
        }
        result.innerHTML = dec;
    }
    else if (selectElement2 == "bin") {
        var bin = "";
        for (let i = 0; i < numberInput.length; i++) {
            let val = numberInput[i];
            if (val == 0) {
                bin += "000";
            }
            else if (val == 1) {
                bin += "001";
            }
            else if (val == 2) {
                bin += "010";
            }
            else if (val == 3) {
                bin += "011";
            }
            else if (val == 4) {
                bin += "100";
            }
            else if (val == 5) {
                bin += "101";
            }
            else if (val == 6) {
                bin += "101";
            }
            else if (val == 7) {
                bin += "111";
            }
        }
        result.innerHTML = bin;
    }
    else if (selectElement2 == "hex") {
        // first convert to binary
        var toBin = "";
        for (let i = 0; i < numberInput.length; i++) {
            let val = numberInput[i];
            if (val == 0) {
                toBin += "000";
            }
            else if (val == 1) {
                toBin += "001";
            }
            else if (val == 2) {
                toBin += "010";
            }
            else if (val == 3) {
                toBin += "011";
            }
            else if (val == 4) {
                toBin += "100";
            }
            else if (val == 5) {
                toBin += "101";
            }
            else if (val == 6) {
                toBin += "101";
            }
            else if (val == 7) {
                toBin += "111";
            }
        }
        // then from binary to hexadecimal
        var hex = "";
        var toHex = 0;
        var digits = 1;
        for (let i = toBin.length - 1; i >= 0; i--) {
            if (digits > 8) {
                hex = toHex + hex;
                digits = 1;
                toHex = 0;
            }
            if (toBin[i] == 1) {
                toHex += digits;
                switch (toHex) {
                    case 10:
                        toHex = 'A';
                        break;
                    case 11:
                        toHex = 'B';
                        break;
                    case 12:
                        toHex = 'C';
                        break;
                    case 13:
                        toHex = 'D';
                        break;
                    case 14:
                        toHex = 'E';
                        break;
                    case 15:
                        toHex = 'F';
                        break;
                    default:
                        toHex = toHex;
                        break;
                }
            }
            digits *= 2;
        }
        result.innerHTML = toHex + hex;
    }
    else {
        result.innerHTML = "INVALID OPTIONS";
    }

}

let hexChecker = function() {
    let numberInput = document.getElementById("numberInput").value;
    let isHex = true;
    for (let val of numberInput) {
        if (val > 7 || val > 'f' || val > 'F'){
            isHex = false;
        }
    }
    if (isHex){
        hexToAny();
    }
    else {
        result.innerHTML = "NUMBER IS NOT HEXADECIMAL"
    }
}

let hexToAny = function () {
    var numberInput = document.getElementById("numberInput").value;
    var selectElement2 = document.querySelector("#select2").value;
    var revHex = '';
    for (let i = numberInput.length - 1; i >= 0; i--) {
        revHex += numberInput[i];
    }
    if (selectElement2 == "dec") {
        var dec = 0;
        for (let i = 0; i < revHex.length; i++) {
            var val = revHex[i];
            switch (val) {
                case 'a':
                case 'A':
                    val = 10;
                    break;
                case 'b':
                case 'B':
                    val = 11;
                    break;
                case 'c':
                case 'C':
                    val = 12;
                    break;
                case 'd':
                case 'D':
                    val = 13;
                    break;
                case 'e':
                case 'E':
                    val = 14;
                    break;
                case 'f':
                case 'F':
                    val = 15;
                    break;
                default:
                    val = revHex[i];
                    break;
            }
            dec += val * (16 ** i);
        }
        result.innerHTML = dec + "<br><br>10 = A<br>11 = B<br>12 = C<br>13 = D<br>14 = E<br>15 = F";
    }
    else if (selectElement2 == "bin"){
        var bin = "";
        for (let i = 0; i < numberInput.length; i++) {
            let val = numberInput[i];
            if (val == 0) {
                bin += "0000";
            }
            else if (val == 1) {
                bin += "0001";
            }
            else if (val == 2) {
                bin += "0010";
            }
            else if (val == 3) {
                bin += "0011";
            }
            else if (val == 4) {
                bin += "0100";
            }
            else if (val == 5) {
                bin += "0101";
            }
            else if (val == 6) {
                bin += "0101";
            }
            else if (val == 7) {
                bin += "0111";
            }
            else if (val == 8) {
                bin += "1000";
            }
            else if (val == 9) {
                bin += "1001";
            }
            else if (val == 'a' || val == 'A') {
                bin += "1010";
            }
            else if (val == 'b' || val == 'B') {
                bin += "1011";
            }
            else if (val == 'c' || val == 'C') {
                bin += "1100";
            }
            else if (val == 'd' || val == 'D') {
                bin += "1101";
            }
            else if (val == 'e' || val == 'E') {
                bin += "1110";
            }
            else if (val == 'f' || val == 'F') {
                bin += "1111";
            }
        }
        result.innerHTML = bin;
    }
    else if (selectElement2 == "oct") {
        // first convert to binary
        var toBin = "";
        for (let i = 0; i < numberInput.length; i++) {
            let val = numberInput[i];
            if (val == 0) {
                toBin += "0000";
            }
            else if (val == 1) {
                toBin += "0001";
            }
            else if (val == 2) {
                toBin += "0010";
            }
            else if (val == 3) {
                toBin += "0011";
            }
            else if (val == 4) {
                toBin += "0100";
            }
            else if (val == 5) {
                toBin += "0101";
            }
            else if (val == 6) {
                toBin += "0101";
            }
            else if (val == 7) {
                toBin += "0111";
            }
            else if (val == 8) {
                toBin += "1000";
            }
            else if (val == 9) {
                toBin += "1001";
            }
            else if (val == 'a' || val == 'A') {
                toBin += "1010";
            }
            else if (val == 'b' || val == 'B') {
                toBin += "1011";
            }
            else if (val == 'c' || val == 'C') {
                toBin += "1100";
            }
            else if (val == 'd' || val == 'D') {
                toBin += "1101";
            }
            else if (val == 'e' || val == 'E') {
                toBin += "1110";
            }
            else if (val == 'f' || val == 'F') {
                toBin += "1111";
            }
        }
        // then convert the binary to octal
        var oct = "";
        var toOct = 0;
        var digits = 1;
        for (let i = toBin.length - 1; i >= 0; i--) {
            if (digits > 4) {
                oct = toOct + oct;
                digits = 1;
                toOct = 0;
            }
            if (toBin[i] == 1) {
                toOct += digits;
            }
            digits *= 2;
        }
        result.innerHTML = toOct + oct;
    }
}
