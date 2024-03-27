function displayNumbers() {
    var n = parseInt(document.getElementById("numberInput").value);
    var output = "";

    if (n > 0 && n <= 500) {
        for (var c = 1; c <= n; c++) {
            output += c + "<br>";
        }
    } else if (n <= 0) {
        output = "Please enter a number greater than 0.";
    } else {
        output = "Please enter a number less than or equal to 500.";
    }
    document.getElementById("output").innerHTML = output;
}