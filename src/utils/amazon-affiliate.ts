/**
 * Amazon affiliate link utilities
 * 
 * These utilities help create compliant Amazon affiliate links
 * with the correct attribution and parameters.
 */

/**
 * Amazon ASIN regular expression pattern
 *
 * Matches:
 *   - ASINs directly (10 character alphanumeric)
 *   - ASINs in Amazon URLs: amazon.com/dp/XXXXXXXXXX
 *   - ASINs in Amazon search: amazon.com/s?k=XXXXXXXXXX
 */
const AMAZON_ASIN_REGEX = /(?:\/dp\/|\/gp\/product\/|\/ASIN\/|\/s\?k=|^)([A-Z0-9]{10})/i;

/**
 * Amazon domain pattern for URL detection
 */
const AMAZON_DOMAIN_REGEX = /^(?:https?:\/\/)?(?:www\.)?amazon\.(com|co\.uk|ca|de|fr|it|es|jp|in|com\.au|com\.br|com\.mx|nl|sg)(?:\/|\?|$)/i;

/**
 * Default parameters for Amazon affiliate links
 */
const DEFAULT_PARAMS = {
  linkCode: 'll1',
  language: 'en_GB',
  ref_: 'as_li_ss_tl',
};

/**
 * Checks if a string is a valid 10-character Amazon ASIN
 */
export function isAmazonASIN(potentialAsin: string): boolean {
  return /^[A-Z0-9]{10}$/i.test(potentialAsin);
}

/**
 * Checks if a URL is an Amazon product page URL
 */
export function isAmazonUrl(url: string): boolean {
  return AMAZON_DOMAIN_REGEX.test(url);
}

/**
 * Extracts an ASIN from an Amazon URL if present
 * @returns The ASIN if found, or null if not found
 */
export function extractASINFromUrl(url: string): string | null {
  const match = url.match(AMAZON_ASIN_REGEX);
  return match ? match[1] : null;
}

/**
 * Builds an Amazon affiliate link from an ASIN or Amazon URL
 * 
 * @param asinOrUrl - An Amazon ASIN or full Amazon URL
 * @param tag - Optional override for the Amazon Associate tag
 * @returns A properly formatted Amazon affiliate link
 */
export function buildAmazonAffiliateLink(asinOrUrl: string, tag?: string): string {
  if (!asinOrUrl) {
    throw new Error('ASIN or URL is required');
  }
  
  const associateTag = tag || process.env.NEXT_PUBLIC_AMAZON_ASSOC_TAG;
  
  if (!associateTag) {
    throw new Error('Amazon Associate tag is not defined');
  }
  
  // If input is a valid ASIN, build a direct link
  if (isAmazonASIN(asinOrUrl)) {
    return `https://www.amazon.co.uk/dp/${asinOrUrl}?tag=${associateTag}&linkCode=${DEFAULT_PARAMS.linkCode}&language=${DEFAULT_PARAMS.language}&ref_=${DEFAULT_PARAMS.ref_}`;
  }
  
  // For URLs, normalize and add affiliate parameters
  if (isAmazonUrl(asinOrUrl)) {
    // Extract the ASIN if present
    const asin = extractASINFromUrl(asinOrUrl);
    
    if (asin) {
      // If we found an ASIN, create a clean link
      return `https://www.amazon.co.uk/dp/${asin}?tag=${associateTag}&linkCode=${DEFAULT_PARAMS.linkCode}&language=${DEFAULT_PARAMS.language}&ref_=${DEFAULT_PARAMS.ref_}`;
    } else {
      // If no ASIN found, append tag to the original URL
      const url = new URL(asinOrUrl.startsWith('http') ? asinOrUrl : `https://${asinOrUrl}`);
      
      // Clean up any existing tag or duplicate parameters
      url.searchParams.delete('tag');
      url.searchParams.delete('linkCode');
      url.searchParams.delete('ref_');
      url.searchParams.delete('language');
      
      // Add our parameters
      url.searchParams.set('tag', associateTag);
      url.searchParams.set('linkCode', DEFAULT_PARAMS.linkCode);
      url.searchParams.set('language', DEFAULT_PARAMS.language);
      url.searchParams.set('ref_', DEFAULT_PARAMS.ref_);
      
      return url.toString();
    }
  }
  
  // If it's not an ASIN or Amazon URL, try to find an ASIN in the string
  const embeddedAsin = extractASINFromUrl(asinOrUrl);
  if (embeddedAsin) {
    return `https://www.amazon.co.uk/dp/${embeddedAsin}?tag=${associateTag}&linkCode=${DEFAULT_PARAMS.linkCode}&language=${DEFAULT_PARAMS.language}&ref_=${DEFAULT_PARAMS.ref_}`;
  }
  
  // If we couldn't parse it, throw an error
  throw new Error('Invalid Amazon ASIN or URL');
}