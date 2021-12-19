import { DenonConfig } from 'https://deno.land/x/denon@2.4.7/mod.ts';

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: 'deno run --allow-net index.tsx',
      desc: 'run my index.ts file',
    },
  },
};

export default config;