import { Components } from '@astrouxds/astro-web-components';
interface RuxIconRssFeedProps {
    /** The fill color for the icon */
    color?: Components.RuxIconRssFeed["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconRssFeed["size"];
}
interface RuxIconRssFeedEvents {
}
interface RuxIconRssFeedSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconRssFeed extends SvelteComponent {
    $$prop_def: RuxIconRssFeedProps;
    $$events_def: RuxIconRssFeedEvents;
    $$slot_def: RuxIconRssFeedSlots;
    $on<K extends keyof RuxIconRssFeedEvents>(type: K, callback: (e: RuxIconRssFeedEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconRssFeedProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconRssFeedElement | undefined;
}
export default RuxIconRssFeed;
