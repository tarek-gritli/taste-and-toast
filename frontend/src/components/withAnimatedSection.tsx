import { ComponentType } from "react";
import AnimatedSection from "./AnimatedSection";

const withAnimatedSection = <P extends object>(
  WrappedComponent: ComponentType<P>
) => {
  return function (props: P) {
    return (
      <AnimatedSection>
        {(inView) => <WrappedComponent {...props} inView={inView} />}
      </AnimatedSection>
    );
  };
};

export default withAnimatedSection;
