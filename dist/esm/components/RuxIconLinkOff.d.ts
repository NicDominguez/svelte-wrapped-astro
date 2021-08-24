import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLinkOffProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLinkOff["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLinkOff["size"];
}
interface RuxIconLinkOffEvents {
}
interface RuxIconLinkOffSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLinkOff extends SvelteComponent {
    $$prop_def: RuxIconLinkOffProps;
    $$events_def: RuxIconLinkOffEvents;
    $$slot_def: RuxIconLinkOffSlots;
    $on<K extends keyof RuxIconLinkOffEvents>(type: K, callback: (e: RuxIconLinkOffEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLinkOffProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLinkOffElement | undefined;
}
export default RuxIconLinkOff;
