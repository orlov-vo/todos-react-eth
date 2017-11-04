pragma solidity ^0.4.18;

import "./zeppelin/lifecycle/Destructible.sol";

contract TodoList is Destructible {
  struct Todo {
    string description;
    uint complete_at;
    bool is_completed;
  }

  Todo[] public todos;

  event AddTask(address indexed author, uint idx, string task);
  event UpdateTask(address indexed author, uint idx, string task);
  event SetCompleteAt(address indexed author, uint idx, uint timestamp);
  event MarkTask(address indexed author, uint idx, bool isCompleted);
  event RemoveTask(address indexed author, uint idx);

  function addTask(string task) public onlyOwner() {
    uint newLen = todos.push(Todo(task, 0, false));
    AddTask(msg.sender, newLen - 1, task);
  }

  function updateTask(uint idx, string task) public onlyOwner() {
    require(idx < todos.length);
    todos[idx] = Todo(task, todos[idx].complete_at, todos[idx].is_completed);
    UpdateTask(msg.sender, idx, task);
  }

  function setCompleteAt(uint idx, uint timestamp) public onlyOwner() {
    require(idx < todos.length);
    todos[idx].complete_at = timestamp;
    SetCompleteAt(msg.sender, idx, timestamp);
  }

  function markTask(uint idx, bool isCompleted) public onlyOwner() {
    require(idx < todos.length);
    todos[idx].is_completed = isCompleted;
    MarkTask(msg.sender, idx, isCompleted);
  }

  function removeTask(uint idx) public onlyOwner() {
    require(idx < todos.length);
    for (uint i = idx; i < todos.length - 1; i++) {
      todos[i] = todos[i + 1];
    }
    delete todos[todos.length - 1];
    todos.length--;
    RemoveTask(msg.sender, idx);
  }

  function deleteOldTasks() public onlyOwner() {
    for (uint i = 0; i < todos.length; i++) {
      if (todos[i].is_completed == true && todos[i].complete_at <= now) {
        removeTask(i);
      }
    }
  }

  function getTask(uint idx) public constant returns(string) {
    require(idx < todos.length);
    return todos[idx].description;
  }

  function isCompleted(uint idx) public constant returns(bool) {
    require(idx < todos.length);
    return todos[idx].is_completed;
  }
}
