import { Components } from '@astrouxds/astro-web-components';
interface RuxIconToysProps {
    /** The fill color for the icon */
    color?: Components.RuxIconToys["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconToys["size"];
}
interface RuxIconToysEvents {
}
interface RuxIconToysSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconToys extends SvelteComponent {
    $$prop_def: RuxIconToysProps;
    $$events_def: RuxIconToysEvents;
    $$slot_def: RuxIconToysSlots;
    $on<K extends keyof RuxIconToysEvents>(type: K, callback: (e: RuxIconToysEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconToysProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconToysElement | undefined;
}
export default RuxIconToys;
