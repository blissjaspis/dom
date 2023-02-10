#!/usr/bin/env node

import esbuild from "esbuild"

const watch = process.argv.slice(1).includes('--watch')

const config = {
    bundle: true,
    minify: true,
    sourcemap: true,
    target: 'esNext',
  }

const builds = [
    { entryPoints: ['src/index.ts'], format: 'esm', outfile: 'dist/index.esm.js', platform: 'browser' },
    { entryPoints: ['src/index.ts'], format: 'cjs', outfile: 'dist/index.js', platform: 'browser' },
]

builds.forEach(async (build) => {
    if (watch) {
        let ctx = await esbuild.context({...config, ...build})
        await ctx.watch().then(()=> console.log(`Watching ${build.entryPoints} (${build.format})…`))
    } else {
        await esbuild.build({...config, ...build})
        console.log(`Build ${build.entryPoints} (${build.format})…`)
    }
})
  

