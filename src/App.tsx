/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
import { useEffect } from 'react';

import { normalize, consoleEasterEgg } from './util/index';
import { fonts } from './fonts';

import { container } from './responsiveDesign';

const centered = css([
  container,
  {
    textAlign: 'center',
    fontSize: '2rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '1rem',
  },
]);

const italics = css({
  fontStyle: 'italic',
});

const App = () => {
  useEffect(() => {
    document.title = 'Aditya Pillai';
    consoleEasterEgg();
  });

  return (
    <div>
      <Global styles={[normalize, fonts]} />
      <div css={centered}>
        <code>
          under <span css={italics}>~construction~</span>.
        </code>
      </div>
    </div>
  );
};

export default App;
