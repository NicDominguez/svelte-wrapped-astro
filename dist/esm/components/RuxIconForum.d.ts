import { Components } from '@astrouxds/astro-web-components';
interface RuxIconForumProps {
    /** The fill color for the icon */
    color?: Components.RuxIconForum["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconForum["size"];
}
interface RuxIconForumEvents {
}
interface RuxIconForumSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconForum extends SvelteComponent {
    $$prop_def: RuxIconForumProps;
    $$events_def: RuxIconForumEvents;
    $$slot_def: RuxIconForumSlots;
    $on<K extends keyof RuxIconForumEvents>(type: K, callback: (e: RuxIconForumEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconForumProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconForumElement | undefined;
}
export default RuxIconForum;
