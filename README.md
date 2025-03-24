# 🎲 A tiny JS module for random strings

Generates random strings with digits, special chars, and Russian/English letters.

## 🚀 Installation

```bash
git clone https://github.com/mramornov164/smart-str-gen.git
```

## 🔧 Usage

```javascript
// Examples
console.log(srtGen.gen("User-###", "en"));      // "User-927"
console.log(srtGen.gen("Random Latters: ???", "ru"));   // "Random Latters: осн"
```

## 🎭 Patterns

- `#` : Random digit (0-9)
- `?` : Random letter (ru or en)
- `@` : Random special character
