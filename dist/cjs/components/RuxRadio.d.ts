import { Components, JSX } from '@astrouxds/astro-web-components';
interface RuxRadioProps {
    /** The radio name */
    name?: Components.RuxRadio["name"];
    /** The radio value */
    value?: Components.RuxRadio["value"];
    /** Toggles checked state of a radio */
    checked?: Components.RuxRadio["checked"];
    /** Disables the radio via HTML disabled attribute. Radio takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored. */
    disabled?: Components.RuxRadio["disabled"];
}
interface RuxRadioEvents {
    /** Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) */
    "rux-change": Parameters<JSX.RuxRadio["onRux-change"]>[0];
}
interface RuxRadioSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxRadio extends SvelteComponent {
    $$prop_def: RuxRadioProps;
    $$events_def: RuxRadioEvents;
    $$slot_def: RuxRadioSlots;
    $on<K extends keyof RuxRadioEvents>(type: K, callback: (e: RuxRadioEvents[K]) => any): () => void;
    $set($$props: Partial<RuxRadioProps>): void;
    constructor(options: any);
    get name(): any;
    set name(name: any);
    get value(): any;
    set value(value: any);
    get checked(): any;
    set checked(checked: any);
    get disabled(): any;
    set disabled(disabled: any);
    get getWebComponent(): HTMLRuxRadioElement | undefined;
}
export default RuxRadio;
