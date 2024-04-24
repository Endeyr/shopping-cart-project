export const getWikiFileURL = (filename: string) => {
  // Replace spaces with underscores in the filename
  const sanitizedFilename = filename.replace(/ /g, "_");

  // Cache buster string
  const cacheBuster = "7263b";

  // Construct the URL with the sanitized filename and cache buster
  return `https://oldschool.runescape.wiki/images/${sanitizedFilename}?${cacheBuster}`;
};
