import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBattery80Props {
    /** The fill color for the icon */
    color?: Components.RuxIconBattery80["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBattery80["size"];
}
interface RuxIconBattery80Events {
}
interface RuxIconBattery80Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBattery80 extends SvelteComponent {
    $$prop_def: RuxIconBattery80Props;
    $$events_def: RuxIconBattery80Events;
    $$slot_def: RuxIconBattery80Slots;
    $on<K extends keyof RuxIconBattery80Events>(type: K, callback: (e: RuxIconBattery80Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconBattery80Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBattery80Element | undefined;
}
export default RuxIconBattery80;
