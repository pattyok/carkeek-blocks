const normalizeMinHeight = ( value ) => {
	if ( ! value ) {
		return undefined;
	}

	const trimmedValue = value.trim();

	if ( ! trimmedValue ) {
		return undefined;
	}

	if ( /^\d+(\.\d+)?$/.test( trimmedValue ) ) {
		return `${ trimmedValue }px`;
	}

	return trimmedValue;
};

export const getFitContainerStyles = ( {
	aspectRatio,
	minHeightMobile,
	minHeightDesktop,
} ) => {
	if ( aspectRatio !== 'fit-container' ) {
		return undefined;
	}

	const mobileMinHeight = normalizeMinHeight( minHeightMobile );
	const desktopMinHeight = normalizeMinHeight( minHeightDesktop );
	const style = {};

	if ( mobileMinHeight ) {
		style[ '--ck-fixed-image-min-height-mobile' ] = mobileMinHeight;
	}

	if ( desktopMinHeight ) {
		style[ '--ck-fixed-image-min-height-desktop' ] = desktopMinHeight;
	}

	return Object.keys( style ).length ? style : undefined;
};