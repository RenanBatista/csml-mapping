import FileReader from './FileReader';

console.log('Welcome to CSML Mapping tool');

const read = new FileReader('flows');
read.readFolder('stoodi');
console.log(read.files_name);
