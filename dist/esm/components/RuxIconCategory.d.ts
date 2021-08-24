import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCategoryProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCategory["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCategory["size"];
}
interface RuxIconCategoryEvents {
}
interface RuxIconCategorySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCategory extends SvelteComponent {
    $$prop_def: RuxIconCategoryProps;
    $$events_def: RuxIconCategoryEvents;
    $$slot_def: RuxIconCategorySlots;
    $on<K extends keyof RuxIconCategoryEvents>(type: K, callback: (e: RuxIconCategoryEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCategoryProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCategoryElement | undefined;
}
export default RuxIconCategory;
