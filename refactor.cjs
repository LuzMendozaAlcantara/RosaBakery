const fs = require('fs');
const path = require('path');

const srcDir = path.resolve('src');
const componentsDir = path.join(srcDir, 'components');
const contextDir = path.join(srcDir, 'context');
const stylesDir = path.join(srcDir, 'styles');

// Create styles dir if it doesn't exist
if (!fs.existsSync(stylesDir)) {
  fs.mkdirSync(stylesDir);
}

// 1. Move CSS modules
const componentsFiles = fs.readdirSync(componentsDir);
componentsFiles.forEach(file => {
  if (file.endsWith('.module.css')) {
    const oldPath = path.join(componentsDir, file);
    const newPath = path.join(stylesDir, file);
    fs.renameSync(oldPath, newPath);
    console.log('Moved ' + file + ' to styles/');
  }
});

// 2. Move CartContext
const contextFile = path.join(contextDir, 'CartContext.jsx');
if (fs.existsSync(contextFile)) {
  const newContextPath = path.join(componentsDir, 'CartContext.jsx');
  fs.renameSync(contextFile, newContextPath);
  console.log('Moved CartContext.jsx to components/');
}

// 3. Update paths in components
const jsFiles = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx'));
jsFiles.forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Update CSS imports
  content = content.replace(/import\s+styles\s+from\s+['"]\.\/([^'"]+\.module\.css)['"]/g, "import styles from '../styles/$1'");
  
  // Update CartContext imports
  content = content.replace(/import\s+\{([^}]+)\}\s+from\s+['"]\.\.\/context\/CartContext['"]/g, "import {$1} from './CartContext'");

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log('Updated imports in ' + file);
  }
});

// 4. Update main.jsx
const mainPath = path.join(srcDir, 'main.jsx');
if (fs.existsSync(mainPath)) {
  let mainContent = fs.readFileSync(mainPath, 'utf8');
  const originalMain = mainContent;
  mainContent = mainContent.replace(/['"]\.\/context\/CartContext\.jsx['"]/, "'./components/CartContext.jsx'");
  if (mainContent !== originalMain) {
    fs.writeFileSync(mainPath, mainContent);
    console.log('Updated imports in main.jsx');
  }
}

// 5. Clean up context dir if empty
if (fs.existsSync(contextDir) && fs.readdirSync(contextDir).length === 0) {
  fs.rmdirSync(contextDir);
  console.log('Removed empty context directory');
}
