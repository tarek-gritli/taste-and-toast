import OurStory from "./OurStory";
import MeetOurTeam from "./MeetOurTeam";
import withAnimatedSection from "./withAnimatedSection";

const AnimatedOurStory = withAnimatedSection(OurStory);
const AnimatedMeetOurTeam = withAnimatedSection(MeetOurTeam);

export default function About() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <AnimatedOurStory />
      <AnimatedMeetOurTeam />
    </div>
  );
}
