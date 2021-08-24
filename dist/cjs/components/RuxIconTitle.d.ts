import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTitleProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTitle["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTitle["size"];
}
interface RuxIconTitleEvents {
}
interface RuxIconTitleSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTitle extends SvelteComponent {
    $$prop_def: RuxIconTitleProps;
    $$events_def: RuxIconTitleEvents;
    $$slot_def: RuxIconTitleSlots;
    $on<K extends keyof RuxIconTitleEvents>(type: K, callback: (e: RuxIconTitleEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTitleProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTitleElement | undefined;
}
export default RuxIconTitle;
