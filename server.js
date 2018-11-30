// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
var reservedCust = [
  {
    customerName: "Marcellus-reserved",
    phoneNumber: "1-800-SrDev55",
    customerEmail: "Seniordev@eng.com",
    customerID: "4124"
  },
  {
    customerName: "Marcellus-reserved",
    phoneNumber: "1-800-SrDev55",
    customerEmail: "Seniordev@eng.com",
    customerID: "4124"
  },
  {
    customerName: "Marcellus-reserveds",
    phoneNumber: "1-800-SrDev55",
    customerEmail: "Seniordev@eng.com",
    customerID: "4124"
  }
];
var waitlistCust = [
  {
    customerName: "Marcellus-waitlist",
    phoneNumber: "1-800-SrDev55",
    customerEmail: "Seniordev@eng.com",
    customerID: "4124"
  },
  {
    customerName: "Marcellus-waitlist",
    phoneNumber: "1-800-SrDev55",
    customerEmail: "Seniordev@eng.com",
    customerID: "4124"
  },
  {
    customerName: "Marcellus-waitlist",
    phoneNumber: "1-800-SrDev55",
    customerEmail: "Seniordev@eng.com",
    customerID: "4124"
  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "waitlist.html"));
  });





// Displays all characters
app.get("/table#", function(req, res) {
  return res.json(reservedCust);
  
});

app.get("/api/table", function(req, res) {
    return res.json(reservedCust);
    
  });

app.get("/api/waitlist", function(req, res) {
    return res.json(waitlistCust);
    
  }); 
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});



