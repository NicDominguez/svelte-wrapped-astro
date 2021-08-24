import { Components } from '@astrouxds/astro-web-components';
interface RuxIconInboxProps {
    /** The fill color for the icon */
    color?: Components.RuxIconInbox["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconInbox["size"];
}
interface RuxIconInboxEvents {
}
interface RuxIconInboxSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconInbox extends SvelteComponent {
    $$prop_def: RuxIconInboxProps;
    $$events_def: RuxIconInboxEvents;
    $$slot_def: RuxIconInboxSlots;
    $on<K extends keyof RuxIconInboxEvents>(type: K, callback: (e: RuxIconInboxEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconInboxProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconInboxElement | undefined;
}
export default RuxIconInbox;
