// get input value by id
function getInputValueById(id){
    const inputField = document.getElementById(id);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}
// set the ara with function
function setArea(id, area){
    const areaField = document.getElementById(id);
    areaField.innerText = area;
}  
//  set the calculation entry
function setCalculationEntry(sahpeType, area){
    const calculationEntry = document.getElementById('calculation-entry');
    const p = document.createElement('p');
    const count = calculationEntry.childElementCount;
    p.classList = ('text-xl font-medium py-1')
    p.innerHTML = `
        ${count + 1}. ${sahpeType} ${area} cm<sup>2</sup>
    `
    calculationEntry.appendChild(p)
} 
// calculate triangle area
function calculateTriangleArea(){
    const base = getInputValueById('triangle-base');
    const height = getInputValueById('triangle-height');
    if(isNaN(base) || isNaN(height)){
        alert('please provide a valid number');
        return;
    }
    const area =  0.5 * base * height; 
    setArea('triangle-area', area);
    setCalculationEntry('Triangle', area)
}

// calculate rectangle area
function calculateRectangleArea(){
    const widht = getInputValueById('rectangle-width');
    const length = getInputValueById('rectangle-length');
    if(isNaN(widht) || isNaN(length)){
        alert('Please provide a valid number');
        return;
    }
    const area = widht * length;
    setArea('rectangle-area', area);
    setCalculationEntry('Rectangle', area)
}

// calculate Parallelogram area
function calculateParallelogramArea(){
    const base = getInputValueById('parallelogram-base');
    const height = getInputValueById('parallelogram-height');
    if(isNaN(base) || isNaN(height)){
        alert('Please provide number');
        return;
    }
    const area = base * height;
    setArea('parallelogram-area', area);
    setCalculationEntry('Parallelogram', area);
}

// calculate Rhombus area
function calculateRhombusArea(){
    const d1 = getInputValueById('rhombus-d1');
    const d2 = getInputValueById('rhombus-d2');
    if(isNaN(d1) || isNaN(d2)){
        alert('Please provide number');
        return;
    }
    const area = 0.5 * d1 * d2;
    setArea('rhombus-area', area);
    setCalculationEntry('Rhombus', area);
}

// calculate Pentagon area
function calculatePentagonArea(){
    const p = getInputValueById('pentagon-base');
    const b = getInputValueById('pentagon-height');
    if(isNaN(p) || isNaN(b)){
        alert('Please provide number');
        return;
    }
    const area = 0.5 * p * b;
    setArea('pentagon-area', area);
    setCalculationEntry('Pentagon', area);
}

// calculate Ellipse area
function calculateEllipseArea(){
    const minor = getInputValueById('ellipse-minor');
    const major = getInputValueById('ellipse-major');
    if(isNaN(minor) || isNaN(major)){
        alert('Please provide number');
        return;
    }
    const area = 3.1416 * minor * major;
    const areaTwoDecimal = area.toFixed(2);
    setArea('ellipse-area', areaTwoDecimal);
    setCalculationEntry('Ellicpse', areaTwoDecimal);
}