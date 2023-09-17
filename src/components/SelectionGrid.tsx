import { Box, Grid } from "@mui/material";
import CalculateIcon from '@mui/icons-material/Calculate';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import SelectionCard, { SelectionCardPropsT } from "./SelectionCard";

///
/// Constants
///

const cardProps: SelectionCardPropsT[] = [
  { title: 'Calculator', icon: <CalculateIcon />, url: '/' },
  { title: 'Timer', icon: <AvTimerIcon />, url: '/' },
];

///
/// Main Component
///
/**
 * Renders a navigation menu.
 */
function SelectionGrid() {
  return (
    <Box sx={{
      flexGrow: 1,
      margin: 'auto',
    }}>
      <Grid container spacing={2}>
        <Grid>
          {cardProps.map((props) => (
            <SelectionCard {...props} />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export default SelectionGrid;