import {
  Match,
  SVGViewer,
  SingleEliminationBracket,
} from "@g-loot/react-tournament-brackets";
import { mockMatches } from "./mock";

const TourneyBracket = () => {
  return (
    <>
      <SingleEliminationBracket
        matchComponent={Match}
        matches={mockMatches}
        svgWrapper={({ children, ...props }) => (
          <SVGViewer width={500} height={500} {...props}>
            {children}
          </SVGViewer>
        )}
      />
    </>
  );
};

export default TourneyBracket;
