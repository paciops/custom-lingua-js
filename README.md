# Lingua WASM

This repository provides WebAssembly (WASM) bindings for [lingua-rs](https://github.com/pemistahl/lingua-rs), a natural language detection library written in Rust.

## Supported Languages

The WASM build includes support for:
- English
- Dutch
- French
- Swedish

## How It Works

This repository is automatically updated via a GitHub Actions workflow that:

1. Checks daily for new releases of [lingua-rs](https://github.com/pemistahl/lingua-rs)
2. Clones the latest release and builds it to WebAssembly using `wasm-pack`
3. Publishes the compiled WASM package to this repository

The build targets Node.js (`--target nodejs`).

## Installation

```bash
npm install <package-name>
```

## Usage

```javascript
const lingua = require('lingua-wasm');

// Use the language detection API
// See lingua-rs documentation for available methods
```

## Version

The current version of lingua-rs used in this build is stored in the `VERSION` file.

## License

This project wraps [lingua-rs](https://github.com/pemistahl/lingua-rs). Please refer to the original repository for licensing information.
