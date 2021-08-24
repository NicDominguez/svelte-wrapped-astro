import { Components, JSX } from '@astrouxds/astro-web-components';
interface RuxSwitchProps {
    /** The help or explanation text */
    helpText?: Components.RuxSwitch["helpText"];
    /** The validation error text */
    errorText?: Components.RuxSwitch["errorText"];
    /** The switch name */
    name?: Components.RuxSwitch["name"];
    /** The switch value */
    value?: Components.RuxSwitch["value"];
    /** Toggles checked state of a switch */
    checked?: Components.RuxSwitch["checked"];
    /** Disables the switch via HTML disabled attribute. Switch takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored. */
    disabled?: Components.RuxSwitch["disabled"];
    /** Sets the switch as required */
    required?: Components.RuxSwitch["required"];
}
interface RuxSwitchEvents {
    /** Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) */
    "rux-change": Parameters<JSX.RuxSwitch["onRux-change"]>[0];
    /** Fired when an alteration to the input's value is committed by the user - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) */
    "rux-input": Parameters<JSX.RuxSwitch["onRux-input"]>[0];
}
interface RuxSwitchSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxSwitch extends SvelteComponent {
    $$prop_def: RuxSwitchProps;
    $$events_def: RuxSwitchEvents;
    $$slot_def: RuxSwitchSlots;
    $on<K extends keyof RuxSwitchEvents>(type: K, callback: (e: RuxSwitchEvents[K]) => any): () => void;
    $set($$props: Partial<RuxSwitchProps>): void;
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
    get disabled(): any;
    set disabled(disabled: any);
    get required(): any;
    set required(required: any);
    get getWebComponent(): HTMLRuxSwitchElement | undefined;
}
export default RuxSwitch;
