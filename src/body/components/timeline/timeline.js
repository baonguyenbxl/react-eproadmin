import "./timeline.css"
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import Typography from '@mui/material/Typography';



export const AffaireTimeline = ({data}) =>
{
  let droite = true;
  return (
    <Timeline position="alternate">{ data?.map( ( r ) =>
    {
      droite = droite ? false : true;
      return ( <TimelineItem position="alternate">
        <TimelineOppositeContent sx={ { m: 'auto 0' } }
          align={ droite ? 'right' : 'left' }
          variant="body2"
          color="text.secondary"
        >{ r.envoye }
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={ { bgcolor: 'secondary.main' } }>
            
          </TimelineConnector>
        </TimelineSeparator>
        <TimelineContent sx={ { py: '12px', px: 2 } }>
          <Typography variant="h6" component="span">{ r.id }</Typography>
          <Typography>{ r.gabarit }</Typography>
          <Typography>{ r.vers }</Typography>
        </TimelineContent>
      </TimelineItem> )
    } ) }
    </Timeline>
  );
}
