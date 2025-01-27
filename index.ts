import server from "./src/server";
import { PORT } from "./src/config/envs";


server.listen(PORT, () => {
    console.log(`Server listening on port ${ PORT }`);
    
});