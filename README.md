# Lingua WASM

A WebAssembly wrapper for [lingua-rs](https://github.com/pemistahl/lingua-rs) by [Peter M. Stahl](https://github.com/pemistahl), a natural language detection library written in Rust.

> **Note:** This is a custom build with only a subset of languages. For the full library with all 75+ supported languages, please use the original [lingua-rs](https://github.com/pemistahl/lingua-rs).

## Supported Languages

This build includes support for:
- English
- Dutch
- French
- Swedish

## How It Works

This repository is automatically updated via a GitHub Actions workflow (`.github/workflows/build.yml`) that:

1. **Runs daily** via cron schedule (`0 9 * * *` - 9 AM UTC / 10 AM CET / 11 AM CEST) or manually via workflow_dispatch
2. **Checks for new releases** by querying the GitHub API for the latest lingua-rs release tag
3. **Compares versions** with the local `VERSION` file to avoid unnecessary rebuilds
4. **If a new version is detected**:
   - Clones the specific release tag of lingua-rs
   - Updates the Rust toolchain
   - Installs wasm-pack
   - Builds WASM with custom features: `--no-default-features --features "english,dutch,french,swedish"`
   - Replaces repository contents with the built WASM package
   - Updates the VERSION file
   - Commits changes and creates a git tag matching the lingua-rs version
   - Pushes to the main branch
5. **If no new version** exists, all build steps are skipped to save resources

The build targets Node.js (`--target nodejs`).

## Installation

```bash
# Latest version
npm install github:paciops/custom-lingua-js

# Specific version (matching lingua-rs tags)
npm install github:paciops/custom-lingua-js#v1.8.0
```

## Usage

```javascript
const lingua = require('lingua');

// Use the language detection API
// See lingua-rs documentation for available methods
```

## Version

The current version of lingua-rs used in this build is stored in the `VERSION` file.

## Credits

All credit for the language detection library goes to [Peter M. Stahl](https://github.com/pemistahl) and the [lingua-rs](https://github.com/pemistahl/lingua-rs) project.

## License

This project wraps [lingua-rs](https://github.com/pemistahl/lingua-rs). Please refer to the original repository for licensing information.
