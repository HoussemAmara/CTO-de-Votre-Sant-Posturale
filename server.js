import express from "express";
import { exec } from "child_process";

const app = express();
const port = 5000;

app.get("/run-python", (req, res) => {
  const pythonFilePath = `"C:\\Houssem\\nuit info\\extention\\Squat-Analysis-Model-main\\Squat-Analysis-Model-main\\server.py"`;

  exec(`python ${pythonFilePath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erreur: ${error.message}`);
      return res.status(500).send(error.message);
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return res.status(500).send(stderr);
    }
    console.log(`stdout: ${stdout}`);
    res.send(stdout);
  });
});

app.listen(port, () => {
  console.log(`Serveur Node.js lancé sur http://localhost:${port}`);
});
