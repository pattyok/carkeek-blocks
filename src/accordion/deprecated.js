import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const v1 = {
		"attributes": {
			"headerStyle": {
				"type": "string",
				"default": "h3"
			},
			"openMultiple": {
				"type": "boolean",
				"default": true
			}
		},
		save({ attributes }) {
			const{ openMultiple } = attributes;

			const blockProps = useBlockProps.save();
				return (
					<div { ...blockProps } >
						<div data-aria-accordion data-transition data-multi={openMultiple}>
						<InnerBlocks.Content />
						</div>
					</div>
				);
		}
};


export default [ v1 ];
