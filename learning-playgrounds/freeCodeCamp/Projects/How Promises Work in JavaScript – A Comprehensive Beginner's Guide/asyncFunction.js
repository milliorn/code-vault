import { timerPromise } from "./timerPromise.js";


async function asyncFunction() {
  const result = await timerPromise("Async Function's Promise");
  console.log(result);
}
