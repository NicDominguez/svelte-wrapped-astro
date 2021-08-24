import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAnnouncementProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAnnouncement["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAnnouncement["size"];
}
interface RuxIconAnnouncementEvents {
}
interface RuxIconAnnouncementSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAnnouncement extends SvelteComponent {
    $$prop_def: RuxIconAnnouncementProps;
    $$events_def: RuxIconAnnouncementEvents;
    $$slot_def: RuxIconAnnouncementSlots;
    $on<K extends keyof RuxIconAnnouncementEvents>(type: K, callback: (e: RuxIconAnnouncementEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAnnouncementProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAnnouncementElement | undefined;
}
export default RuxIconAnnouncement;
