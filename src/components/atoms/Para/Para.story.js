import React from 'react';
import { storiesOf } from '@storybook/react';

import Para from '.';

// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Atoms', module).addWithChapters('Para', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => (
            <Para className="hide-default-sample">This is plain text</Para>
          ),
          options: {
            showSource: true,
            allowSourceToggling: true,
            showPropTables: true,
            allowPropTablesToggling: true,
          },
        },
      ],
    },
    {
      title: 'Input Field Error Message',
      sections: [
        {
          title: 'Default',
          sectionFn: () => <Para>This is plain text.</Para>,
        },
      ],
    },
  ],
});
