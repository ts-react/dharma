import path from 'path';
import fs from 'fs';
import { IBundleOptions } from 'father';

const SrcDirectory = path.relative(__dirname, 'src');

function getEntries(path) {
  let files = fs.readdirSync(path);

  return files
    .filter(item => /(\.ts)$/.test(item))
    .map(item => `${path}/${item}`);
}

const options: IBundleOptions = {
  entry: getEntries(SrcDirectory),
  esm: {
    type: 'rollup',
    importLibToEs: true
  },
  cjs: 'rollup',
  umd: {
    name: 'AwesomeUtils'
  }
};

export default options;
