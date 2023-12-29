import { metadata } from "@/data/data";

export function getMetadata(currentUrl: string | any[]) {
  // Find metadata based on the current URL
  const matchingMetadata = metadata.find((item) =>
    currentUrl.includes(item.title)
  );

  // Return the matching metadata or default values if not found
  return {
    title: matchingMetadata ? matchingMetadata.title : "Default Title",
    description: matchingMetadata
      ? matchingMetadata.description
      : "Default Description",
  };
}
