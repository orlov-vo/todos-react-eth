var TodoList = artifacts.require('./TodoList.sol')

contract('TodoList', accounts => {
  const author = accounts[0]
  const exceptedHelloWorld = 'Hello world!'
  let todoListInstance

  before(() => {
    return TodoList.deployed().then(instance => {
      todoListInstance = instance
    })
  })

  function testAddTask(from, excepted) {
    return todoListInstance.addTask(excepted, { from }).then(tx => {
      const e = tx.logs.find(log => log.event === 'AddTask')
      assert.isDefined(e)
      assert.equal(e.args.task, excepted)
      return e
    })
  }

  it('should correct add a task and get it.', () => {
    return testAddTask(author, exceptedHelloWorld)
      .then(e => {
        return todoListInstance.getTask.call(e.args.idx)
      })
      .then(task => {
        assert.equal(task, exceptedHelloWorld)
      })
  })

  it('should correct add a task and remove it.', () => {
    let idxExcepted
    return testAddTask(author, exceptedHelloWorld)
      .then(e => {
        idxExcepted = e.args.idx
        return todoListInstance.removeTask(idxExcepted, { from: author })
      })
      .then(tx => {
        const e = tx.logs.find(log => log.event === 'RemoveTask')
        assert.isDefined(e)
        assert.deepEqual(e.args.idx, idxExcepted)
      })
  })

  it('should correct add a task and update it.', () => {
    const excepted = 'test'
    let idxExcepted
    return testAddTask(author, exceptedHelloWorld)
      .then(e => {
        idxExcepted = e.args.idx
        return todoListInstance.updateTask(idxExcepted, excepted, { from: author })
      })
      .then(tx => {
        const e = tx.logs.find(log => log.event === 'UpdateTask')
        assert.isDefined(e)
        assert.equal(e.args.task, excepted)
      })
  })

  it('should correct add a task and mark it', () => {
    return testAddTask(author, exceptedHelloWorld)
      .then(e => {
        idxExcepted = e.args.idx
        return todoListInstance.markTask(idxExcepted, true, { from: author })
      })
      .then(tx => {
        const e = tx.logs.find(log => log.event === 'MarkTask')
        assert.isDefined(e)
        assert.equal(e.args.isCompleted, true)

        return todoListInstance.markTask(idxExcepted, false, { from: author })
      })
      .then(tx => {
        const e = tx.logs.find(log => log.event === 'MarkTask')
        assert.isDefined(e)
        assert.equal(e.args.isCompleted, false)
      })
  })

  it('should correct add a task and mark it', () => {
    throw new Error('not implemented yet')
  })

  it('should correct add a task and set complete at timestamp', () => {
    throw new Error('not implemented yet')
  })

  it('should correct add tasks and delete old tasks', () => {
    throw new Error('not implemented yet')
  })
})
