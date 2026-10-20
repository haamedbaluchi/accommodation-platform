import { ContentHighlight } from '@shared/ui';
import { HOME_FEATURE_SECTIONS } from '../model/home-highlights.data';


export function HomeHighlightsList() {
  return (
    <>
      {HOME_FEATURE_SECTIONS.map(
        ({
          id,
          title,
          description,
          imageSrc,
          imageAlt,
          className,
          imageWidth,
          imageHeight,
          reverse,
          animationType,
          children,
        }) => (
          <ContentHighlight
            key={id}
            title={title}
            description={description}
            imageSrc={imageSrc}
            imageAlt={imageAlt}
            className={className}
            imageWidth={imageWidth}
            imageHeight={imageHeight}
            reverse={reverse}
            animationType={animationType}
          >
            {children}
          </ContentHighlight>
        ),
      )}
    </>
  );
}
