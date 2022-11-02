const btnCalcular = document.getElementById('btnCalcular');
const x1result = document.getElementById('x1');
const x2result = document.getElementById('x2');



btnCalcular.addEventListener('click', () =>{
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;

    let z1 = -b + Math.sqrt(Math.pow(b,2) - 4*a*c);
    let z2 = -b - Math.sqrt(Math.pow(b,2) - 4*a*c);

    let x1 = z1/2*a;
    let x2 = z2/2*a;

    
    x1result.innerHTML = "x: "+x1+" ===> "+z1+"/"+2*a;
    x2result.innerHTML = "x: "+x2+" ===> "+z2+"/"+2*a;
    
    

    
});