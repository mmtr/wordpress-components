import React from 'react';
import { FormToggle } from '@wordpress/components';
import { withState } from '@wordpress/compose';

const MyFormToggle = withState( {
    checked: true,
} )( ( { checked, setState } ) => (
    <FormToggle
        checked={ checked }
        onChange={ () => setState( state => ( { checked: ! state.checked } ) ) }
    />
) );

export default MyFormToggle;