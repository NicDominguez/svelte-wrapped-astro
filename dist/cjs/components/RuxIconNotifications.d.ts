import { Components } from '@astrouxds/astro-web-components';
interface RuxIconNotificationsProps {
    /** The fill color for the icon */
    color?: Components.RuxIconNotifications["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconNotifications["size"];
}
interface RuxIconNotificationsEvents {
}
interface RuxIconNotificationsSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconNotifications extends SvelteComponent {
    $$prop_def: RuxIconNotificationsProps;
    $$events_def: RuxIconNotificationsEvents;
    $$slot_def: RuxIconNotificationsSlots;
    $on<K extends keyof RuxIconNotificationsEvents>(type: K, callback: (e: RuxIconNotificationsEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconNotificationsProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconNotificationsElement | undefined;
}
export default RuxIconNotifications;
