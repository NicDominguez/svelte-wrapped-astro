import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBatteryCharging50Props {
    /** The fill color for the icon */
    color?: Components.RuxIconBatteryCharging50["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBatteryCharging50["size"];
}
interface RuxIconBatteryCharging50Events {
}
interface RuxIconBatteryCharging50Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBatteryCharging50 extends SvelteComponent {
    $$prop_def: RuxIconBatteryCharging50Props;
    $$events_def: RuxIconBatteryCharging50Events;
    $$slot_def: RuxIconBatteryCharging50Slots;
    $on<K extends keyof RuxIconBatteryCharging50Events>(type: K, callback: (e: RuxIconBatteryCharging50Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconBatteryCharging50Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBatteryCharging50Element | undefined;
}
export default RuxIconBatteryCharging50;
