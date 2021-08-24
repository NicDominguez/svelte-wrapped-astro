import { Components } from '@astrouxds/astro-web-components';
interface RuxIconNotificationsPausedProps {
    /** The fill color for the icon */
    color?: Components.RuxIconNotificationsPaused["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconNotificationsPaused["size"];
}
interface RuxIconNotificationsPausedEvents {
}
interface RuxIconNotificationsPausedSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconNotificationsPaused extends SvelteComponent {
    $$prop_def: RuxIconNotificationsPausedProps;
    $$events_def: RuxIconNotificationsPausedEvents;
    $$slot_def: RuxIconNotificationsPausedSlots;
    $on<K extends keyof RuxIconNotificationsPausedEvents>(type: K, callback: (e: RuxIconNotificationsPausedEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconNotificationsPausedProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconNotificationsPausedElement | undefined;
}
export default RuxIconNotificationsPaused;
