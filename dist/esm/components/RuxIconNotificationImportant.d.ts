import { Components } from '@astrouxds/astro-web-components';
interface RuxIconNotificationImportantProps {
    /** The fill color for the icon */
    color?: Components.RuxIconNotificationImportant["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconNotificationImportant["size"];
}
interface RuxIconNotificationImportantEvents {
}
interface RuxIconNotificationImportantSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconNotificationImportant extends SvelteComponent {
    $$prop_def: RuxIconNotificationImportantProps;
    $$events_def: RuxIconNotificationImportantEvents;
    $$slot_def: RuxIconNotificationImportantSlots;
    $on<K extends keyof RuxIconNotificationImportantEvents>(type: K, callback: (e: RuxIconNotificationImportantEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconNotificationImportantProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconNotificationImportantElement | undefined;
}
export default RuxIconNotificationImportant;
