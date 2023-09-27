const http = require("http");
const StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decoder = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decoder.write(data);
  });
  req.on("end", function () {
    body += decoder.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

let randomNumber = Math.floor(Math.random() * 100) + 1;
let message = "";

const form = (message) => {
  return `
    <body>
      <h1>Number Guessing Game</h1>
      <p>${message}</p>
      <form method="POST">
        <input type="number" name="guess" min="1" max="100" required></input>
        <button type="submit">Submit</button>
      </form>
    </body>
  `;
};

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    getBody(req, (body) => {
      const guess = parseInt(body["guess"]);
      if (isNaN(guess)) {
        message = "Invalid guess. Please enter a number between 1 and 100.";
      } else {
        if (guess === randomNumber) {
          message = "Congratulations! You guessed the correct number.";
        } else if (guess < randomNumber) {
          message = "Too low. Try a higher number.";
        } else {
          message = "Too high. Try a lower number.";
        }
      }
      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form(message));
  }
});

server.on('request', (req) => {
  console.log("event received: ", req.method, req.url)
  }),

server.listen(3000);
console.log("The server is listening on port 3000.");
