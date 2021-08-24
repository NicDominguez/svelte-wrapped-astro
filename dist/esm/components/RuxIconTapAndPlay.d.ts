import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTapAndPlayProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTapAndPlay["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTapAndPlay["size"];
}
interface RuxIconTapAndPlayEvents {
}
interface RuxIconTapAndPlaySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTapAndPlay extends SvelteComponent {
    $$prop_def: RuxIconTapAndPlayProps;
    $$events_def: RuxIconTapAndPlayEvents;
    $$slot_def: RuxIconTapAndPlaySlots;
    $on<K extends keyof RuxIconTapAndPlayEvents>(type: K, callback: (e: RuxIconTapAndPlayEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTapAndPlayProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTapAndPlayElement | undefined;
}
export default RuxIconTapAndPlay;
