import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLinkProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLink["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLink["size"];
}
interface RuxIconLinkEvents {
}
interface RuxIconLinkSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLink extends SvelteComponent {
    $$prop_def: RuxIconLinkProps;
    $$events_def: RuxIconLinkEvents;
    $$slot_def: RuxIconLinkSlots;
    $on<K extends keyof RuxIconLinkEvents>(type: K, callback: (e: RuxIconLinkEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLinkProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLinkElement | undefined;
}
export default RuxIconLink;
