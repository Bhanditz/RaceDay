let raceNumber = Math.floor(Math.random() * 1000);
let registerEarly=true;
let runnerAge=21;
if(runnerAge>18 && registerEarly)
  {
    raceNumber+=1000;
  }
if(runnerAge>18 && registerEarly)
   {
   console.log(`you will race at 9:30 and your race 		number is ${raceNumber}.`);
   }
else if (runnerAge>18 && !(registerEarly))
  {
    console.log(`you will race at 11:00 and your 			race number is ${raceNumber}.`);
  }
else if (runnerAge<18)
  {
    console.log(`you will race at 12:30 and your 			race number is ${raceNumber}.`);
  }
else
  {
    console.log('see the regestration desk.');
  }