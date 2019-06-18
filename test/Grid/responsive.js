/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2019 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.
**************************************************************************/

import assert from 'assert';
import responsive from '../../src/Grid/js/responsive.js';

describe('responsive', () => {
  it('supports objects', () => {
    const data = {xs: 12, sm: 10, md: 8, lg: 4, xl: 2};
    assert.equal(responsive('spectrum-grid-col-#size-#value', data), 'spectrum-grid-col-xs-12 spectrum-grid-col-sm-10 spectrum-grid-col-md-8 spectrum-grid-col-lg-4 spectrum-grid-col-xl-2');
  });

  it('supports arrays', () => {
    const data = [12, 10, 8, 4, 2];
    assert.equal(responsive('spectrum-grid-col-#size-#value', data), 'spectrum-grid-col-xs-12 spectrum-grid-col-sm-10 spectrum-grid-col-md-8 spectrum-grid-col-lg-4 spectrum-grid-col-xl-2');
  });

  it('supports values', () => {
    const data = 12;
    assert.equal(responsive('spectrum-grid-col-#size-#value', data), 'spectrum-grid-col-xs-12 spectrum-grid-col-sm-12 spectrum-grid-col-md-12 spectrum-grid-col-lg-12 spectrum-grid-col-xl-12');
  });

  it('supports auto sizing', () => {
    const data = 'auto';
    assert.equal(responsive('spectrum-grid-col-#size-#value', data), 'spectrum-grid-col-xs spectrum-grid-col-sm spectrum-grid-col-md spectrum-grid-col-lg spectrum-grid-col-xl');
  });

  it('supports undefined', () => {
    const data = undefined;
    assert.equal(responsive('spectrum-grid-col-#size-#value', data), '');
  });
});
