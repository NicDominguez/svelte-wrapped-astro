import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMarkunreadMailboxProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMarkunreadMailbox["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMarkunreadMailbox["size"];
}
interface RuxIconMarkunreadMailboxEvents {
}
interface RuxIconMarkunreadMailboxSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMarkunreadMailbox extends SvelteComponent {
    $$prop_def: RuxIconMarkunreadMailboxProps;
    $$events_def: RuxIconMarkunreadMailboxEvents;
    $$slot_def: RuxIconMarkunreadMailboxSlots;
    $on<K extends keyof RuxIconMarkunreadMailboxEvents>(type: K, callback: (e: RuxIconMarkunreadMailboxEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMarkunreadMailboxProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMarkunreadMailboxElement | undefined;
}
export default RuxIconMarkunreadMailbox;
