import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPublishProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPublish["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPublish["size"];
}
interface RuxIconPublishEvents {
}
interface RuxIconPublishSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPublish extends SvelteComponent {
    $$prop_def: RuxIconPublishProps;
    $$events_def: RuxIconPublishEvents;
    $$slot_def: RuxIconPublishSlots;
    $on<K extends keyof RuxIconPublishEvents>(type: K, callback: (e: RuxIconPublishEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPublishProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPublishElement | undefined;
}
export default RuxIconPublish;
