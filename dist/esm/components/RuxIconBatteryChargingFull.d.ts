import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBatteryChargingFullProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBatteryChargingFull["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBatteryChargingFull["size"];
}
interface RuxIconBatteryChargingFullEvents {
}
interface RuxIconBatteryChargingFullSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBatteryChargingFull extends SvelteComponent {
    $$prop_def: RuxIconBatteryChargingFullProps;
    $$events_def: RuxIconBatteryChargingFullEvents;
    $$slot_def: RuxIconBatteryChargingFullSlots;
    $on<K extends keyof RuxIconBatteryChargingFullEvents>(type: K, callback: (e: RuxIconBatteryChargingFullEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBatteryChargingFullProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBatteryChargingFullElement | undefined;
}
export default RuxIconBatteryChargingFull;
