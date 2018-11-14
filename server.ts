import app from "./app";
import { fiddleRoutes } from "./server/routes/fiddleRoutes";

const PORT = process.env.PORT || 8080;

app.use('/fiddles', fiddleRoutes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
