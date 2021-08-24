import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTollProps {
    /** The fill color for the icon */
    color?: Components.RuxIconToll["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconToll["size"];
}
interface RuxIconTollEvents {
}
interface RuxIconTollSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconToll extends SvelteComponent {
    $$prop_def: RuxIconTollProps;
    $$events_def: RuxIconTollEvents;
    $$slot_def: RuxIconTollSlots;
    $on<K extends keyof RuxIconTollEvents>(type: K, callback: (e: RuxIconTollEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTollProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTollElement | undefined;
}
export default RuxIconToll;
