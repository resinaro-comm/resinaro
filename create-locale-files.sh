#!/bin/bash

# Script to create missing locale files for all pages
# This will create placeholder locale files that can be filled with proper content

LOCALE_DIR="/home/giuseppe/resinaro/src/app/[locale]"

# Function to create a basic English page template
create_en_page() {
    local dir="$1"
    local page_name="$2"
    
    cat > "$dir/page.en.tsx" << 'EOF'
// English version of this page
export default function PageEn() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">English Content</h1>
        <p className="text-center text-gray-600">
          This page needs English content. Please update this file with the proper English translation.
        </p>
      </div>
    </div>
  );
}
EOF
}

# Function to create a basic Italian page template
create_it_page() {
    local dir="$1"
    local page_name="$2"
    
    cat > "$dir/page.it.tsx" << 'EOF'
// Italian version of this page
export default function PageIt() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Contenuto Italiano</h1>
        <p className="text-center text-gray-600">
          Questa pagina ha bisogno di contenuto italiano. Aggiorna questo file con la traduzione italiana appropriata.
        </p>
      </div>
    </div>
  );
}
EOF
}

# Function to create a dynamic loader page.tsx
create_loader_page() {
    local dir="$1"
    local component_name="$2"
    
    cat > "$dir/page.tsx" << EOF
// Dynamic loader for $component_name
import ${component_name}It from './page.it';
import ${component_name}En from './page.en';

interface PageProps {
  params: { locale: string };
}

export default function ${component_name}Page({ params }: PageProps) {
  if (params.locale === 'it') return <${component_name}It />;
  return <${component_name}En />;
}
EOF
}

echo "Locale file creation script ready. Run specific functions as needed."
