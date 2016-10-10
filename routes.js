const data = require('./data');

module.exports = (rest)=>{
rest.get('/api/planes', function(req, rest) {
    data.allPlanes().
        success(res=>rest.ok(res.json)).
        error(error => rest.internalServerError(error));
});

rest.get('/api/planes/:name', function(req, rest) {
    data.planesByName(req.params.name).
        success(res=>rest.ok(res.json)).
        error(error => rest.internalServerError(error));
});

rest.get('/api/planetypes', function(req, rest) {
    data.allPlaneTypes(req.params.type).
        success(res=>rest.ok(res.json)).
        error(error => rest.internalServerError(error));
});

rest.get('/api/planes/type/:planetype', function(req, rest) {
    data.planesByType(req.params.planetype).
        success(res=>rest.ok(res.json)).
        error(error => rest.internalServerError(error));
});
}
