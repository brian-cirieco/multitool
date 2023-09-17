import { Card, CardHeader } from '@mui/material';
import { ReactElement } from 'react';

///
/// Types
///

export type SelectionCardPropsT = {
  title: string;
  icon: ReactElement;
  url: string;
};

///
/// Main Component
///
function SelectionCard({ title, icon, url }: SelectionCardPropsT): ReactElement<SelectionCardPropsT> {
  return (
    <Card>
      <CardHeader
        avatar={icon}
        title={title}
      />
    </Card>
  );
}

export default SelectionCard;