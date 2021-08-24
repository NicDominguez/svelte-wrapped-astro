import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBattery30Props {
    /** The fill color for the icon */
    color?: Components.RuxIconBattery30["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBattery30["size"];
}
interface RuxIconBattery30Events {
}
interface RuxIconBattery30Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBattery30 extends SvelteComponent {
    $$prop_def: RuxIconBattery30Props;
    $$events_def: RuxIconBattery30Events;
    $$slot_def: RuxIconBattery30Slots;
    $on<K extends keyof RuxIconBattery30Events>(type: K, callback: (e: RuxIconBattery30Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconBattery30Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBattery30Element | undefined;
}
export default RuxIconBattery30;
