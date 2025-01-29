import server from "./src/server";
import { PORT } from "./src/config/envs";
import dbConnect from "./src/config/dbConnect";

dbConnect().then((res) => {
        server.listen(PORT, () => {
            console.log(`Server listening on port ${ PORT }`); 
        });
    }
).catch((err) => {
    console.log("Error al conectar la BD");
});
