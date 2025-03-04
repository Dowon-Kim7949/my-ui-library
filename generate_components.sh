#!/bin/bash

COMPONENTS=("Header" "Footer" "Input" "Button" "Breadcrum" "Disclosure" "Select" "DropDown" "Checkbox" "Radio" "Table" "Tree" "Dark" "Theme" "Pagination" "Image" "Badge" "Icon" "Map" "Tooltip" "Tap" "Spider" "Step" "FileUpload" "Card" "Dialog")

mkdir -p src/components

for COMPONENT in "${COMPONENTS[@]}"; do
  FILE="src/components/R${COMPONENT}.vue"
  if [ ! -f "$FILE" ]; then
    cat <<EOL > "$FILE"
<script setup lang="ts">
defineProps<{ text?: string }>()
</script>

<template>
  <div class="r-${COMPONENT,,} p-4 border border-gray-300 rounded">
    {{ text || "R${COMPONENT}" }}
  </div>
</template>

<style scoped>
/* 필요한 스타일 추가 */
</style>
EOL
    echo "✅ Created: $FILE"
  else
    echo "⚠️ Already exists: $FILE"
  fi
done
