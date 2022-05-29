import art from "ascii-art";
import fs from "fs";
import spdy from "spdy";
import { app } from "./app";

spdy.createServer(
    {
        key: fs.readFileSync("./keys/server.key"),
        cert: fs.readFileSync("./keys/server.crt"),
    },
    app
).listen(3333, () => {
    art.font("Amazon-1", "Doom", (_: string, rendered: void) => {
        console.log(
            "-----------------------------------------------------------"
        );

        console.log(rendered);

        console.log(
            `Build with ❤  by Aphelium.   |   Version: ${process.env.VERSION}`
        );

        console.log(
            "-----------------------------------------------------------"
        );
    });
});
