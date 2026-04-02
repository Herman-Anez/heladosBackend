// generate.js
const { execSync } = require('child_process');
const config = require('./entity-config');

// Construimos los argumentos del comando
const args = Object.entries(config)
  .map(([key, value]) => `--${key} "${value}"`)
  .join(' ');

const command = `rm -fr ./test-src && hygen 1nest entity ${args}`;

console.log(`Ejecutando: ${command}`);

try {
  execSync(command, { stdio: 'inherit' });
  console.log('✅ Entidad generada con éxito');
  
} catch (error) {
  console.error('❌ Error al generar la entidad');
}

