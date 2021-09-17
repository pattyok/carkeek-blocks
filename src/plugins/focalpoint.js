/**
 * EDITOR: Featured Image with Focal Point
 */

 const { FocalPointPicker } = wp.components;
 const { compose } = wp.compose;
 const { withDispatch, withSelect } = wp.data;
 const { Fragment } = wp.element;
 const { addFilter } = wp.hooks;
 const { __ } = wp.i18n;

 function wrapPostFeaturedImage( PostFeaturedImage ) {
     return compose(
         applyWithSelect,
         applyWithDispatch,
     )( ( props ) => {
         const {
             media,
             featuredImageFocalPoint,
             setFeaturedImageFocalPoint,
         } = props;

         if ( media && media.source_url ) {
             const url = media.source_url;
             const { width, height } = media;

             return (
                 <Fragment>
                     <PostFeaturedImage { ...props } />
                     <FocalPointPicker
                         label={ __( 'Focal point picker' ) }
                         url={ url }
                         dimensions={ { width, height } }
                         value={ featuredImageFocalPoint }
                         onChange={ ( newFocalPoint ) =>
                             setFeaturedImageFocalPoint( newFocalPoint )
                         }
                     />
                 </Fragment>
             );
         }

         return (
             <PostFeaturedImage { ...props } />
         );
     } );
 }

 const applyWithSelect = withSelect( ( select ) => {
     const { getEditedPostAttribute } = select( 'core/editor' );
     const featuredImageFocalPoint = getEditedPostAttribute( 'meta' )[ '_carkeekblocks_featured_image_focal_point' ];

     return {
         featuredImageFocalPoint,
     };
 } );

 const applyWithDispatch = withDispatch( ( dispatch ) => {
     const { editPost } = dispatch( 'core/editor' );

     return {
         setFeaturedImageFocalPoint( focalPoint ) {
             editPost( { meta: { _carkeekblocks_featured_image_focal_point: focalPoint } } );
         },
     };
 } );

 addFilter(
     'editor.PostFeaturedImage',
     'centralex/wrap-post-featured-image',
     wrapPostFeaturedImage
 );