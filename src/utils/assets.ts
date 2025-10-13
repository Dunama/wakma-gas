// Utility to resolve images from src/assets with a safe fallback
// Usage: getAssetUrl('image.jpg', '/image.jpg')
// It lets you move images into src/assets without breaking builds; if not present, falls back.

// Import all assets under src/assets as URL strings (Vite >=5: use `query` + `import`)
const assetMap = import.meta.glob('../assets/**/*', {
  eager: true,
  import: 'default',
  query: '?url'
}) as Record<string, string>;

export function getAssetUrl(fileName: string, fallback: string): string {
  // Find by file name at the end of the path to avoid requiring directory knowledge
  for (const [key, url] of Object.entries(assetMap)) {
    if (key.endsWith('/' + fileName)) return url;
  }
  return fallback;
}

// Convenience helpers when file name matches the public path exactly
export const fromAssetsOrPublic = (name: string) => getAssetUrl(name, `/${name}`);