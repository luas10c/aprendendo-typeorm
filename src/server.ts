import "reflect-metadata";
import "express-async-errors";
import app from "./app";

app.listen(process.env.PORT || 32200, () => {
  console.log(`Listening ${process.env.PORT || 32200}`);
});
