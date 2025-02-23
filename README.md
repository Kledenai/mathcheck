[![Build Status](https://img.shields.io/github/actions/workflow/status/kledenai/mathcheck/ci.yml)](https://github.com/kledenai/mathcheck/actions)
[![License](https://img.shields.io/npm/l/mathcheck)](https://github.com/kledenai/mathcheck/blob/main/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/mathcheck)](https://www.npmjs.com/package/mathcheck)

# MathCheck

**MathCheck** is a lightweight library for validating, simplifying, and converting mathematical expressions to LaTeX, written in TypeScript. It's perfect for educational apps, scientific tools, and financial applications that require accurate mathematical computations and formatting.

## ✨ Why Use MathCheck?

- 🚀 **Lightweight and Fast**: Optimized for performance in real-world applications.
- 🛠️ **TypeScript First**: Fully typed for better developer experience and type safety.
- 🔍 **Accurate Validation**: Detects syntax errors, unbalanced parentheses, and invalid characters.
- ✅ **Simplification**: Automatically simplifies valid mathematical expressions.
- 📄 **LaTeX Conversion**: Converts mathematical expressions into properly formatted LaTeX.

## 📦 Installation

You can install MathCheck using npm or yarn:

```bash
npm install mathcheck
```

or

```bash
yarn add mathcheck
```

## 🛠️ Usage

### Importing

```typescript
import {
  validateExpression,
  simplifyExpression,
  convertToLatex,
} from "mathcheck";
```

### Validating Mathematical Expressions

```typescript
const validation = validateExpression("(2 + 3) * 5");
console.log(validation); // { isValid: true }
```

### Simplifying Expressions

```typescript
const simplified = simplifyExpression("2 + 3 * 5");
console.log(simplified); // { success: true, result: 17 }
```

### Converting to LaTeX

```typescript
const latex = convertToLatex("(2 + 3) * 5");
console.log(latex); // { success: true, latex: '\\left(2 + 3\\right) \\cdot 5' }
```

## 📜 API

```typescript
validateExpression(expression: MathExpression): ValidationResult
simplifyExpression(expression: MathExpression): SimplificationResult
convertToLatex(expression: MathExpression): LatexConversionResult
```

### Types

- ValidationResult: { isValid: boolean, error?: string }
- SimplificationResult: { success: boolean, result?: number, error?: string }
- LatexConversionResult: { success: boolean, latex?: string, error?: string }

## 🔒 Requirements

- Node.js version 14.0.0 or higher.

## 🛡️ License

This project is licensed under the MIT License. See the LICENSE file for more information.

## 👨‍💻 Contribution

Feel free to open issues or submit pull requests to improve MathCheck. All contributions are welcome! 🌟

1. Fork the repository.
2. Create a branch for your feature: git checkout -b my-feature.
3. Make your changes and commit: git commit -m 'Add my awesome feature'.
4. Push to the repository: git push origin my-feature.
5. Open a pull request on GitHub.

## 💡 Author

Created by Kledenai. [me@kledenai.com](mailto:me@kledenai.com).
