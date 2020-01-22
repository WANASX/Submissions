/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");
}

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 * ```
 * node tasks.js batata
 * ```
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */
var listOfTasks = ["hello", "dasd", "world"];
function onDataReceived(text) {
  var stringArray = text.split(/(\s+)/);
  if (text === "quit\n" || text === "exit\n") {
    quit();
  } else if (stringArray[0] === "hello") {
    if (stringArray[2] != " ") hello(stringArray[2]);
    else hello("");
  } else if (text === "help\n") {
    help();
  } else if (text === "list\n") {
    list();
  } else if (stringArray[0] === "add") {
    add(stringArray);
  } else if (stringArray[0] === "remove") {
    listOfTasks.pop();
  } else if (stringArray[0] === "remove 1") {
    listOfTasks.splice(0, 1);
  } else if (stringArray[0] === "remove 2") {
    listOfTasks.splice(2, 1);
  } else {
    unknownCommand(text);
  }
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

/**
 * Says hello
 *
 * @returns {void}
 */
function hello(name) {
  if (name == "") console.log("hello!");
  else console.log("hello " + name + "!");
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log("Quitting now, goodbye!");
  process.exit();
}
/**
 * help
 */
function help() {
  console.log("do you mean quit \n exit \n hello  ");
}
/**
 *  add
 */
function add(array) {
  array.shift();
  let newText = array.join(" ");
  listOfTasks.push(newText.trim());
}

/**
 * remove
 */

function remove(array) {}

/**
 *  list
 */
function list() {
  let result = "";
  for (i = 0; i < listOfTasks.length; i++) {
    result += `${i + 1}- ${listOfTasks[i]}\n`;
  }
  console.log(result);
}

/**
 *
 */

// The following line starts the application
startApp("Anas Kalthoum");
