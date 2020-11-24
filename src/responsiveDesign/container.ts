import { css } from '@emotion/react';

import { widthMQs } from './widthMQs';

export const container = css({
  width: '100%',
  [widthMQs[0]]: {
    maxWidth: '640px',
  },
  [widthMQs[1]]: {
    maxWidth: '768px',
  },
  [widthMQs[2]]: {
    maxWidth: '1024px',
  },
  [widthMQs[3]]: {
    maxWidth: '1280px',
  },
  [widthMQs[4]]: {
    maxWidth: '1536px',
  },
});
