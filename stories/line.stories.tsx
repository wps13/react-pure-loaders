import React from 'react';
import { storiesOf } from '@storybook/react';

import LineScale from '../src/LineScale';
import LineScaleParty from '../src/LineScaleParty';
import LineScalePulseOut from '../src/LineScalePulseOut';
import LineScalePulseOutRapid from '../src/LineScalePulseOutRapid';
import LineScaleRandom from '../src/LineScaleRandom';
import LineSpinFadeLoader from '../src/LineSpinFadeLoader';

const color = '#000000';
const style = {
    display: 'flex',
    flex: '0 1 auto',
    flexDirection: 'column' as 'column',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: '25%',
    maxWidth: '25%',
    height: '150px',
    alignItems: 'center',
    justifyContent: 'center',
};

storiesOf('Line Loaders', module)
    .add('Scale', () => <div style={style}><LineScale color={color} loading/></div>)
    .add('Scale Party', () => <div style={style}><LineScaleParty color={color} loading/></div>)
    .add('Scale Pulse Out', () => <div style={style}><LineScalePulseOut color={color} loading/></div>)
    .add('Scale Pulse Out Rapid', () => <div style={style}><LineScalePulseOutRapid color={color} loading/></div>)
    .add('Scale Random', () => <div style={style}><LineScaleRandom color={color} loading/></div>)
    .add('Spin Fade Loader', () => <div style={style}><LineSpinFadeLoader color={color} loading/></div>);
