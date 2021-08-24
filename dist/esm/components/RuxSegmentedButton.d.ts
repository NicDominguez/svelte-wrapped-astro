import { Components, JSX } from '@astrouxds/astro-web-components';
interface RuxSegmentedButtonProps {
    /** Items in this Array are the individual button segments. */
    data?: Components.RuxSegmentedButton["data"];
    /** When passed in on load, this selects the first button segment with a matching label. When the selected segment changes, this property updates with the currently selected value, which reflects back to the component attribute. If no button segment label matches this string, then no segment is selected. This value takes priority over setting selected boolean property on the items in the data array. */
    selected?: Components.RuxSegmentedButton["selected"];
}
interface RuxSegmentedButtonEvents {
    /** Emitted when the value property has changed. */
    "rux-change": Parameters<JSX.RuxSegmentedButton["onRux-change"]>[0];
}
interface RuxSegmentedButtonSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxSegmentedButton extends SvelteComponent {
    $$prop_def: RuxSegmentedButtonProps;
    $$events_def: RuxSegmentedButtonEvents;
    $$slot_def: RuxSegmentedButtonSlots;
    $on<K extends keyof RuxSegmentedButtonEvents>(type: K, callback: (e: RuxSegmentedButtonEvents[K]) => any): () => void;
    $set($$props: Partial<RuxSegmentedButtonProps>): void;
    constructor(options: any);
    get data(): any;
    set data(data: any);
    get selected(): any;
    set selected(selected: any);
    get getWebComponent(): HTMLRuxSegmentedButtonElement | undefined;
}
export default RuxSegmentedButton;
