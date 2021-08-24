import { Components, JSX } from '@astrouxds/astro-web-components';
interface RuxPushButtonProps {
    /** Disables the push button via HTML `disabled` attribute.
  Button takes on a distinct disabled visual state.
  Cursor uses the `not-allowed` system replacement and all keyboard and mouse events are ignored. */
    disabled?: Components.RuxPushButton["disabled"];
    /** Checks the push button via HTML `checked` attribute.
  Push button takes on a distinct "enabled" or "selected" visual state. */
    checked?: Components.RuxPushButton["checked"];
    /** The label of the push button. */
    label?: Components.RuxPushButton["label"];
    /** The name of the push button. */
    name?: Components.RuxPushButton["name"];
    /** The value of the push button. */
    value?: Components.RuxPushButton["value"];
}
interface RuxPushButtonEvents {
    /** Fired when an alteration to the input's value is committed by the user - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) */
    "rux-change": Parameters<JSX.RuxPushButton["onRux-change"]>[0];
}
interface RuxPushButtonSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxPushButton extends SvelteComponent {
    $$prop_def: RuxPushButtonProps;
    $$events_def: RuxPushButtonEvents;
    $$slot_def: RuxPushButtonSlots;
    $on<K extends keyof RuxPushButtonEvents>(type: K, callback: (e: RuxPushButtonEvents[K]) => any): () => void;
    $set($$props: Partial<RuxPushButtonProps>): void;
    constructor(options: any);
    get disabled(): any;
    set disabled(disabled: any);
    get checked(): any;
    set checked(checked: any);
    get label(): any;
    set label(label: any);
    get name(): any;
    set name(name: any);
    get value(): any;
    set value(value: any);
    get getWebComponent(): HTMLRuxPushButtonElement | undefined;
}
export default RuxPushButton;
