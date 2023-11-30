import express from "express"
import axios from "axios"
import cors from "cors"
const app = express();
app.use(cors());

const port = process.env.PORT || 8000;


app.get('/api/data', async (req, res) => {
  try {
    const response = await axios.get('http://coding-assignment.bombayrunning.com/data.json');
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
