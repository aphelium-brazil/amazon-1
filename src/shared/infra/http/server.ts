import art from "ascii-art";

import { app } from "./app";

app.listen(3333, () => {
    try {
        art.font("Currencies", "doom", (err: string, rendered: void) => {
            console.log(
                "-----------------------------------------------------------"
            );

            console.log(rendered);

            console.log(
                `Build with ❤ by Aphelium.   |   Version: ${process.env.VERSION}`
            );

            console.log(
                "-----------------------------------------------------------"
            );
        });
    } catch (err) {
        console.log(err);
    }
});
