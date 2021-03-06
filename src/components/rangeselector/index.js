/**
* Copyright 2012-2017, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

'use strict';

module.exports = {
    moduleType: 'component',
    name: 'rangeselector',

    schema: {
        layout: {
            'xaxis.rangeselector': require('./attributes')
        }
    },

    layoutAttributes: require('./attributes'),
    handleDefaults: require('./defaults'),

    draw: require('./draw')
};
