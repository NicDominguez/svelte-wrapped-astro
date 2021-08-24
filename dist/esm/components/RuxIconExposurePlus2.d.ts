import { Components } from '@astrouxds/astro-web-components';
interface RuxIconExposurePlus2Props {
    /** The fill color for the icon */
    color?: Components.RuxIconExposurePlus2["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconExposurePlus2["size"];
}
interface RuxIconExposurePlus2Events {
}
interface RuxIconExposurePlus2Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconExposurePlus2 extends SvelteComponent {
    $$prop_def: RuxIconExposurePlus2Props;
    $$events_def: RuxIconExposurePlus2Events;
    $$slot_def: RuxIconExposurePlus2Slots;
    $on<K extends keyof RuxIconExposurePlus2Events>(type: K, callback: (e: RuxIconExposurePlus2Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconExposurePlus2Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconExposurePlus2Element | undefined;
}
export default RuxIconExposurePlus2;
