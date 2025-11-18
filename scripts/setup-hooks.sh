#!/bin/bash
# Setup script for Git hooks
# This installs husky and configures pre-commit hooks

echo "🔧 Setting up Git hooks..."

# Check if husky is installed
if ! command -v npx &> /dev/null && ! command -v bunx &> /dev/null; then
    echo "❌ Neither npx nor bunx found. Please install Node.js or Bun."
    exit 1
fi

# Create .husky directory if it doesn't exist
mkdir -p .husky

# Make the pre-commit hook executable
chmod +x .husky/pre-commit

# Create husky setup script
cat > .husky/_/husky.sh << 'EOF'
#!/usr/bin/env sh
if [ -z "$husky_skip_init" ]; then
  debug () {
    if [ "$HUSKY_DEBUG" = "1" ]; then
      echo "husky (debug) - $1"
    fi
  }

  readonly hook_name="$(basename -- "$0")"
  debug "starting $hook_name..."

  if [ "$HUSKY" = "0" ]; then
    debug "HUSKY env variable is set to 0, skipping hook"
    exit 0
  fi

  if [ -f ~/.huskyrc ]; then
    debug "sourcing ~/.huskyrc"
    . ~/.huskyrc
  fi

  readonly husky_skip_init=1
  export husky_skip_init
  sh -e "$0" "$@"
  exitCode="$?"

  if [ $exitCode != 0 ]; then
    echo "husky - $hook_name hook exited with code $exitCode (error)"
  fi

  if [ $exitCode = 127 ]; then
    echo "husky - command not found in PATH=$PATH"
  fi

  exit $exitCode
fi
EOF

chmod +x .husky/_/husky.sh

# Configure git hooks path
git config core.hooksPath .husky

echo "✅ Git hooks configured successfully!"
echo ""
echo "📝 The following hooks are now active:"
echo "   - pre-commit: Validates deployment and runs linter"
echo ""
echo "💡 To skip hooks temporarily, use: git commit --no-verify"

