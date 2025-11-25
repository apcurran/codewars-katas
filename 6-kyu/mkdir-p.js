import fs from "node:fs";
import path from "node:path";

function mkdirp(...parts) {
    const dirPath = path.resolve(path.join(...parts));

    if (fs.existsSync(dirPath)) {
        return;
    }

    const parent = path.dirname(dirPath);

    if (parent !== dirPath) {
        mkdirp(parent);
    }

    try {
        fs.mkdirSync(dirPath);
    } catch (err) {
        if (err.code !== "EEXIST") {
            throw err;
        }
    }
}
