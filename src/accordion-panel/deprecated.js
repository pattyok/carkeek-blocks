import { InnerBlocks, RichText } from "@wordpress/block-editor";

const deprecated = [
	{
        attributes: {
            title: {
                type: "string"
            },
            inheritedHeaderStyle: {
                type: "string"
            },
            content: {
                type: "string"
            }
        },
        save({ attributes } ) {
            const{ title, content, inheritedHeaderStyle } = attributes;

            const HeaderEl = `${inheritedHeaderStyle}`;
            return (
                <>
					<HeaderEl data-aria-accordion-heading className='ck-accordion-header'>
						<RichText.Content value={ title } />
					</HeaderEl>
					<div data-aria-accordion-panel className='ck-accordion-panel'>
						<RichText.Content value={ content } />
						<InnerBlocks.Content />
					</div>
				</>
            );
        }
    },
    {
        attributes: {
            title: {
                type: "string"
            },
            inheritedHeaderStyle: {
                type: "string"
            },
            content: {
                type: "string"
            }
        },
        save({ attributes } ) {
            const{ title, content, inheritedHeaderStyle } = attributes;

            const HeaderEl = `${inheritedHeaderStyle}`;
            return (
                <>
                    <HeaderEl data-aria-accordion-heading className='ck-accordion-header'>
                        {title}
                    </HeaderEl>
                    <div data-aria-accordion-panel className='ck-accordion-panel'>
                        <RichText.Content value={ content } />
                        <InnerBlocks.Content />
                    </div>
                </>
            );
        }
    }
]

export default deprecated;
