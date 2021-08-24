import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTvProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTv["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTv["size"];
}
interface RuxIconTvEvents {
}
interface RuxIconTvSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTv extends SvelteComponent {
    $$prop_def: RuxIconTvProps;
    $$events_def: RuxIconTvEvents;
    $$slot_def: RuxIconTvSlots;
    $on<K extends keyof RuxIconTvEvents>(type: K, callback: (e: RuxIconTvEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTvProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTvElement | undefined;
}
export default RuxIconTv;
