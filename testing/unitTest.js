const assert=require('chai').assert;
const chakram=require('chakram');

describe("Test1", function() {
it("should return ...", function () {
var response = chakram.post();
return chakram.post("https://dweet.io/dweet/for/"+thingName, {
      testing: "your API"
});


chakram.expect(response).to.have.json('value.name', 'Gary')
expect(response).to.have.json('value', {name: "Gary', color: 'blue', reindeer: true});

console.log(response);
assert(response,);
});

}
