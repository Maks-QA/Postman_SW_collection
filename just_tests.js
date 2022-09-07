pm.test("Тело ответа содержит следующий JSON", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.hair_color).to.eql("auburn, white");
});


pm.test("Тело ответа содержит следующее строчное значение", function () {
    pm.expect(pm.response.text()).to.include("skin_color");
});


pm.test("Тело ответа эквивалетно следующему", function () {
    pm.response.to.have.body({
    "name": "Obi-Wan Kenobi",
    "height": "182",
    "mass": "77",
    "hair_color": "auburn, white",
    "skin_color": "fair",
    "eye_color": "blue-gray",
    "birth_year": "57BBY",
    "gender": "male",
    "homeworld": "https://swapi.dev/api/planets/20/",
    "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/"
    ],
    "species": [],
    "vehicles": [
        "https://swapi.dev/api/vehicles/38/"
    ],
    "starships": [
        "https://swapi.dev/api/starships/48/",
        "https://swapi.dev/api/starships/59/",
        "https://swapi.dev/api/starships/64/",
        "https://swapi.dev/api/starships/65/",
        "https://swapi.dev/api/starships/74/"
    ],
    "created": "2014-12-10T16:16:29.192000Z",
    "edited": "2014-12-20T21:17:50.325000Z",
    "url": "https://swapi.dev/api/people/10/"
});
});


pm.test("Ответ содержит хэдер - Cookie", function () {
    pm.response.to.have.header("Cookie");
});


pm.test("Время ответа", function () {
    pm.expect(pm.response.responseTime).to.be.below(20);
});


pm.test("Статус код содержит причину - OK", function () {
    pm.response.to.have.status("OK");
});


pm.test("Успешный ответ содержит код 200 или 201", function () {
    pm.expect(pm.response.code).to.be.oneOf([200, 201]);
});


pm.test("Ответ содержит хэдер - Date", function () {
    pm.response.to.have.header("Date");
});


pm.test("Ответ содержит следующий JSON", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.cost_in_credits).to.eql("240000");
});