## [1.0.2] - 2025-02-24

### Fixed

- Resolved ESM/CommonJS compatibility issue:
  - Updated tsconfig.json to use "module": "ESNext" instead of "CommonJS" for proper ESM support.
  - Set "target": "ES2020" to enable modern JavaScript features.
  - Enabled TypeScript declaration generation with "declaration": true.
- Fixed export syntax in compiled JavaScript files:
  - Ensured that TypeScript outputs proper ESM exports using export {} syntax instead of exports. object.

## [1.0.1] - 2025-02-23

### Fixed

- Replaced MathExpression from an interface to a type alias of string.
  - Reason: Simplified usage by allowing mathematical expressions to be passed directly as a string instead of requiring an object.
  - Benefit: Makes the code cleaner and more intuitive, enhancing flexibility when passing mathematical expressions.

## [1.0.0] - 2025-02-23

### Added

- Initial release of **MathCheck**, a lightweight mathematical expression validator, simplifier, and LaTeX converter written in TypeScript.
- Core functionality to:
  - ✅ Validate mathematical expressions for syntax correctness, balanced parentheses, and invalid characters.
  - ➗ Simplify valid mathematical expressions and return computed results.
  - 📄 Convert mathematical expressions into properly formatted LaTeX.
- TypeScript type definitions for `ValidationResult`, `SimplificationResult`, and `LatexConversionResult`.
- Example usage and API documentation in the README.
- ESLint configuration for TypeScript code quality.
- Jest setup for unit testing all core functionalities.
- License (MIT).
- Scripts for building, linting, and testing in `package.json`.

### Fixed

- Resolved issues with LaTeX conversion handling of special characters and parentheses.
- Addressed edge cases for mathematical operations that return `NaN` (e.g., division by zero).

### Notes

- Initial release includes full validation, simplification, and LaTeX conversion functionalities.
- Future updates will focus on adding support for advanced mathematical operations, custom error handling, and extended LaTeX formatting features.
