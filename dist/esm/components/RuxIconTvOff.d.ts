import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTvOffProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTvOff["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTvOff["size"];
}
interface RuxIconTvOffEvents {
}
interface RuxIconTvOffSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTvOff extends SvelteComponent {
    $$prop_def: RuxIconTvOffProps;
    $$events_def: RuxIconTvOffEvents;
    $$slot_def: RuxIconTvOffSlots;
    $on<K extends keyof RuxIconTvOffEvents>(type: K, callback: (e: RuxIconTvOffEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTvOffProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTvOffElement | undefined;
}
export default RuxIconTvOff;
