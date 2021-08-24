import { Components } from '@astrouxds/astro-web-components';
interface RuxIconRoomServiceProps {
    /** The fill color for the icon */
    color?: Components.RuxIconRoomService["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconRoomService["size"];
}
interface RuxIconRoomServiceEvents {
}
interface RuxIconRoomServiceSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconRoomService extends SvelteComponent {
    $$prop_def: RuxIconRoomServiceProps;
    $$events_def: RuxIconRoomServiceEvents;
    $$slot_def: RuxIconRoomServiceSlots;
    $on<K extends keyof RuxIconRoomServiceEvents>(type: K, callback: (e: RuxIconRoomServiceEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconRoomServiceProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconRoomServiceElement | undefined;
}
export default RuxIconRoomService;
