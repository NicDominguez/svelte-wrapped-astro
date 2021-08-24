import { Components, JSX } from '@astrouxds/astro-web-components';
interface RuxRadioGroupProps {
    /** The label of the radio group */
    label?: Components.RuxRadioGroup["label"];
    /** Marks the radio group as invalid */
    invalid?: Components.RuxRadioGroup["invalid"];
    /** The name of the radio group - submitted with form data. Must match the name of the radios in the group. */
    name?: Components.RuxRadioGroup["name"];
    /** The value of the current selected radio in the group. Changing this will also mark that radio as checked in the UI. */
    value?: Components.RuxRadioGroup["value"];
    /** The help or explanation text */
    helpText?: Components.RuxRadioGroup["helpText"];
    /** The validation error text */
    errorText?: Components.RuxRadioGroup["errorText"];
}
interface RuxRadioGroupEvents {
    /** Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) */
    "rux-change": Parameters<JSX.RuxRadioGroup["onRux-change"]>[0];
}
interface RuxRadioGroupSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxRadioGroup extends SvelteComponent {
    $$prop_def: RuxRadioGroupProps;
    $$events_def: RuxRadioGroupEvents;
    $$slot_def: RuxRadioGroupSlots;
    $on<K extends keyof RuxRadioGroupEvents>(type: K, callback: (e: RuxRadioGroupEvents[K]) => any): () => void;
    $set($$props: Partial<RuxRadioGroupProps>): void;
    constructor(options: any);
    get label(): any;
    set label(label: any);
    get invalid(): any;
    set invalid(invalid: any);
    get name(): any;
    set name(name: any);
    get value(): any;
    set value(value: any);
    get helpText(): any;
    set helpText(helpText: any);
    get errorText(): any;
    set errorText(errorText: any);
    get getWebComponent(): HTMLRuxRadioGroupElement | undefined;
}
export default RuxRadioGroup;
