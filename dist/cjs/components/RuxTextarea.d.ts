import { Components, JSX } from '@astrouxds/astro-web-components';
interface RuxTextareaProps {
    /** The input label text */
    label?: Components.RuxTextarea["label"];
    /** The input placeholder text */
    placeholder?: Components.RuxTextarea["placeholder"];
    /** The help or explanation text */
    helpText?: Components.RuxTextarea["helpText"];
    /** The validation error text */
    errorText?: Components.RuxTextarea["errorText"];
    /** Marks the input as invalid */
    invalid?: Components.RuxTextarea["invalid"];
    /** The input value */
    value?: Components.RuxTextarea["value"];
    /** The input name */
    name?: Components.RuxTextarea["name"];
    /** The input minLength attribute */
    minLength?: Components.RuxTextarea["minLength"];
    /** The input maxLength attribute */
    maxLength?: Components.RuxTextarea["maxLength"];
    /** The input rows attribute */
    rows?: Components.RuxTextarea["rows"];
    /** Disables the button via HTML disabled attribute. Button takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored. */
    disabled?: Components.RuxTextarea["disabled"];
    /** Sets the input as disabled */
    required?: Components.RuxTextarea["required"];
    /** Styles the input element and label smaller for space-limited situations. */
    small?: Components.RuxTextarea["small"];
}
interface RuxTextareaEvents {
    /** Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) */
    "rux-change": Parameters<JSX.RuxTextarea["onRux-change"]>[0];
    /** Fired when an alteration to the input's value is committed by the user - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) */
    "rux-input": Parameters<JSX.RuxTextarea["onRux-input"]>[0];
}
interface RuxTextareaSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxTextarea extends SvelteComponent {
    $$prop_def: RuxTextareaProps;
    $$events_def: RuxTextareaEvents;
    $$slot_def: RuxTextareaSlots;
    $on<K extends keyof RuxTextareaEvents>(type: K, callback: (e: RuxTextareaEvents[K]) => any): () => void;
    $set($$props: Partial<RuxTextareaProps>): void;
    constructor(options: any);
    get label(): any;
    set label(label: any);
    get placeholder(): any;
    set placeholder(placeholder: any);
    get helpText(): any;
    set helpText(helpText: any);
    get errorText(): any;
    set errorText(errorText: any);
    get invalid(): any;
    set invalid(invalid: any);
    get value(): any;
    set value(value: any);
    get name(): any;
    set name(name: any);
    get minLength(): any;
    set minLength(minLength: any);
    get maxLength(): any;
    set maxLength(maxLength: any);
    get rows(): any;
    set rows(rows: any);
    get disabled(): any;
    set disabled(disabled: any);
    get required(): any;
    set required(required: any);
    get small(): any;
    set small(small: any);
    get getWebComponent(): HTMLRuxTextareaElement | undefined;
}
export default RuxTextarea;
