import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSmokingRoomsProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSmokingRooms["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSmokingRooms["size"];
}
interface RuxIconSmokingRoomsEvents {
}
interface RuxIconSmokingRoomsSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSmokingRooms extends SvelteComponent {
    $$prop_def: RuxIconSmokingRoomsProps;
    $$events_def: RuxIconSmokingRoomsEvents;
    $$slot_def: RuxIconSmokingRoomsSlots;
    $on<K extends keyof RuxIconSmokingRoomsEvents>(type: K, callback: (e: RuxIconSmokingRoomsEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSmokingRoomsProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSmokingRoomsElement | undefined;
}
export default RuxIconSmokingRooms;
