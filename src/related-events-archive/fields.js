import { InspectorControls, InspectorAdvancedControls } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import {
    RangeControl,
    PanelBody,
    ToggleControl,
    RadioControl,
    SelectControl,
    TextareaControl,
    TextControl
} from "@wordpress/components";


function eventFields(props) {
	const {
        catTerms,
        catTags,
        venues,
        attributes,
        setAttributes,
    } = props;
    const {

        hideTitle,

        displayField1,
        displayField2,
        displayField3,
        dateFormat,
        timeFormat,
        showEndDate,

    } = attributes;

//Handling these as individual attributes until I have time to figure out arrays.
const availFields = [
	{ label: 'Select a Field', value: '' },
	{ label: 'Event Title', value: 'title' },
	{ label: 'Event Date/Time', value: 'startdate' },
	{ label: 'Organizer', value: 'organizer' },
	{ label: 'Venue', value: 'venue' },
	{ label: 'Excerpt', value: 'excerpt' },
];

let showDateFormat = false;
if (displayField1 == "startdate" || displayField2 == 'startdate' || displayField3 == 'startdate') {
	showDateFormat = true;
}

return (
	<>
		<ToggleControl
			label={__("Hide Title")}
			checked={hideTitle}
			onChange={(value) => setAttributes({ hideTitle: value })}
			help={__("To change the order of the title, hide it add place it with a metafield below.")}
		/>
		<SelectControl
			label={__("Select Metafield 1", "carkeek-blocks")}
			onChange={(value) => setAttributes({ displayField1: value })}
			options={
				availFields
			}
			value={displayField1}
		/>
		<SelectControl
			label={__("Select Metafield 2", "carkeek-blocks")}
			onChange={(value) => setAttributes({ displayField2: value })}
			options={
				availFields
			}
			value={displayField2}
		/>

		<SelectControl
			label={__("Select Metafield 3", "carkeek-blocks")}
			onChange={(value) => setAttributes({ displayField3: value })}
			options={
				availFields
			}
			value={displayField3}
		/>
		{showDateFormat &&
			<>
				<RadioControl
					label={__("End Date/Time")}
					selected={showEndDate}
					options={[
						{ label: __("Show end date/time"), value: "show_end_date" },
						{ label: __("Never show end date/time"), value: "naver_show_end_date" },
					]}
					onChange={value =>
						setAttributes({
							showEndDate: value
						})
					}
				/>
				<p>Use PHP Date Formats, <a target="_blank" rel="noreferrer" href="https://wordpress.org/support/article/formatting-date-and-time/">Learn how to make your own date format here.</a></p>

				<TextControl
					label="Date Format"
					value={dateFormat}
					onChange={(value) => setAttributes({ dateFormat: value })}
				/>
				<TextControl
					label="Time Format"
					value={timeFormat}
					onChange={(value) => setAttributes({ timeFormat: value })}
					help='Leave blank to hide the time'
				/>

			</>
		}
	</>
)
}

export default eventFields;
