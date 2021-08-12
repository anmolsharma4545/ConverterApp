const lengthC = document.querySelector('.length');
const temperature = document.querySelector('.temperature');
const weight = document.querySelector('.weight');
const speed = document.querySelector('.speed');
const power = document.querySelector('.power');
const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
const fourth = document.querySelector('.fourth');
const fifth = document.querySelector('.fifth');
const LengthBtn = document.getElementById('Lengthbtn');
const tempBtn = document.getElementById('tempbtn');
const weightBtn = document.getElementById('weightbtn');
const speedBtn = document.getElementById('speedbtn');
const powerBtn = document.getElementById('powerbtn');

first.addEventListener('click', () =>{
 lengthC.style.display = 'grid';
 temperature.style.display = 'none';
 weight.style.display = 'none';
 speed.style.display = 'none';
 power.style.display = 'none';
});
second.addEventListener('click', () =>{
 temperature.style.display = 'grid';
 lengthC.style.display = 'none';
 weight.style.display = 'none';
 speed.style.display = 'none';
 power.style.display = 'none';
});
third.addEventListener('click', () =>{
 weight.style.display = 'grid';
 temperature.style.display = 'none';
 lengthC.style.display = 'none';
 speed.style.display = 'none';
 power.style.display = 'none';
});
fourth.addEventListener('click', () =>{
 speed.style.display = 'grid';
 temperature.style.display = 'none';
 weight.style.display = 'none';
 lengthC.style.display = 'none';
 power.style.display = 'none';
});
fifth.addEventListener('click', () =>{
 power.style.display = 'grid';
 temperature.style.display = 'none';
 weight.style.display = 'none';
 speed.style.display = 'none';
 lengthC.style.display = 'none';
});

 // --------------Length Conversions-------------- //

LengthBtn.addEventListener('click' , () =>{ 
    let Lone = document.getElementById('lengthone').value;
    let Ltwo = document.getElementById('lengthtwo').value;
    // Kilometre to Any..
    if(Lone == "kilometre" && Ltwo == "metre"){
    let Lvalue = document.getElementById('lengthvalue').value;
        let converted = Lvalue * 1000;
        document.querySelector('.Loutput').innerHTML = converted;
    }
    if(Lone == "kilometre" && Ltwo == "centimetre"){
        let Lvalue = document.getElementById('lengthvalue').value;
        let converted = Lvalue * 100000;
        document.querySelector('.Loutput').innerHTML = converted;
    }
    if(Lone == "kilometre" && Ltwo == "mile"){
        let Lvalue = document.getElementById('lengthvalue').value;
        let converted = Lvalue * 0.6214;
        document.querySelector('.Loutput').innerHTML = converted;
    }
    // Centimetre to Any..
    if(Lone == "centimetre" && Ltwo == "metre"){
        let Lvalue = document.getElementById('lengthvalue').value;
            let converted = Lvalue * 0.01;
            document.querySelector('.Loutput').innerHTML = converted;
        }
        if(Lone == "centimetre" && Ltwo == "kilometre"){
            let Lvalue = document.getElementById('lengthvalue').value;
            let converted = Lvalue * 0.00001;
            document.querySelector('.Loutput').innerHTML = converted;
        }
        if(Lone == "centimetre" && Ltwo == "mile"){
            let Lvalue = document.getElementById('lengthvalue').value;
            let converted = Lvalue * 0.000006214;
            document.querySelector('.Loutput').innerHTML = converted;
        }
        // Metre to Any..
        if(Lone == "metre" && Ltwo == "kilometre"){
            let Lvalue = document.getElementById('lengthvalue').value;
                let converted = Lvalue * 0.001;
                document.querySelector('.Loutput').innerHTML = converted;
            }
            if(Lone == "metre" && Ltwo == "centimetre"){
                let Lvalue = document.getElementById('lengthvalue').value;
                let converted = Lvalue * 100;
                document.querySelector('.Loutput').innerHTML = converted;
            }
            if(Lone == "metre" && Ltwo == "mile"){
                let Lvalue = document.getElementById('lengthvalue').value;
                let converted = Lvalue * 0.0006214;
                document.querySelector('.Loutput').innerHTML = converted;
            }
            // Mile to Any..
            if(Lone == "mile" && Ltwo == "metre"){
                let Lvalue = document.getElementById('lengthvalue').value;
                    let converted = Lvalue * 1609.269391696169939;
                    document.querySelector('.Loutput').innerHTML = Math.floor(converted);
                }
                if(Lone == "mile" && Ltwo == "centimetre"){
                    let Lvalue = document.getElementById('lengthvalue').value;
                    let converted = Lvalue * 160926.9391696169939;
                    document.querySelector('.Loutput').innerHTML = Math.floor(converted);
                }
                if(Lone == "mile" && Ltwo == "kilometre"){
                    let Lvalue = document.getElementById('lengthvalue').value;
                    let converted = Lvalue * 1.60;
                    document.querySelector('.Loutput').innerHTML = converted;
                }
});

