const {newRobot, station, isWorkday, prioritizeTasks}  = require("./robot.js");

// remove .skip when you're ready to implement the test
test('test_that_foreign_robot_needing_repairs_sent_to_station_1', () => {
  // arrange
  var robot =  newRobot(true, true, false)
  // act
  const result = station(robot)
  // assert
  expect(result).toBe(1)
});

test('test_that_vintage_robot_needing_repairs_sent_to_station_2', () => {
  // arrange
  var robot = newRobot(true, false, true)
  // act
  const result = station(robot)
  // assert
  expect(result).toBe(2)
});

test('test_that_standard_robot_needing_repairs_sent_to_station_3', () => {
  // arrange
  var robot = newRobot(true, false, false)
  // act
  const result = station(robot)
  // assert
  expect(result).toBe(3)
});

test('test_that_robot_in_good_condition_sent_to_station_4', () => {
  // arrange
  var robot = newRobot(false, false, false)
  // act
  const result = station(robot)
  // assert
  expect(result).toBe(4)
});

test('test_prioritize_tasks_with_empty_todo_list_returns_negative_one', () => {
  // arrange
  var robot = newRobot(false, false, true)
  robot.todos = []
  // act
  const result = prioritizeTasks(robot)
  // assert
  expect(result).toBe(-1)
})

test('test_prioritize_tasks_with_todos_returns_max_todo_value', () => {
  // arrange
  var robot = newRobot(true, true, true)
  robot.todos = [8, 24, 23]
  // act
  const result = prioritizeTasks(robot)
  // assert
  expect(result).toBe(24)
});

test('test_workday_on_day_off_returns_false', () => {
  // arrange
  var robot = newRobot(false, true, true)
  robot.dayOff = 'Wednesday'
  // act
  const result = isWorkday(robot, 'Wednesday')
  // assert
  expect(result).toBe(false)
});

test('test_workday_not_day_off_returns_true', () => {
  // arrange
  var robot = newRobot(false, true, false)
  robot.dayOff = 'Friday'
  // act
  const result = isWorkday(robot, 'Monday')
  // assert
  expect(result).toBe(true)
});
