import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBatteryCharging60Props {
    /** The fill color for the icon */
    color?: Components.RuxIconBatteryCharging60["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBatteryCharging60["size"];
}
interface RuxIconBatteryCharging60Events {
}
interface RuxIconBatteryCharging60Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBatteryCharging60 extends SvelteComponent {
    $$prop_def: RuxIconBatteryCharging60Props;
    $$events_def: RuxIconBatteryCharging60Events;
    $$slot_def: RuxIconBatteryCharging60Slots;
    $on<K extends keyof RuxIconBatteryCharging60Events>(type: K, callback: (e: RuxIconBatteryCharging60Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconBatteryCharging60Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBatteryCharging60Element | undefined;
}
export default RuxIconBatteryCharging60;
