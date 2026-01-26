const { test, describe } = require('node:test');
const assert = require('node:assert');

describe('Lingua WASM - CJS', () => {
  const { LanguageDetectorBuilder } = require('./lingua.js');
  const detector = LanguageDetectorBuilder.fromAllLanguages().build();

  test('detects English', () => {
    const result = detector.detectLanguageOf('Hello, how are you today?');
    assert.strictEqual(result, 'English');
  });

  test('detects French', () => {
    const result = detector.detectLanguageOf('Bonjour, comment allez-vous?');
    assert.strictEqual(result, 'French');
  });

  test('detects Dutch', () => {
    const result = detector.detectLanguageOf('Goedemorgen, hoe gaat het met u?');
    assert.strictEqual(result, 'Dutch');
  });

  test('detects Swedish', () => {
    const result = detector.detectLanguageOf('God morgon, hur mår du idag?');
    assert.strictEqual(result, 'Swedish');
  });

  test('computes confidence values', () => {
    const confidence = detector.computeLanguageConfidence('Hello world', 'English');
    assert.ok(confidence > 0, 'Confidence should be greater than 0');
    assert.ok(confidence <= 1, 'Confidence should be at most 1');
  });

  test('returns undefined for empty text', () => {
    const result = detector.detectLanguageOf('');
    assert.strictEqual(result, undefined);
  });
});

describe('Lingua WASM - ESM', () => {
  test('detects English via dynamic import', async () => {
    const { LanguageDetectorBuilder } = await import('./lingua.js');
    const detector = LanguageDetectorBuilder.fromAllLanguages().build();
    const result = detector.detectLanguageOf('Hello, how are you today?');
    assert.strictEqual(result, 'English');
  });

  test('detects French via dynamic import', async () => {
    const { LanguageDetectorBuilder } = await import('./lingua.js');
    const detector = LanguageDetectorBuilder.fromAllLanguages().build();
    const result = detector.detectLanguageOf('Bonjour, comment allez-vous?');
    assert.strictEqual(result, 'French');
  });
});
