/**
 * External dependencies
 */
 import classnames from 'classnames';
 import { isEmpty } from 'lodash';

 /**
  * WordPress dependencies
  */
 import { useBlockProps, RichText } from '@wordpress/block-editor';

const deprecated = [
    {
        attributes: {
            id: {
                type: "number"
            },
            url: {
                type: "string",
                source: "attribute",
                selector: "img",
                attribute: "src"
            },
            focalPoint: {
                type: "object"
            },
            alt: {
                type: "string",
                source: "attribute",
                selector: "img",
                attribute: "alt",
                default: ""
            },
            title: {
                type: "string",
                source: "attribute",
                selector: "img",
                attribute: "title"
            },
            sizeSlug: {
                type: "string",
                default: "large"
            },
            width: {
                type: "string"
            },
            height: {
                type: "string"
            },
            useCaption: {
                type: "boolean",
                default: false
            },
            useLink: {
                type: "boolean",
                default: true
            },
            caption: {
                type: "string",
                source: "html",
                selector: "figcaption"
            },
            photoCredit: {
                type: "string",
                source: "html",
                selector: ".ck-fixed-image-credit"
            },
            href: {
                type: "string",
                source: "attribute",
                selector: "figure > a",
                attribute: "href"
            },
            rel: {
                type: "string",
                source: "attribute",
                selector: "figure > a",
                attribute: "rel"
            },
            linkClass: {
                type: "string",
                source: "attribute",
            },
            linkDestination: {
                type: "string"
            },
            linkTarget: {
                type: "string",
                source: "attribute",
                selector: "figure > a",
                attribute: "target"
            }
        },
        save: function( { attributes } ) {
            const {
                url,
                alt,
                href,
                rel,
                width,
                height,
                id,
                linkTarget,
                sizeSlug,
                title,
                caption,
                useCaption,
                focalPoint,
                linkStyle,
                photoCredit
            } = attributes;

            const newRel = isEmpty( rel ) ? undefined : rel;

            const classes = classnames( {
                [ `size-${ sizeSlug }` ]: sizeSlug,
            } );

            let imageStyle = {};
            if (focalPoint) {
                imageStyle.objectPosition = `${focalPoint.x *
                    100}% ${focalPoint.y * 100}%`;
            }

            const linkClass = classnames( {
                [ `${ linkStyle }` ]: linkStyle,
                'ck-fixed-image-wrap': true,
            } );

            const image = (
                <>
                    <img
                        src={ url }
                        alt={ alt }
                        className={ id ? `wp-image-${ id }` : null }
                        width={ width }
                        height={ height }
                        title={ title }
                        style={imageStyle}
                    />
                    {photoCredit &&
                        <div className={'ck-fixed-image-credit'}>
                        { photoCredit }
                        </div>
                    }
                </>
            );

            const figure = (
                <>
                    { href ? (
                        <a
                            className={ linkClass }
                            href={ href }
                            target={ linkTarget }
                            rel={ newRel }
                        >
                            { image }

                        </a>
                    ) : (
                        <div className={'ck-fixed-image-wrap'}>
                        { image }
                        </div>
                    ) }
                    { ( useCaption && ! RichText.isEmpty( caption ) ) && (
                        <RichText.Content tagName="figcaption" value={ caption } />
                    ) }

                </>
            );

            return (
                <>
                {url &&
                <figure { ...useBlockProps.save( { className: classes } ) }>
                    { figure }
                </figure>
                }
                </>
            );

        }
    },
    {
        attributes: {
            id: {
                type: "number"
            },
            url: {
                type: "string",
                source: "attribute",
                selector: "img",
                attribute: "src"
            },
            focalPoint: {
                type: "object"
            },
            alt: {
                type: "string",
                source: "attribute",
                selector: "img",
                attribute: "alt",
                default: ""
            },
            title: {
                type: "string",
                source: "attribute",
                selector: "img",
                attribute: "title"
            },
            sizeSlug: {
                type: "string",
                default: "large"
            },
            width: {
                type: "string"
            },
            height: {
                type: "string"
            },
            useCaption: {
                type: "boolean",
                default: false
            },
            useLink: {
                type: "boolean",
                default: true
            },
            caption: {
                type: "string",
                source: "html",
                selector: "figcaption"
            },
            href: {
                type: "string",
                source: "attribute",
                selector: "figure > a",
                attribute: "href"
            },
            rel: {
                type: "string",
                source: "attribute",
                selector: "figure > a",
                attribute: "rel"
            },
            linkClass: {
                type: "string",
                source: "attribute",
            },
            linkDestination: {
                type: "string"
            },
            linkTarget: {
                type: "string",
                source: "attribute",
                selector: "figure > a",
                attribute: "target"
            }

        },
        save( { attributes } ) {
            const {
                url,
                alt,
                href,
                rel,
                width,
                height,
                id,
                linkTarget,
                sizeSlug,
                title,
                caption,
                useCaption,
                focalPoint,
                linkStyle
            } = attributes;

            const newRel = isEmpty( rel ) ? undefined : rel;

            const classes = classnames( {
                [ `size-${ sizeSlug }` ]: sizeSlug,
            } );

            let imageStyle = {};
            if (focalPoint) {
                imageStyle.objectPosition = `${focalPoint.x *
                    100}% ${focalPoint.y * 100}%`;
            }

            const linkClass = classnames( {
                [ `${ linkStyle }` ]: linkStyle,
                'ck-fixed-image-wrap': true,
            } );

            const image = (
                <img
                    src={ url }
                    alt={ alt }
                    className={ id ? `wp-image-${ id }` : null }
                    width={ width }
                    height={ height }
                    title={ title }
                    style={imageStyle}
                />
            );

            const figure = (
                <>
                    { href ? (
                        <a
                            className={ linkClass }
                            href={ href }
                            target={ linkTarget }
                            rel={ newRel }
                        >
                            { image }
                        </a>
                    ) : (
                        <div className={'ck-fixed-image-wrap'}>
                        { image }
                        </div>
                    ) }
                    { ( useCaption && ! RichText.isEmpty( caption ) ) && (
                        <RichText.Content tagName="figcaption" value={ caption } />
                    ) }
                </>
            );

            return (
                <figure { ...useBlockProps.save( { className: classes } ) }>
                    { figure }
                </figure>
            );
        }
    },
    {
        attributes : {
            id: {
                type: "number"
            },
            url: {
                type: "string",
                source: "attribute",
                selector: "img",
                attribute: "src"
            },
            focalPoint: {
                type: "object"
            },
            alt: {
                type: "string",
                source: "attribute",
                selector: "img",
                attribute: "alt",
                default: ""
            },
            title: {
                type: "string",
                source: "attribute",
                selector: "img",
                attribute: "title"
            },
            sizeSlug: {
                type: "string",
                default: "large"
            },
            width: {
                type: "string"
            },
            height: {
                type: "string"
            },
            useCaption: {
                type: "boolean",
                default: false
            },
            useLink: {
                type: "boolean",
                default: true
            },
            caption: {
                type: "string",
                source: "html",
                selector: "figcaption"
            },
            href: {
                type: "string",
                source: "attribute",
                selector: "figure > a",
                attribute: "href"
            },
            rel: {
                type: "string",
                source: "attribute",
                selector: "figure > a",
                attribute: "rel"
            },
            linkClass: {
                type: "string",
                source: "attribute",
                selector: "figure > a",
                attribute: "class"
            },
            linkDestination: {
                type: "string"
            },
            linkTarget: {
                type: "string",
                source: "attribute",
                selector: "figure > a",
                attribute: "target"
            }

        },
        save( { attributes } ) {
        const {
            url,
            alt,
            href,
            rel,
            linkClass,
            width,
            height,
            id,
            linkTarget,
            sizeSlug,
            title,
            caption,
            useCaption,
            focalPoint
        } = attributes;

        const newRel = isEmpty( rel ) ? undefined : rel;

        const classes = classnames( {
            [ `size-${ sizeSlug }` ]: sizeSlug,
        } );

        let imageStyle = {};
        if (focalPoint) {
            imageStyle.objectPosition = `${focalPoint.x *
                100}% ${focalPoint.y * 100}%`;
        }

        const image = (
            <img
                src={ url }
                alt={ alt }
                className={ id ? `wp-image-${ id }` : null }
                width={ width }
                height={ height }
                title={ title }
                style={imageStyle}
            />
        );

        const figure = (
            <>
                { href ? (
                    <a
                        className={ `'ck-fixed-image-wrap' ${linkClass}` }
                        href={ href }
                        target={ linkTarget }
                        rel={ newRel }
                    >
                        { image }
                    </a>
                ) : (
                    <div className={'ck-fixed-image-wrap'}>
                    { image }
                    </div>
                ) }
                { ( useCaption && ! RichText.isEmpty( caption ) ) && (
                    <RichText.Content tagName="figcaption" value={ caption } />
                ) }
            </>
        );

        return (
            <figure { ...useBlockProps.save( { className: classes } ) }>
                { figure }
            </figure>
        );
    }
    }
]

export default deprecated;