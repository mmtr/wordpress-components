import React from 'react';
import { withFilters } from '@wordpress/components';
import { addFilter } from '@wordpress/hooks';

const ComposedComponent = () => <div>Composed component</div>;

addFilter(
	'MyHookName',
	'example/filtered-component',
	( FilteredComponent ) => () => (
		<div>
			<FilteredComponent />
			<ComposedComponent />
		</div>
	)
);

const MyComponentWithFilters = withFilters( 'MyHookName' )(
	() => <div>My component</div>
);

export default MyComponentWithFilters;