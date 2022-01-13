const express = require("express");
const crypto = require("crypto");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3000;

// To support URL-encoded bodies
app.use(express.json());

// To parse cookies from the HTTP Request
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.post("/", function (req, res) {
  console.log(req.body); // your JSON
  res.send(req.body); // echo the result back
});

const getHashedPassword = (password) => {
  const sha256 = crypto.createHash("sha256");
  const hash = sha256.update(password).digest("base64");
  return hash;
};

const generateAuthToken = () => {
  return crypto.randomBytes(30).toString("hex");
};

const users = [
  // This user is added to the array to avoid creating a new user on each restart
  {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@email.com",
    // This is the SHA256 hash for value of `password`
    password: "XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=",
  },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/register", (req, res) => {
  const { email, firstName, lastName, password, confirmPassword } = req.body;

  // Check if the password and confirm password fields match
  if (password === confirmPassword) {
    // Check if user with the same email is also registered
    if (users.find((user) => user.email === email)) {
      res.status(500).json({ message: "User already registered." });
      return;
    }

    const hashedPassword = getHashedPassword(password);

    // Store user into the database if you are using one
    users.push({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    res
      .status(200)
      .json({ message: "Registration Complete. Please login to continue." });
  } else {
    res.status(500).json({ message: "Password does not match." });
  }
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = getHashedPassword(password);
  const user = users.find((u) => {
    return u.email === email && hashedPassword === u.password;
  });
  if (user) {
    res.status(200).json({ message: "Login success" });
  } else {
    res.status(500).json({ message: "Invalid username or password" });
  }
});

app.get("/protected", (req, res) => {
  if (req.user) {
    res.status(500).json({ message: "Access granted" });
  } else {
    res.status(500).json({ message: "Please login to continue" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
