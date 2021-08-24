import { Components, JSX } from '@astrouxds/astro-web-components';
interface RuxInputFieldProps {
    /** The input label text */
    label?: Components.RuxInputField["label"];
    /** The input placeholder text */
    placeholder?: Components.RuxInputField["placeholder"];
    /** The help or explanation text */
    helpText?: Components.RuxInputField["helpText"];
    /** The validation error text */
    errorText?: Components.RuxInputField["errorText"];
    /** Marks the input as invalid */
    invalid?: Components.RuxInputField["invalid"];
    /** The input value */
    value?: Components.RuxInputField["value"];
    /** The input name */
    name?: Components.RuxInputField["name"];
    /** The input type */
    type?: Components.RuxInputField["type"];
    /** The input min attribute */
    min?: Components.RuxInputField["min"];
    /** The input max attribute */
    max?: Components.RuxInputField["max"];
    /** Disables the button via HTML disabled attribute. Button takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored. */
    disabled?: Components.RuxInputField["disabled"];
    /** Sets the input as disabled */
    required?: Components.RuxInputField["required"];
    /** Styles the input element and label smaller for space-limited situations. */
    small?: Components.RuxInputField["small"];
    /** The input step attribute */
    step?: Components.RuxInputField["step"];
}
interface RuxInputFieldEvents {
    /** Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) */
    "rux-change": Parameters<JSX.RuxInputField["onRux-change"]>[0];
    /** Fired when an alteration to the input's value is committed by the user - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) */
    "rux-input": Parameters<JSX.RuxInputField["onRux-input"]>[0];
}
interface RuxInputFieldSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxInputField extends SvelteComponent {
    $$prop_def: RuxInputFieldProps;
    $$events_def: RuxInputFieldEvents;
    $$slot_def: RuxInputFieldSlots;
    $on<K extends keyof RuxInputFieldEvents>(type: K, callback: (e: RuxInputFieldEvents[K]) => any): () => void;
    $set($$props: Partial<RuxInputFieldProps>): void;
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
    get type(): any;
    set type(type: any);
    get min(): any;
    set min(min: any);
    get max(): any;
    set max(max: any);
    get disabled(): any;
    set disabled(disabled: any);
    get required(): any;
    set required(required: any);
    get small(): any;
    set small(small: any);
    get step(): any;
    set step(step: any);
    get getWebComponent(): HTMLRuxInputFieldElement | undefined;
}
export default RuxInputField;
