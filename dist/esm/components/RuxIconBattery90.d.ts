import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBattery90Props {
    /** The fill color for the icon */
    color?: Components.RuxIconBattery90["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBattery90["size"];
}
interface RuxIconBattery90Events {
}
interface RuxIconBattery90Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBattery90 extends SvelteComponent {
    $$prop_def: RuxIconBattery90Props;
    $$events_def: RuxIconBattery90Events;
    $$slot_def: RuxIconBattery90Slots;
    $on<K extends keyof RuxIconBattery90Events>(type: K, callback: (e: RuxIconBattery90Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconBattery90Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBattery90Element | undefined;
}
export default RuxIconBattery90;
