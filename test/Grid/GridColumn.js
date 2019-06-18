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
import GridColumn from '../../src/Grid/js/GridColumn';
import React from 'react';
import {shallow} from 'enzyme';

describe('GridColumn', () => {
  it('supports additional classNames', () => {
    const tree = shallow(render({className: 'myClass'}));
    assert.equal(tree.hasClass('myClass'), true);
  });

  it('supports additional properties', () => {
    const tree = shallow(render({'aria-foo': true}));
    assert.equal(tree.prop('aria-foo'), true);
  });

  it('supports children', () => {
    const tree = shallow(render({children: 'Foo'}));
    assert.equal(tree.childAt(0).text(), 'Foo');
  });

  it('supports custom column size', () => {
    const tree = shallow(render({size: [12, 10, 4, 4, 2]}));
    assert.equal(tree.hasClass('spectrum-grid-col-sm-10'), true);
  });

  it('supports first property', () => {
    const tree = shallow(render({first: true}));
    assert.equal(tree.hasClass('spectrum-grid-first-lg'), true);
  });

  it('supports last property', () => {
    const tree = shallow(render({last: true}));
    assert.equal(tree.hasClass('spectrum-grid-last-sm'), true);
  });

  it('supports custom offset size', () => {
    const tree = shallow(render({offsetSize: {xs: 12, sm: 10, md: 8, lg: 4, xl: 2}}));
    assert.equal(tree.hasClass('spectrum-grid-col-xl-offset-2'), true);
  });

  it('supports auto sizing', () => {
    const tree = shallow(render({}));
    assert.equal(tree.hasClass('spectrum-grid-col-xl'), true);
  });

});

const render = ({children, ...otherProps}) => (
  <GridColumn {...otherProps}>{children}</GridColumn>
);
