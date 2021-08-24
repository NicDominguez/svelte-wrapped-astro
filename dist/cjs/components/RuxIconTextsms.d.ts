import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTextsmsProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTextsms["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTextsms["size"];
}
interface RuxIconTextsmsEvents {
}
interface RuxIconTextsmsSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTextsms extends SvelteComponent {
    $$prop_def: RuxIconTextsmsProps;
    $$events_def: RuxIconTextsmsEvents;
    $$slot_def: RuxIconTextsmsSlots;
    $on<K extends keyof RuxIconTextsmsEvents>(type: K, callback: (e: RuxIconTextsmsEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTextsmsProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTextsmsElement | undefined;
}
export default RuxIconTextsms;
