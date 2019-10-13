import app from "./app";
// tslint:disable:no-console

const port = process.env.PORT || 8080;
app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  return console.log(`server is listening on ${port}`);
});

process.on("uncaughtException", (e) => {
  // To Do Handle uncaughtException
  console.log(e);
  process.exit(1);
});
process.on("unhandledRejection", (e) => {
  // To Do Handle unhandledRejection
  console.log(e);
  process.exit(1);
});
