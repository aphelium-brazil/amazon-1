import art from "ascii-art";
import fs from "fs";
import { app } from "./app";
import spdy from "spdy";
import { AppError } from "@shared/errors/AppError";

spdy.createServer(
    {
        key: fs.readFileSync("./keys/server.key"),
        cert: fs.readFileSync("./keys/server.crt"),
    },
    app
).listen(3333, (err) => {
    if (err) {
        throw new AppError(err);
    }
    art.font("Amazon-1", "Doom", (err: string, rendered: void) => {
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
