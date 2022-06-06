import fs from 'fs'
export async function showFiles(directoryName) {
  let filesList
  try {
    filesList = await fs.promises.readdir(directoryName)
  } catch (error) {
    console.error(error)
  }
  return filesList
}
