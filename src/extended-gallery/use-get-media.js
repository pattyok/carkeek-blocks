/**
 * WordPress dependencies
 */
 import { useState } from '@wordpress/element';
 import { useSelect } from '@wordpress/data';
 import { store as coreStore } from '@wordpress/core-data';

 export default function useGetMedia( imageIds ) {
     const [ currentImageMedia, setCurrentImageMedia ] = useState( [] );

     const imageMedia = useSelect(
         ( select ) => {

             if ( imageIds.length === 0 ) {
                 return currentImageMedia;
             }
             const getMedia = select( coreStore ).getMedia;
             const newImageMedia = imageIds.map( ( img ) => {
                 return getMedia( img );
             } );

             if ( newImageMedia.some( ( img ) => ! img ) ) {
                 return currentImageMedia;
             }

             return newImageMedia;
         },
         [ imageIds ]
     );

     if (
         imageMedia?.length !== currentImageMedia.length ||
         imageMedia.some(
             ( newImage ) =>
                 ! currentImageMedia.find(
                     ( currentImage ) => currentImage.id === newImage.id
                 )
         )
     ) {
         setCurrentImageMedia( imageMedia );
         return imageMedia;
     }
     return currentImageMedia;
}
