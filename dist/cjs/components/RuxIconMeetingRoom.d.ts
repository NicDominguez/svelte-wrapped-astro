import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMeetingRoomProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMeetingRoom["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMeetingRoom["size"];
}
interface RuxIconMeetingRoomEvents {
}
interface RuxIconMeetingRoomSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMeetingRoom extends SvelteComponent {
    $$prop_def: RuxIconMeetingRoomProps;
    $$events_def: RuxIconMeetingRoomEvents;
    $$slot_def: RuxIconMeetingRoomSlots;
    $on<K extends keyof RuxIconMeetingRoomEvents>(type: K, callback: (e: RuxIconMeetingRoomEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMeetingRoomProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMeetingRoomElement | undefined;
}
export default RuxIconMeetingRoom;