//  --------Temperature Conversions------- //

tempBtn.addEventListener('click' , () =>{
    let Tone = document.getElementById('tempone').value;
    let Ttwo = document.getElementById('temptwo').value;
    // Celsius to Any ...
    if(Tone == "celsius" && Ttwo == "fahrenheit"){
        let Tvalue = document.getElementById('tempvalue').value;
            let converted = (Tvalue * 1.8) + 32;
            document.querySelector('.Toutput').innerHTML = converted + "&deg;F";
        }
        if(Tone == "celsius" && Ttwo == "kelvin"){
            let Tvalue = document.getElementById('tempvalue').value;
            let converted = parseInt(Tvalue) + 273.15;
            document.querySelector('.Toutput').innerHTML = converted + "K";
        }
        // Fahrenheit to Any...
    if(Tone == "fahrenheit" && Ttwo == "celsius"){
        let Tvalue = document.getElementById('tempvalue').value;
            let converted = (Tvalue - 32) * 5/9;
            document.querySelector('.Toutput').innerHTML = Math.floor(converted) + "&deg;C";
        }
        if(Tone == "fahrenheit" && Ttwo == "kelvin"){
            let Tvalue = document.getElementById('tempvalue').value;
            let converted = (Tvalue - 32) * 5/9 + 273.15;
            document.querySelector('.Toutput').innerHTML = Math.floor(converted) + " K";
        }
        // Kelvin to Any ...
    if(Tone == "kelvin" && Ttwo == "fahrenheit"){
        let Tvalue = document.getElementById('tempvalue').value;
            let converted = (Tvalue - 273.15) * 9/5 + 32;
            document.querySelector('.Toutput').innerHTML = Math.floor(converted) + "&deg; F";
        }
        if(Tone == "kelvin" && Ttwo == "celsius"){
            let Tvalue = document.getElementById('tempvalue').value;
            let converted = parseInt(Tvalue) - 273.15;
            document.querySelector('.Toutput').innerHTML = Math.floor(converted) + "&deg; C";
        }
});

// --------- Weight Conversions ----------- //

