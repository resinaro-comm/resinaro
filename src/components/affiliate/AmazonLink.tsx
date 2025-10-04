"use client";

import React from "react";
import { buildAmazonAffiliateLink } from "@/utils/amazon-affiliate";

type AmazonLinkProps = {
  /** Amazon ASIN or URL to link to */
  href: string;
  
  /** Optional Amazon Associate tag override */
  tag?: string;
  
  /** Custom CSS classes */
  className?: string;
  
  /** Link content */
  children: React.ReactNode;
};

/**
 * Amazon Associate affiliate link component
 * 
 * Creates a properly formatted Amazon affiliate link with all required
 * attributes for compliance (nofollow, sponsored) and tracking.
 * 
 * @example
 * ```jsx
 * <AmazonLink href="B01N5IB20Q">View on Amazon</AmazonLink>
 * <AmazonLink href="https://www.amazon.co.uk/dp/B01N5IB20Q">View Product</AmazonLink>
 * ```
 */
export default function AmazonLink({ 
  href, 
  tag,
  className,
  children 
}: AmazonLinkProps) {
  // Build the affiliate link using our utility
  const affiliateUrl = React.useMemo(() => {
    try {
      return buildAmazonAffiliateLink(href, tag);
    } catch (error) {
      console.error("Error building Amazon affiliate link:", error);
      return "";
    }
  }, [href, tag]);
  
  // If we couldn't build a valid URL, render nothing
  if (!affiliateUrl) {
    console.error("Invalid Amazon link:", href);
    return <>{children}</>;
  }
  
  return (
    <a 
      href={affiliateUrl} 
      target="_blank" 
      rel="nofollow sponsored noopener"
      className={className}
    >
      {children}
    </a>
  );
}