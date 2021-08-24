import { Components } from '@astrouxds/astro-web-components';
interface RuxIconNoMeetingRoomProps {
    /** The fill color for the icon */
    color?: Components.RuxIconNoMeetingRoom["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconNoMeetingRoom["size"];
}
interface RuxIconNoMeetingRoomEvents {
}
interface RuxIconNoMeetingRoomSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconNoMeetingRoom extends SvelteComponent {
    $$prop_def: RuxIconNoMeetingRoomProps;
    $$events_def: RuxIconNoMeetingRoomEvents;
    $$slot_def: RuxIconNoMeetingRoomSlots;
    $on<K extends keyof RuxIconNoMeetingRoomEvents>(type: K, callback: (e: RuxIconNoMeetingRoomEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconNoMeetingRoomProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconNoMeetingRoomElement | undefined;
}
export default RuxIconNoMeetingRoom;