weightBtn.addEventListener('click' , () =>{
    let Wone = document.getElementById('weightone').value;
    let Wtwo = document.getElementById('weighttwo').value;
 //  Gram to Any ....
    if(Wone == "gram" && Wtwo == "tonne"){
        let Wvalue = document.getElementById('weightvalue').value;
            let converted = Wvalue * 0.000001;
            document.querySelector('.Woutput').innerHTML = converted;
        }
        if(Wone == "gram" && Wtwo == "quintal"){
            let Wvalue = document.getElementById('weightvalue').value;
            let converted = Wvalue * 0.00001;
            document.querySelector('.Woutput').innerHTML = converted;
        }
        if(Wone == "gram" && Wtwo == "kilogram"){
            let Wvalue = document.getElementById('weightvalue').value;
            let converted = Wvalue * 0.001;
            document.querySelector('.Woutput').innerHTML = converted;
        }
        // Tonne to Any..
        if(Wone == "tonne" && Wtwo == "gram"){
            let Wvalue = document.getElementById('weightvalue').value;
                let converted = Wvalue * 1000000;
                document.querySelector('.Woutput').innerHTML = converted;
            }
            if(Wone == "tonne" && Wtwo == "quintal"){
                let Wvalue = document.getElementById('weightvalue').value;
                let converted = Wvalue * 10;
                document.querySelector('.Woutput').innerHTML = converted;
            }
            if(Wone == "tonne" && Wtwo == "kilogram"){
                let Wvalue = document.getElementById('weightvalue').value;
                let converted = Wvalue * 1000;
                document.querySelector('.Woutput').innerHTML = converted;
            }
 // Quintal to Any ....
 if(Wone == "quintal" && Wtwo == "tonne"){
    let Wvalue = document.getElementById('weightvalue').value;
        let converted = Wvalue * 0.1;
        document.querySelector('.Woutput').innerHTML = converted;
    }
    if(Wone == "quintal" && Wtwo == "gram"){
        let Wvalue = document.getElementById('weightvalue').value;
        let converted = Wvalue * 100000;
        document.querySelector('.Woutput').innerHTML = converted;
    }
    if(Wone == "quintal" && Wtwo == "kilogram"){
        let Wvalue = document.getElementById('weightvalue').value;
        let converted = Wvalue * 100;
        document.querySelector('.Woutput').innerHTML = converted;
    }
    // Kilogram to Any ...
    if(Wone == "kilogram" && Wtwo == "tonne"){
        let Wvalue = document.getElementById('weightvalue').value;
            let converted = Wvalue * 0.001;
            document.querySelector('.Woutput').innerHTML = converted;
        }
        if(Wone == "kilogram" && Wtwo == "quintal"){
            let Wvalue = document.getElementById('weightvalue').value;
            let converted = Wvalue * 0.01;
            document.querySelector('.Woutput').innerHTML = converted;
        }
        if(Wone == "kilogram" && Wtwo == "gram"){
            let Wvalue = document.getElementById('weightvalue').value;
            let converted = Wvalue * 1000;
            document.querySelector('.Woutput').innerHTML = converted;
        }
});

// --------- Speed Conversions ----------- //
speedBtn.addEventListener('click' , () =>{
    let Sone = document.getElementById('speedone').value;
    let Stwo = document.getElementById('speedtwo').value;
    // Kilometre/h to Milles/h......
    if(Sone == "kilometre" && Stwo == "mile"){
        let Svalue = document.getElementById('speedvalue').value;
        let converted = Svalue * 0.621371111111111608208;
        document.querySelector('.Soutput').innerHTML = Math.floor(converted);
    }
    // Miles/h to Kilometre/h ......
    if(Sone == "mile" && Stwo == "kilometre"){
        let Svalue = document.getElementById('speedvalue').value;
        let converted = Svalue * 1.60934421011598;
        document.querySelector('.Soutput').innerHTML = Math.floor(converted);
    }
});

// --------- Power Conversions --------- //

powerBtn.addEventListener('click' , () =>{
    let Pone = document.getElementById('powerone').value;
    let Ptwo = document.getElementById('powertwo').value;
    // Watt to Kilowatt .....
    if(Pone == "watt" && Ptwo == "kilowatt"){
        let Pvalue = document.getElementById('powervalue').value;
        let converted = Pvalue * 0.001;
        document.querySelector('.Poutput').innerHTML = converted;
    }
    if(Pone == "kilowatt" && Ptwo == "watt"){
        let Pvalue = document.getElementById('powervalue').value;
        let converted = Pvalue * 1000;
        document.querySelector('.Poutput').innerHTML = converted;
    }
});