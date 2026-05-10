const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const logger = morgan("tiny");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(logger);

// 游戏首页
app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const port = process.env.PORT || 80;

app.listen(port, () => {
  console.log("游戏服务启动成功", port);
});