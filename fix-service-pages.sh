#!/bin/bash

# Script to clean up all corrupted service page files
cd /home/giuseppe/resinaro

# List of service files that need cleaning
services=(
    "housing"
    "id-card" 
    "mental-health"
    "passport"
    "settled-status"
    "translation"
    "nin-support"
)

for service in "${services[@]}"; do
    echo "Cleaning $service service page..."
    
    # Create clean dynamic loader
    cat > "src/app/[locale]/services/$service/page.tsx" << EOF
// Dynamic loader for ${service^} service page
import ${service^}ServicePageIt from './page.it';
import ${service^}ServicePageEn from './page.en';

interface PageProps {
  params: { locale: string };
}

export default function ${service^}ServicePage({ params }: PageProps) {
  if (params.locale === 'it') return <${service^}ServicePageIt />;
  return <${service^}ServicePageEn />;
}
EOF

    echo "Fixed $service"
done

echo "All service pages cleaned!"
