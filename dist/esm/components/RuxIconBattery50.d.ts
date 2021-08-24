import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBattery50Props {
    /** The fill color for the icon */
    color?: Components.RuxIconBattery50["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBattery50["size"];
}
interface RuxIconBattery50Events {
}
interface RuxIconBattery50Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBattery50 extends SvelteComponent {
    $$prop_def: RuxIconBattery50Props;
    $$events_def: RuxIconBattery50Events;
    $$slot_def: RuxIconBattery50Slots;
    $on<K extends keyof RuxIconBattery50Events>(type: K, callback: (e: RuxIconBattery50Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconBattery50Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBattery50Element | undefined;
}
export default RuxIconBattery50;
