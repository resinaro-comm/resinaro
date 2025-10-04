#!/bin/bash

# Script to update all page.tsx files to use async params for Next.js 15 compliance

echo "Updating page.tsx files for Next.js 15 async params..."

# Find all page.tsx files that contain PageProps interface
find /home/giuseppe/resinaro/src/app -name "page.tsx" -type f | while read -r file; do
    if grep -q "interface PageProps" "$file" && grep -q "params.*locale" "$file"; then
        echo "Updating: $file"
        
        # Update the interface definition
        sed -i 's/params: { locale: string }/params: Promise<{ locale: string }>/' "$file"
        
        # Update function signature to be async
        sed -i 's/export default function \([^(]*\)({ params }/export default async function \1({ params }/' "$file"
        
        # Update params usage to await
        sed -i 's/if (params\.locale === "it")/const { locale } = await params;\n  if (locale === "it")/' "$file"
        
        echo "Updated: $file"
    fi
done

echo "All page.tsx files updated for async params."
