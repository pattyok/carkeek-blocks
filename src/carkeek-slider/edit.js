import classnames from "classnames";
import { __ } from "@wordpress/i18n";
import {
    InspectorControls,
    InnerBlocks,
    useBlockProps,
    InspectorAdvancedControls } from "@wordpress/block-editor";
import { PanelBody, SelectControl, ToggleControl, RangeControl, RadioControl } from "@wordpress/components";
import { createBlock } from "@wordpress/blocks";
import { dispatch } from "@wordpress/data";



function AddABlock( props ) {
    const { innerBlockType, clientId } = props;
    if (innerBlockType =='carkeek-blocks/fixed-image') {
        return (
            <InnerBlocks
            allowedBlocks = { [innerBlockType] }
            template={ [ [innerBlockType, { useLink: true, useCaption: true} ] ] }
            orientation="horizontal"
            renderAppender={ () => (
                <button className="ck-custom-appender" onClick={() => {
                    dispatch('core/block-editor').insertBlocks(createBlock( innerBlockType, { useLink: true, useCaption: true} ), 9999, clientId);
                }}>
                { __(' + Add a Slide') }
                </button>
            )}
            />
        )
    } else {
        return (
            <InnerBlocks
                allowedBlocks = { [innerBlockType] }
                template={ [ [innerBlockType, {} ] ] }
                orientation="horizontal"
                renderAppender={ () => (
                    <button className="ck-custom-appender" onClick={() => {
                        dispatch('core/block-editor').insertBlocks(createBlock( innerBlockType ), 9999, clientId);
                    }}>
                    { __(' + Add a Slide') }
                    </button>
                )}
            />
        )
    }
}


export default function SliderEdit( props ) {
    const { attributes, setAttributes, clientId } = props;
    const { alignSlideContent, showOverlay, innerBlockType, arrowNavigation, transitionType, transitionSpeed, showDots, autoPlay, autoPlaySpeed, sliderType, slidesToScroll, slidesToShow, slidesToScrollMobile, slidesToShowMobile } = attributes;

    if ( ! arrowNavigation ) {
        setAttributes( { arrowNavigation: 'desktop-only' } );
    }

	if ( ! alignSlideContent) {
        setAttributes( { alignSlideContent: 'default' } );
    }
    const blockOptions = [
        { label: 'Fixed Sized Image and Caption', value: 'carkeek-blocks/fixed-image'},
        { label: 'Image and Caption', value: 'core/image'},
        { label: 'Cover Block', value: 'core/cover'},
        { label: 'Media Text', value: 'core/media-text'},
        { label: 'Group', value: 'core/group'},
        { label: 'Quote', value: 'core/quote'},
		{ label: 'Pull Quote', value: 'core/pullquote'},
    ];

    const classes = classnames( {
        [ `slider-${ sliderType }` ]: sliderType,
        [ `show-slides-${ slidesToShow }` ]: slidesToShow,
    } );

    //const blockProps = useBlockProps.save( { className: classes } );

    const blockProps = useBlockProps( { className: classes } );

    return(
        <>
        <InspectorControls>
                    <PanelBody>
                    <RadioControl
                            label="Slider Style"
                            selected={ sliderType }
                            options={ [
                                { label: 'Single Slide', value: 'single' },
                                { label: 'Carousel', value: 'carousel' },
                            ] }
                            onChange={ ( sliderType ) => { setAttributes( { sliderType } ) } }
                        />
                        {sliderType == 'carousel' &&
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
							<RadioControl
								label="Align Slide Content"
								selected={ alignSlideContent }
								options={ [
									{ label: 'Top', value: 'top' },
									{ label: 'Center', value: 'default' },
									{ label: 'Bottom', value: 'bottom' },
								] }
								onChange={ ( alignSlideContent ) => { setAttributes( { alignSlideContent } ) } }
							/>
                        </>
                        }
                        <ToggleControl
                            label="Auto Play Slider"
                            checked={ autoPlay }
                            onChange={value =>
                                setAttributes({ autoPlay: value })
                            }
                        />
                         <RadioControl
                            label="Transition"
                            selected={ transitionType }
                            options={ [
                                { label: 'Slide', value: 'slide' },
                                { label: 'Fade', value: 'fade' },
                            ] }
                            onChange={ ( transitionType ) => { setAttributes( { transitionType } ) } }
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
                            label="Arrow Navigation"
                            selected={ arrowNavigation }
                            options={ [
                                { label: 'Desktop Only', value: 'desktop-only' },
                                { label: 'Show', value: 'show' },
                                { label: 'Hide', value: 'hide' },
                            ] }
                            onChange={ ( arrowNavigation ) => { setAttributes( { arrowNavigation } ) } }
                        />

                        <ToggleControl
                            label="Show Dot Navigation"
                            checked={ showDots }
                            onChange={value =>
                                setAttributes({ showDots: value })
                            }
                        />
                         <RangeControl
                            label={__("Transition speed", "carkeek-blocks")}
                            value={transitionSpeed}
                            onChange={value =>
                                setAttributes({ transitionSpeed: value })
                            }
                            min={1000}
                            max={10000}
                        />

                    </PanelBody>
                </InspectorControls>
            <InspectorAdvancedControls>
                <SelectControl
                    label="Restrict to Block"
                    value={innerBlockType}
                    options={ blockOptions }
                    onChange={ (value) =>
                        setAttributes({ innerBlockType: value })
                    }
                />
                <ToggleControl
                    label="Text Overlay"
                    checked={ showOverlay }
                    onChange={value =>
                        setAttributes({ showOverlay: value })
                    }
                />
            </InspectorAdvancedControls>
        <div { ...blockProps } >
                <button className="slick-prev slick-arrow" aria-label="Previous" type="button">&lsaquo;</button>
                <AddABlock
                    innerBlockType = { innerBlockType }
                    clientId = {clientId}
                />
                {showDots &&
                <ul className="slick-dots">
                    <li className="slick-active" role="presentation"></li>
                    <li role="presentation"></li>
                    <li role="presentation" className=""></li>
                </ul>
                }
                <button className="slick-next slick-arrow" aria-label="Previous" type="button">&rsaquo;</button>
        </div>
        </>
    )
}
