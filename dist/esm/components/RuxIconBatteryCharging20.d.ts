import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBatteryCharging20Props {
    /** The fill color for the icon */
    color?: Components.RuxIconBatteryCharging20["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBatteryCharging20["size"];
}
interface RuxIconBatteryCharging20Events {
}
interface RuxIconBatteryCharging20Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBatteryCharging20 extends SvelteComponent {
    $$prop_def: RuxIconBatteryCharging20Props;
    $$events_def: RuxIconBatteryCharging20Events;
    $$slot_def: RuxIconBatteryCharging20Slots;
    $on<K extends keyof RuxIconBatteryCharging20Events>(type: K, callback: (e: RuxIconBatteryCharging20Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconBatteryCharging20Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBatteryCharging20Element | undefined;
}
export default RuxIconBatteryCharging20;
