import { connect, Field, FieldIntentCtx } from 'datocms-plugin-sdk';
import ConfigScreen from "./entrypoints/ConfigScreen";
import { render } from "./utils/render";
import "datocms-react-ui/styles.css";

connect({
	renderConfigScreen(ctx) {
		return render(<ConfigScreen ctx={ctx} />);
	},
	customBlockStylesForStructuredTextField(_field: Field, _ctx: FieldIntentCtx) {
		return [
			{
				id: 'blockquote',
				label: 'Blockquote',
				node: 'paragraph',
				appliedStyle: {
					borderLeft: '5px solid #000',
					paddingLeft: '20px',
					display: 'block',
					fontStyle: 'italic'
				}
			}
		]
	},
	customMarksForStructuredTextField(_field: Field, _ctx: FieldIntentCtx) {
		return [
			{
				id: 'align-justify',
				label: 'Align Justify',
				node: 'paragraph',
				icon: 'align-justify',
				appliedStyle: {
					textAlign: 'justify',
					display: 'block'
				}
			},
			{
				id: 'align-center',
				label: 'Align Center',
				node: 'paragraph',
				icon: 'align-center',
				appliedStyle: {
					textAlign: 'center',
					display: 'block'
				}
			},
			{
				id: 'align-right',
				label: 'Align Right',
				node: 'paragraph',
				icon: 'align-right',
				appliedStyle: {
					textAlign: 'right',
					display: 'block'
				}
			},
			{
				id: "small",
				label: "Small",
				icon: "text-size",
				appliedStyle: {
					fontSize: "0.85rem",
				}
			},
			{
				id: "subscript",
				label: "Subscript",
				icon: "subscript",
				keyboardShortcut: "ctrl+shift+d",
				appliedStyle: {
					verticalAlign: "sub",
					fontSize: "0.5rem",
				},
			},
			{
				id: "superscript",
				label: "Superscript",
				icon: "superscript",
				keyboardShortcut: "ctrl+shift+u",
				appliedStyle: {
					verticalAlign: "top",
					fontSize: "0.5rem",
					position: "relative",
					top: "-1px",
				},
			},
		];
	}
});
