import { Components } from '@astrouxds/astro-web-components';
interface RuxIconRoomProps {
    /** The fill color for the icon */
    color?: Components.RuxIconRoom["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconRoom["size"];
}
interface RuxIconRoomEvents {
}
interface RuxIconRoomSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconRoom extends SvelteComponent {
    $$prop_def: RuxIconRoomProps;
    $$events_def: RuxIconRoomEvents;
    $$slot_def: RuxIconRoomSlots;
    $on<K extends keyof RuxIconRoomEvents>(type: K, callback: (e: RuxIconRoomEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconRoomProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconRoomElement | undefined;
}
export default RuxIconRoom;
