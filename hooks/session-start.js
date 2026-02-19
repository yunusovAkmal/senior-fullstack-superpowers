#!/usr/bin/env node
// SessionStart hook for superpowers plugin — cross-platform (macOS/Windows/Linux)

const fs = require('fs');
const path = require('path');
const os = require('os');

// Determine plugin root directory
const SCRIPT_DIR = __dirname;
const PLUGIN_ROOT = path.resolve(SCRIPT_DIR, '..');

// Check for legacy skills directory
let warningMessage = '';
const legacySkillsDir = path.join(os.homedir(), '.config', 'superpowers', 'skills');
if (fs.existsSync(legacySkillsDir)) {
  warningMessage = '\\n\\n<important-reminder>IN YOUR FIRST REPLY AFTER SEEING THIS MESSAGE YOU MUST TELL THE USER:\\u26a0\\ufe0f **WARNING:** Superpowers now uses Claude Code\\'s skills system. Custom skills in ~/.config/superpowers/skills will not be read. Move custom skills to ~/.claude/skills instead. To make this message go away, remove ~/.config/superpowers/skills</important-reminder>';
}

// Read using-superpowers skill content
let usingSuperpowersContent = '';
const skillPath = path.join(PLUGIN_ROOT, 'skills', 'using-superpowers', 'SKILL.md');
try {
  usingSuperpowersContent = fs.readFileSync(skillPath, 'utf8');
} catch (err) {
  usingSuperpowersContent = 'Error reading using-superpowers skill: ' + err.message;
}

// Escape for JSON embedding
function escapeForJson(str) {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t');
}

const escapedContent = escapeForJson(usingSuperpowersContent);
const sessionContext = `<EXTREMELY_IMPORTANT>\\nYou have superpowers.\\n\\n**Below is the full content of your 'superpowers:using-superpowers' skill - your introduction to using skills. For all other skills, use the 'Skill' tool:**\\n\\n${escapedContent}\\n\\n${warningMessage}\\n</EXTREMELY_IMPORTANT>`;

// Output context injection as JSON
// Both shapes for compatibility (Cursor + Claude Code)
const output = JSON.stringify({
  additional_context: sessionContext,
  hookSpecificOutput: {
    hookEventName: 'SessionStart',
    additionalContext: sessionContext
  }
});

process.stdout.write(output);
process.exit(0);
