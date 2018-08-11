import React from 'react';
import { FontSizePicker } from '@wordpress/components';
import { withState } from '@wordpress/compose';

const MyFontSizePicker = withState( {
    fontSize: 16,
} )( ( { fontSize, setState } ) => {
    const fontSizes = [
        { shortName: 'S', size: 12 },
        { shortName: 'M', size: 16 }
    ];
    const fallbackFontSize = 16;

    return (
        <FontSizePicker
            fontSizes={ fontSizes }
            value={ fontSize }
            fallbackFontSize={ fallbackFontSize }
            onChange={ fontSize => setState( { fontSize } ) }
        />
    );
} );

export default MyFontSizePicker;