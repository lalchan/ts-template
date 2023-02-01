import { bootstrapApplication } from "./app";
import { Config } from "./config/config";
import { v1Router } from "./v1/routes";

const app = bootstrapApplication();

app.use("/api", v1Router);
const port = Config.port;

app.listen(port, () => {
  console.log(`Application started at port ${port}`);
});
