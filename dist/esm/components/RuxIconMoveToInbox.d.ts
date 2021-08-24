import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMoveToInboxProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMoveToInbox["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMoveToInbox["size"];
}
interface RuxIconMoveToInboxEvents {
}
interface RuxIconMoveToInboxSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMoveToInbox extends SvelteComponent {
    $$prop_def: RuxIconMoveToInboxProps;
    $$events_def: RuxIconMoveToInboxEvents;
    $$slot_def: RuxIconMoveToInboxSlots;
    $on<K extends keyof RuxIconMoveToInboxEvents>(type: K, callback: (e: RuxIconMoveToInboxEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMoveToInboxProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMoveToInboxElement | undefined;
}
export default RuxIconMoveToInbox;
