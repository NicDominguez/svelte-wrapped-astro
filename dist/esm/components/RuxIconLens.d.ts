import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLensProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLens["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLens["size"];
}
interface RuxIconLensEvents {
}
interface RuxIconLensSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLens extends SvelteComponent {
    $$prop_def: RuxIconLensProps;
    $$events_def: RuxIconLensEvents;
    $$slot_def: RuxIconLensSlots;
    $on<K extends keyof RuxIconLensEvents>(type: K, callback: (e: RuxIconLensEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLensProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLensElement | undefined;
}
export default RuxIconLens;
