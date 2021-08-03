
import {
    useBlockProps,
    InspectorControls,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { PanelBody, CheckboxControl, RadioControl, RangeControl, TextControl, ToggleControl, SelectControl } from "@wordpress/components";
import Gallery from './gallery';

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
        showDots,
     } = attributes;
    if ( ! blockId ) {
        setAttributes( { blockId: clientId } );
    }
    const blockProps = useBlockProps();
    const isGallery = displayAs == 'gallery';
    const isCarousel = displayAs == 'carousel';

    return(
        <div {...blockProps} >
            <InspectorControls>
                <PanelBody>
                    <RadioControl
                        label="Display on page as"
                        selected={ displayAs }
                        options={ [
                            { label: 'Gallery', value: 'gallery' },
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
                    { linkImages != 'lightbox' &&
                    <ToggleControl
                        label="Show Captions"
                        help={ "Display captions in the gallery view"}
                        checked={ showCaptions }
                        onChange={ ( showCaptions ) => setAttributes( { showCaptions } ) }
                    />
                    }
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
                                        min={2}
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
            <Gallery
                { ...props }
            />

        </div>
    )
}


export default ExtendedGalleryEdit;


