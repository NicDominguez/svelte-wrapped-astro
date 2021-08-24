import { Components } from '@astrouxds/astro-web-components';
interface RuxIconExposurePlus1Props {
    /** The fill color for the icon */
    color?: Components.RuxIconExposurePlus1["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconExposurePlus1["size"];
}
interface RuxIconExposurePlus1Events {
}
interface RuxIconExposurePlus1Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconExposurePlus1 extends SvelteComponent {
    $$prop_def: RuxIconExposurePlus1Props;
    $$events_def: RuxIconExposurePlus1Events;
    $$slot_def: RuxIconExposurePlus1Slots;
    $on<K extends keyof RuxIconExposurePlus1Events>(type: K, callback: (e: RuxIconExposurePlus1Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconExposurePlus1Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconExposurePlus1Element | undefined;
}
export default RuxIconExposurePlus1;
