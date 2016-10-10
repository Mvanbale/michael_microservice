// initialize DB
const crate = require('node-crate');
module.exports.connectToDB = () =>{
  crate.connect ('178.62.215.200', 4200);
}

module.exports.allPlanes = () =>{
  console.log('Querying for all planes.');
  return crate.execute("select * from planes where true").error(console.log);
}

module.exports.allPlaneTypes = () =>{
  console.log('Querying for all plane types.');
  return crate.execute("select * from planetypes where true").error(console.log);
}

module.exports.planesByType = (planeType) =>{
 console.log(`Querying for plane with the type ${planeType}.`);
  return crate.execute("select * from planes,planetypes where planetype = ? AND planes.planetype = planetypes.name", [planeType]).error(console.log);
}
module.exports.planesByName = (name) =>{
  console.log(`Querying for plane with the name ${name}.`);
  return crate.execute("select * from planes, planetypes where planes.planetype = planetypes.name = ?", [name]).error(console.log);
}