import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLiveTvProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLiveTv["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLiveTv["size"];
}
interface RuxIconLiveTvEvents {
}
interface RuxIconLiveTvSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLiveTv extends SvelteComponent {
    $$prop_def: RuxIconLiveTvProps;
    $$events_def: RuxIconLiveTvEvents;
    $$slot_def: RuxIconLiveTvSlots;
    $on<K extends keyof RuxIconLiveTvEvents>(type: K, callback: (e: RuxIconLiveTvEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLiveTvProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLiveTvElement | undefined;
}
export default RuxIconLiveTv;
