var Destructible = artifacts.require("./zeppelin/lifecycle/Destructible.sol");
var TodoList = artifacts.require("./TodoList.sol");

module.exports = function (deployer) {
  deployer.link(Destructible, TodoList);
  deployer.deploy(TodoList);
};
