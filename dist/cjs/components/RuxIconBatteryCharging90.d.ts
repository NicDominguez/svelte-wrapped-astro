import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBatteryCharging90Props {
    /** The fill color for the icon */
    color?: Components.RuxIconBatteryCharging90["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBatteryCharging90["size"];
}
interface RuxIconBatteryCharging90Events {
}
interface RuxIconBatteryCharging90Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBatteryCharging90 extends SvelteComponent {
    $$prop_def: RuxIconBatteryCharging90Props;
    $$events_def: RuxIconBatteryCharging90Events;
    $$slot_def: RuxIconBatteryCharging90Slots;
    $on<K extends keyof RuxIconBatteryCharging90Events>(type: K, callback: (e: RuxIconBatteryCharging90Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconBatteryCharging90Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBatteryCharging90Element | undefined;
}
export default RuxIconBatteryCharging90;
