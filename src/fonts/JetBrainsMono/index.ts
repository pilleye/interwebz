import { css } from '@emotion/react';

import JetBrainsMonoRegularWoff from './woff/JetBrainsMono-Regular.woff';
import JetBrainsMonoRegularWoff2 from './woff2/JetBrainsMono-Regular.woff2';

export const JetBrainsMono = css({
  '@font-face': {
    fontFamily: 'JetBrainsMono',
    src: `url(${JetBrainsMonoRegularWoff2}) format('woff2'),
          url(${JetBrainsMonoRegularWoff})  format('woff')`,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
});
