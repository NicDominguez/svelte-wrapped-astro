import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBatteryStdProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBatteryStd["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBatteryStd["size"];
}
interface RuxIconBatteryStdEvents {
}
interface RuxIconBatteryStdSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBatteryStd extends SvelteComponent {
    $$prop_def: RuxIconBatteryStdProps;
    $$events_def: RuxIconBatteryStdEvents;
    $$slot_def: RuxIconBatteryStdSlots;
    $on<K extends keyof RuxIconBatteryStdEvents>(type: K, callback: (e: RuxIconBatteryStdEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBatteryStdProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBatteryStdElement | undefined;
}
export default RuxIconBatteryStd;
