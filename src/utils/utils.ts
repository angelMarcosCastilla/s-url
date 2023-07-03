import { readFile, writeFile } from 'node:fs/promises'

export const readFileData = async (path: string) => {
  const getContentFile = await readFile(path, 'utf-8')
  const parsedContentFile = JSON.parse(getContentFile)
  return parsedContentFile
}

export const writeFileData = async (path: string, data: any) => {
  await writeFile(path, JSON.stringify(data, null, 2))
}
