import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBattery20Props {
    /** The fill color for the icon */
    color?: Components.RuxIconBattery20["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBattery20["size"];
}
interface RuxIconBattery20Events {
}
interface RuxIconBattery20Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBattery20 extends SvelteComponent {
    $$prop_def: RuxIconBattery20Props;
    $$events_def: RuxIconBattery20Events;
    $$slot_def: RuxIconBattery20Slots;
    $on<K extends keyof RuxIconBattery20Events>(type: K, callback: (e: RuxIconBattery20Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconBattery20Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBattery20Element | undefined;
}
export default RuxIconBattery20;
