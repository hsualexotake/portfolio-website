// @ts-ignore - TypeScript declaration issue with unicornstudio-react/next export
import UnicornScene from "unicornstudio-react/next";

export const Component = () => {
  const handleLoad = () => {
    console.log("UnicornStudio animation loaded successfully!");
  };

  const handleError = (error: Error) => {
    console.error("UnicornStudio animation failed to load:", error);
  };

  return (
    <UnicornScene
      projectId="1grEuiVDSVmyvEMAYhA6"
      width={808}
      height={526}
      production={true}
      scale={1}
      dpi={1.5}
      fps={60}
      lazyLoad={false}
      onLoad={handleLoad}
      onError={handleError}
      placeholder={
        <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 animate-pulse" />
      }
      showPlaceholderWhileLoading={true}
      showPlaceholderOnError={true}
    />
  );
};