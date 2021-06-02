import { InnerBlocks } from '@wordpress/block-editor';

export default function ImageEdit() {

    const template = [['carkeek-blocks/fixed-image', { useCaption: false, useLink: false }]];
    return (
            <InnerBlocks
                template={ template }
            />
    )
}


function ImageSave() {
    return (
        <InnerBlocks.Content />
    )
}

export { ImageEdit, ImageSave }