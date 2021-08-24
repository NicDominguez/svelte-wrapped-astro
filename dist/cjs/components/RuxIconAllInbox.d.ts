import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAllInboxProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAllInbox["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAllInbox["size"];
}
interface RuxIconAllInboxEvents {
}
interface RuxIconAllInboxSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAllInbox extends SvelteComponent {
    $$prop_def: RuxIconAllInboxProps;
    $$events_def: RuxIconAllInboxEvents;
    $$slot_def: RuxIconAllInboxSlots;
    $on<K extends keyof RuxIconAllInboxEvents>(type: K, callback: (e: RuxIconAllInboxEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAllInboxProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAllInboxElement | undefined;
}
export default RuxIconAllInbox;
