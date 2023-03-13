"use strict";

let temperature = process.argv[2];

if(temperature < 20) {
    console.log("Activating heating");
}

else if(temperature > 21) {
    console.log("De-activating heating");
}
else {
    console.log("Temperature is normal");
}