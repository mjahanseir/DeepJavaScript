
function checkSpeed(speed){
    const speedLimit=70;
    if(speed>speedLimit){
        let points= Math.floor((speed-speedLimit)/5)
        if(points>12)
            console.log('Licence suspended');
        else
            console.log('point: ', points);

    }else
        console.log('no point');
}
checkSpeed(60)
checkSpeed(70)
checkSpeed(71)
checkSpeed(80)
checkSpeed(120)
checkSpeed(180)