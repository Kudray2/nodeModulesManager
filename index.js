// index file
import fs from "fs"
import { showFiles } from "./showFiles.js"
const p = console.log
const direct = "./"

const files = showFiles(direct)
.then ( x => console.table(x))
