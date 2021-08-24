import { Components } from '@astrouxds/astro-web-components';
interface RuxIconNatureProps {
    /** The fill color for the icon */
    color?: Components.RuxIconNature["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconNature["size"];
}
interface RuxIconNatureEvents {
}
interface RuxIconNatureSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconNature extends SvelteComponent {
    $$prop_def: RuxIconNatureProps;
    $$events_def: RuxIconNatureEvents;
    $$slot_def: RuxIconNatureSlots;
    $on<K extends keyof RuxIconNatureEvents>(type: K, callback: (e: RuxIconNatureEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconNatureProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconNatureElement | undefined;
}
export default RuxIconNature;
