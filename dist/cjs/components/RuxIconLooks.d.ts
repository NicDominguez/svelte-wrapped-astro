import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLooksProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLooks["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLooks["size"];
}
interface RuxIconLooksEvents {
}
interface RuxIconLooksSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLooks extends SvelteComponent {
    $$prop_def: RuxIconLooksProps;
    $$events_def: RuxIconLooksEvents;
    $$slot_def: RuxIconLooksSlots;
    $on<K extends keyof RuxIconLooksEvents>(type: K, callback: (e: RuxIconLooksEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLooksProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLooksElement | undefined;
}
export default RuxIconLooks;
