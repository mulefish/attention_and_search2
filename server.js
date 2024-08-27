const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// Route to serve JSON files based on the button clicked
app.get('/getJson/:id', (req, res) => {
    const id = req.params.id;
    const filePath = path.join(__dirname, 'data', `${id}.json`);
    res.sendFile(filePath);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
