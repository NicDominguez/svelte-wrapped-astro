import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBatteryCharging80Props {
    /** The fill color for the icon */
    color?: Components.RuxIconBatteryCharging80["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBatteryCharging80["size"];
}
interface RuxIconBatteryCharging80Events {
}
interface RuxIconBatteryCharging80Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBatteryCharging80 extends SvelteComponent {
    $$prop_def: RuxIconBatteryCharging80Props;
    $$events_def: RuxIconBatteryCharging80Events;
    $$slot_def: RuxIconBatteryCharging80Slots;
    $on<K extends keyof RuxIconBatteryCharging80Events>(type: K, callback: (e: RuxIconBatteryCharging80Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconBatteryCharging80Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBatteryCharging80Element | undefined;
}
export default RuxIconBatteryCharging80;
