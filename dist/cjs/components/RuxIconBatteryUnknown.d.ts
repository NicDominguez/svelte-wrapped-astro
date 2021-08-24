import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBatteryUnknownProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBatteryUnknown["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBatteryUnknown["size"];
}
interface RuxIconBatteryUnknownEvents {
}
interface RuxIconBatteryUnknownSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBatteryUnknown extends SvelteComponent {
    $$prop_def: RuxIconBatteryUnknownProps;
    $$events_def: RuxIconBatteryUnknownEvents;
    $$slot_def: RuxIconBatteryUnknownSlots;
    $on<K extends keyof RuxIconBatteryUnknownEvents>(type: K, callback: (e: RuxIconBatteryUnknownEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBatteryUnknownProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBatteryUnknownElement | undefined;
}
export default RuxIconBatteryUnknown;
