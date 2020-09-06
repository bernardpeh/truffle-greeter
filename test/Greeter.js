const Greeter = artifacts.require("Greeter");

contract("Greeter", function(accounts) {

  // view all accts
  // console.log(accounts);

  // instance of contract
  var con;

  // deploy contract before test
  before(async () => {
    con = await Greeter.new("hello world");
  });

  describe('AS the owner', () => {
    it('WHEN I call greet(), THEN it should return hello world', async () => {
      let greet = await con.greet();
      assert.equal(greet, "hello world");
    })
    it('WHEN i trigger setGreeting(), THEN I should return hello now', async () => {
      await con.setGreeting("hello now", {from: accounts[1]});
      let greet = await con.greet();
        assert.equal(greet, "hello now");
    })
  })
});
