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

This repository is automatically updated via a GitHub Actions workflow that:

1. Checks daily for new releases of [lingua-rs](https://github.com/pemistahl/lingua-rs)
2. Clones the latest release and builds it to WebAssembly using `wasm-pack`
3. Tags and publishes the compiled WASM package to this repository

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
