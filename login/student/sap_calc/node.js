import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql';
import path from 'path';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// MySQL database connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Giri@1729.S!',
  database: 'sap'
});

// Connect to MySQL
connection.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define the path to the HTML file
//const htmlFilePath = path.join(__dirname, 'addsap.html');

// POST endpoint to handle form submission
app.get("/",(req,res)=>{
    res.render('addsap.ejs');
});

app.post('/submit', (req, res) => {
  const { event_type, points, proof_image } = req.body;
  console.log(event_type,points,proof_image);

  // Insert data into activity_points table, excluding the id column
  const query = 'INSERT INTO activity_points (student_id, student_name, event_type, points, proof_image) VALUES (?, ?, ?, ?, ?)';
  
  // Default values for student_id and student_name
  const student_id = 25;
  const student_name = 'Giridharan';
  // const points=
  
  connection.query(query, [student_id, student_name, event_type, points, proof_image], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    console.log('Data inserted successfully');
    res.status(200).json({ message: 'Data inserted successfully' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port http://127.0.0.1:${port}`);
});