import * as fs from 'fs';
import * as path from 'path';

export default class FileReader {
  folder_path: string;
  files_name: string[];

  constructor(folder_path: string) {
    this.folder_path = folder_path;
    this.files_name = [];
  }

  async readFolder(filter: string | null = null) {
    await fs.readdirSync(this.folder_path).map(file_name => {
      if (file_name.includes('.cmds.csml')) return;
      if (filter) {
        return (
          file_name.includes(filter) &&
          this.files_name.push(path.join(this.folder_path, file_name))
        );
      } else {
        return this.files_name.push(path.join(this.folder_path, file_name));
      }
    });
  }

  async readFile(file_path: string) {}

  get files() {
    return this.files_name;
  }
}
