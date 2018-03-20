import React, { Fragment } from 'react';

import {
  EuiCheckbox,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIconTip,
  EuiSpacer,
} from '../../../../src/components';

export default () => (
  <Fragment>
    <EuiFlexGroup alignItems="center" gutterSize="s">
      <EuiFlexItem grow={false}>
        <EuiCheckbox
          id="explainedCheckbox"
          label="Checkbox 1"
          onChange={() => {}}
        />
      </EuiFlexItem>

      <EuiFlexItem>
        <EuiIconTip
          content="Popover in wrong location, grow=true"
          position="right"
        />
      </EuiFlexItem>
    </EuiFlexGroup>

    <EuiSpacer />

    <EuiFlexGroup alignItems="center" gutterSize="s">
      <EuiFlexItem grow={false}>
        <EuiCheckbox
          id="explainedCheckbox"
          label="Checkbox 2"
          onChange={() => {}}
        />
      </EuiFlexItem>

      <EuiFlexItem grow={false}>
        <EuiIconTip
          content="This EuiFlexItem has grow=false and I'm forcing it wider with some text."
          position="right"
        />
        This EuiFlexItem has grow=false and I'm forcing it wider with some text.
      </EuiFlexItem>
    </EuiFlexGroup>

    <EuiSpacer />

    <div style={{ width: 200 }}>
      <EuiIconTip
        aria-label="Warning"
        type="alert"
        content="A wide div does not produce the same problem"
      />
    </div>
  </Fragment>
);
