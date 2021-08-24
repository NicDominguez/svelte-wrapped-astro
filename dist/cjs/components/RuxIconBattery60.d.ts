import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBattery60Props {
    /** The fill color for the icon */
    color?: Components.RuxIconBattery60["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBattery60["size"];
}
interface RuxIconBattery60Events {
}
interface RuxIconBattery60Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBattery60 extends SvelteComponent {
    $$prop_def: RuxIconBattery60Props;
    $$events_def: RuxIconBattery60Events;
    $$slot_def: RuxIconBattery60Slots;
    $on<K extends keyof RuxIconBattery60Events>(type: K, callback: (e: RuxIconBattery60Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconBattery60Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBattery60Element | undefined;
}
export default RuxIconBattery60;
