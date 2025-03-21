
import {
    useBlockProps,
    InspectorControls,
    InspectorAdvancedControls,
    InnerBlocks
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { PanelBody, CheckboxControl, RadioControl, RangeControl, TextControl, ToggleControl, SelectControl } from "@wordpress/components";
import { useState, useEffect, useLayoutEffect } from '@wordpress/element';
import Gallery from './gallery';
import './editor.scss';

function ExtendedGalleryEdit( props ) {

    //console.log(this.props);
    const { attributes, clientId, setAttributes} = props;
    const { title,
        subtitle,
        blockId,
        linkImages,
        hideTitle,
        displayAs,
        columns,
        columnsMobile,
        columnsTablet,
        horizontalAlign,
        showCaptions,
        limitView,
        viewLimit,
        mobileScroll,
        autoPlay,
        slidesToScroll,
        slidesToScrollMobile,
        slidesToScrollTablet,
        slidesToShow,
        slidesToShowMobile,
        slidesToShowTablet,
        autoPlaySpeed,
        transitionSpeed,
		transitionType,
        showDots,
        showOverlay,
		columnGap
     } = attributes;
    if ( ! blockId ) {
        setAttributes( { blockId: clientId } );
    }


	const [styles, setStyles] = useState({});


	function updateStyles() {
		const el = document.getElementById( 'block-' + clientId );
		if ( ! el ) {
			return;
		}
		const elWidth = el.offsetWidth;
		const rowHeight = Math.floor( elWidth / 12 );
		const styles = {
			"--ck-grid-row-height": rowHeight + 'px'
		};
		setStyles( styles );
	}
	useLayoutEffect(() => {
		window.addEventListener('resize', updateStyles);
		updateStyles();
		return () => window.removeEventListener('resize', updateStyles);
	  }, []);

    const blockProps = useBlockProps({ style: styles });
    const isGallery = displayAs == 'gallery';
	const isTiled = displayAs == 'tiled';
    const isCarousel = displayAs == 'carousel';

	if( ! columnGap && columnGap !== 0 ) {
		setAttributes( { columnGap: 3 } );
	}

	const colGapLabels =['None', 'X-Small', 'Small', 'Medium (Default)', 'Large', 'X-Large'];
	const colGapLabel = 'Column Gap: ' + colGapLabels[columnGap];

    return(
        <div {...blockProps} >
            <InspectorControls>
                <PanelBody>
                    <RadioControl
                        label="Display on page as"
                        selected={ displayAs }
                        options={ [
                            { label: 'Gallery (Grid)', value: 'gallery' },
							{ label: 'Gallery (tiled)', value: 'tiled' },
                            { label: 'Carousel', value: 'carousel' },
                        ] }
                        onChange={value =>
                            setAttributes({ displayAs: value })
                        }
                    />
                    <SelectControl
                        label="Link Images"
                        value={ linkImages }
                        options={ [
                            { label: 'Custom Url', value: 'custom' },
                            { label: 'Lightbox', value: 'lightbox' },
                            { label: 'None', value: 'none' },
                        ] }
                        onChange={value =>
                            setAttributes({ linkImages: value })
                        }
                    />

                    <ToggleControl
                        label="Show Captions"
                        help={ "Display captions in the gallery view"}
                        checked={ showCaptions }
                        onChange={ ( showCaptions ) => setAttributes( { showCaptions } ) }
                    />

                    </PanelBody>
                    {isGallery &&
                        <>
                        <PanelBody title="Gallery Settings">
                            <RangeControl
                                label="Columns"
                                value={ columns }
                                onChange={ ( columns ) => setAttributes( { columns } ) }
                                min={ 1 }
                                max={ 6 }
                                step={ 1 }
                            />
							<RangeControl
								label= { colGapLabel }
								value={ columnGap }
								onChange={ ( columnGap ) => setAttributes( { columnGap } ) }
								min={ 0 }
								max={ 5 }
								step={ 1 }
								type="stepper"
								withInputField={ false }
							/>

                            <SelectControl
                                label="Align Columns"
                                value={ horizontalAlign }
                                help={ "When there are fewer images than columns in a row, how to align the columns."}
                                options={ [
                                    { label: 'Center', value: 'center' },
                                    { label: 'Left', value: 'left' },
                                    { label: 'Right', value: 'right' },
                                ] }
                                onChange={value =>
                                    setAttributes({ horizontalAlign: value })
                                }
                            />

                            <ToggleControl
                                label="Horizontal scroll on mobile"
                                help={ "Scroll gallery items horizontally on mobile"}
                                checked={ mobileScroll }
                                onChange={ ( mobileScroll ) => setAttributes( { mobileScroll } ) }
                            />
                            {!mobileScroll &&
                                <>
                                <RangeControl
                                    label="Columns Mobile"
                                    value={ columnsMobile }
                                    onChange={ ( columnsMobile ) => setAttributes( { columnsMobile } ) }
                                    min={ 1 }
                                    max={ 6 }
                                    step={ 1 }
                                />
                                <RangeControl
                                    label="Columns Tablet"
                                    value={ columnsTablet }
                                    onChange={ ( columnsTablet ) => setAttributes( { columnsTablet } ) }
                                    min={ 1 }
                                    max={ 6 }
                                    step={ 1 }
                                />
                                </>
                            }
                            </PanelBody>
                        </>
                    }
					{isTiled &&
                        <>
                        <PanelBody title="Gallery Settings">
							<RangeControl
								label= { colGapLabel }
								value={ columnGap }
								onChange={ ( columnGap ) => setAttributes( { columnGap } ) }
								min={ 0 }
								max={ 5 }
								step={ 1 }
								type="stepper"
								withInputField={ false }
							/>
                            </PanelBody>
                        </>
                    }

                    { (isCarousel || mobileScroll ) &&
                        <PanelBody title="Carousel Settings">
                            <>
                                {!mobileScroll &&
                                <>
                                    <RangeControl
                                        label={__("Slides to Show", "carkeek-blocks")}
                                        value={slidesToShow}
                                        onChange={value =>
                                            setAttributes({ slidesToShow: value })
                                        }
                                        min={1}
                                        max={6}
                                    />

                                    <RangeControl
                                        label={__("Slides to Scroll", "carkeek-blocks")}
                                        value={slidesToScroll}
                                        onChange={value =>
                                            setAttributes({ slidesToScroll: value })
                                        }
                                        min={1}
                                        max={6}
                                    />
                                    </>
                                }
                                <RangeControl
                                    label={__("Slides to Show Mobile", "carkeek-blocks")}
                                    value={slidesToShowMobile}
                                    onChange={value =>
                                        setAttributes({ slidesToShowMobile: value })
                                    }
                                    min={1}
                                    max={6}
                                />
                                <RangeControl
                                    label={__("Slides to Scroll Mobile", "carkeek-blocks")}
                                    value={slidesToScrollMobile}
                                    onChange={value =>
                                        setAttributes({ slidesToScrollMobile: value })
                                    }
                                    min={1}
                                    max={6}
                                />
                                <RangeControl
                                    label={__("Slides to Show Tablet", "carkeek-blocks")}
                                    value={slidesToShowTablet}
                                    onChange={value =>
                                        setAttributes({ slidesToShowTablet: value })
                                    }
                                    min={1}
                                    max={6}
                                />
                                <RangeControl
                                    label={__("Slides to Scroll Tablet", "carkeek-blocks")}
                                    value={slidesToScrollTablet}
                                    onChange={value =>
                                        setAttributes({ slidesToScrollTablet: value })
                                    }
                                    min={1}
                                    max={6}
                                />
                            </>
                            <ToggleControl
                                label="Auto Play Slider"
                                checked={ autoPlay }
                                onChange={value =>
                                    setAttributes({ autoPlay: value })
                                }
                            />
                            {autoPlay &&
                            <RangeControl
                                label={__("Time on each Slide (in ms)", "carkeek-blocks")}
                                value={autoPlaySpeed}
                                onChange={value =>
                                    setAttributes({ autoPlaySpeed: value })
                                }
                                min={1000}
                                max={10000}
                            />
                            }
						<RadioControl
							label="Transition Type"
							selected={ transitionType }
							options={ [
								{ label: 'Slide', value: '' },
								{ label: 'Fade', value: 'fade' },
							] }
							onChange={value =>
								setAttributes({ transitionType: value })
							}
						/>
                             <RangeControl
                                label={__("Transition speed", "carkeek-blocks")}
                                value={transitionSpeed}
                                onChange={value =>
                                    setAttributes({ transitionSpeed: value })
                                }
                                min={500}
                                max={10000}
                            />
                            <ToggleControl
                                label="Show Dot Navigation"
                                checked={ showDots }
                                onChange={value =>
                                    setAttributes({ showDots: value })
                                }
                            />

                        </PanelBody>
                    }
                    { linkImages == 'lightbox' &&
                    <PanelBody title="Lightbox">
                    <ToggleControl
                        label="Limit Initial View"
                        help={ "Limit the gallery view on the page to a number (all images will be accessible from the lightbox)"}
                        checked={ limitView }
                        onChange={ ( limitView ) => setAttributes( { limitView } ) }
                    />
                        { limitView &&
                        <RangeControl
                            label="Number of images to show on page"
                            value={ viewLimit }
                            onChange={ ( viewLimit ) => setAttributes( { viewLimit } ) }
                            min={ columns }
                            step={ columns }
                        />
                        }
                    <TextControl
                        label="Title"
                        value={ title }
                        help="Provide a unique title for your lightbox."
                        onChange={ ( title ) => setAttributes( { title } ) }
                    />
                    <TextControl
                        label="Sub Title"
                        value={ subtitle }
                        help="Provide an optional subtitle for your lightbox."
                        onChange={ ( subtitle ) => setAttributes( { subtitle } ) }
                    />
                    <CheckboxControl
                        label="Hide title"
                        checked={ hideTitle }
                        onChange={value =>
                            setAttributes({ hideTitle: value })
                        }
                    />
                    </PanelBody>
                }
            </InspectorControls>
            <InspectorAdvancedControls>
                <ToggleControl
                    label="Text Overlay"
                    checked={ showOverlay }
                    onChange={value =>
                        setAttributes({ showOverlay: value })
                    }
                />
            </InspectorAdvancedControls>
            { showOverlay &&
                <InnerBlocks
                    template={[
                        [ 'core/group', {}, [
                            [ 'core/paragraph', {}, [] ],
                        ]
                    ]]}
                />
            }
            <Gallery
                { ...props }
            />


        </div>
    )
}


export default ExtendedGalleryEdit;


