function checkSpeed(speed) {
  const speedLimit = 70;
  if (speed > speedLimit) {
    let points = Math.floor((speed - speedLimit) / 5);
    if (points > 12) console.log("Licence suspended");
    else console.log("point: ", points);
  } else console.log("no point");
}
checkSpeed(60);
checkSpeed(70);
checkSpeed(71);
checkSpeed(80);
checkSpeed(120);
checkSpeed(180);

console.log("----------------------");
function CS(sp) {
  const speedLimitation = 70;
  if (sp > speedLimitation) {
    let pointsGet = Math.floor((sp - speedLimitation) / 5);
    if (pointsGet > 12) console.log("suspended licence!");
    else console.log("Your negative point is : ", pointsGet);
  } else console.log("no ngative point");
}
CS(60);
CS(70);
CS(80);
CS(90);
CS(120);
CS(180);
