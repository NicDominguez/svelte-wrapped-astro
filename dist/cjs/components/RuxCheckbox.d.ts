import { Components, JSX } from '@astrouxds/astro-web-components';
interface RuxCheckboxProps {
    /** The help or explanation text */
    helpText?: Components.RuxCheckbox["helpText"];
    /** The validation error text */
    errorText?: Components.RuxCheckbox["errorText"];
    /** The checkbox name */
    name?: Components.RuxCheckbox["name"];
    /** The checkbox value */
    value?: Components.RuxCheckbox["value"];
    /** Toggles checked state of a checkbox */
    checked?: Components.RuxCheckbox["checked"];
    /** Toggles indeterminate state of a checkbox */
    indeterminate?: Components.RuxCheckbox["indeterminate"];
    /** Disables the checkbox via HTML disabled attribute. Checkbox takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored. */
    disabled?: Components.RuxCheckbox["disabled"];
    /** Sets the input as required */
    required?: Components.RuxCheckbox["required"];
}
interface RuxCheckboxEvents {
    /** Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) */
    "rux-change": Parameters<JSX.RuxCheckbox["onRux-change"]>[0];
    /** Fired when an alteration to the input's value is committed by the user - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) */
    "rux-input": Parameters<JSX.RuxCheckbox["onRux-input"]>[0];
}
interface RuxCheckboxSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxCheckbox extends SvelteComponent {
    $$prop_def: RuxCheckboxProps;
    $$events_def: RuxCheckboxEvents;
    $$slot_def: RuxCheckboxSlots;
    $on<K extends keyof RuxCheckboxEvents>(type: K, callback: (e: RuxCheckboxEvents[K]) => any): () => void;
    $set($$props: Partial<RuxCheckboxProps>): void;
    constructor(options: any);
    get helpText(): any;
    set helpText(helpText: any);
    get errorText(): any;
    set errorText(errorText: any);
    get name(): any;
    set name(name: any);
    get value(): any;
    set value(value: any);
    get checked(): any;
    set checked(checked: any);
    get indeterminate(): any;
    set indeterminate(indeterminate: any);
    get disabled(): any;
    set disabled(disabled: any);
    get required(): any;
    set required(required: any);
    get getWebComponent(): HTMLRuxCheckboxElement | undefined;
}
export default RuxCheckbox;
