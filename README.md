# Express.js App Hangs on Unhandled Async Error

This repository demonstrates a common error in Node.js Express.js applications where an asynchronous operation within a request handler throws an error, causing the application to hang.  The problem arises from the lack of proper error handling in the `.catch` block of the promise, resulting in the client not receiving any response.

## Bug Description

The `bug.js` file contains an Express.js app with an asynchronous request handler.  This handler simulates an operation that may fail. If it fails, an error is thrown.  However, the application doesn't handle this error gracefully.  The client will experience a hanging request because the server does not send a response.

## Solution

The `bugSolution.js` file provides the solution by adding proper error handling to the `.catch` block.  In the `.catch` block, a 500 status code along with an error message is sent to the client.  This prevents the application from hanging and provides informative feedback to the client.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install Express.js.
3. Run `node bug.js` to start the server with the bug.
4. Make a request to `http://localhost:3000/`. Observe that the request hangs.
5. Run `node bugSolution.js` to start the server with the fix.
6. Make a request to `http://localhost:3000/`. Observe that a 500 error response is returned.
