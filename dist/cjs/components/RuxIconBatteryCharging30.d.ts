import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBatteryCharging30Props {
    /** The fill color for the icon */
    color?: Components.RuxIconBatteryCharging30["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBatteryCharging30["size"];
}
interface RuxIconBatteryCharging30Events {
}
interface RuxIconBatteryCharging30Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBatteryCharging30 extends SvelteComponent {
    $$prop_def: RuxIconBatteryCharging30Props;
    $$events_def: RuxIconBatteryCharging30Events;
    $$slot_def: RuxIconBatteryCharging30Slots;
    $on<K extends keyof RuxIconBatteryCharging30Events>(type: K, callback: (e: RuxIconBatteryCharging30Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconBatteryCharging30Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBatteryCharging30Element | undefined;
}
export default RuxIconBatteryCharging30;
