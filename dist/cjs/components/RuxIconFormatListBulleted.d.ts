import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFormatListBulletedProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFormatListBulleted["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFormatListBulleted["size"];
}
interface RuxIconFormatListBulletedEvents {
}
interface RuxIconFormatListBulletedSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFormatListBulleted extends SvelteComponent {
    $$prop_def: RuxIconFormatListBulletedProps;
    $$events_def: RuxIconFormatListBulletedEvents;
    $$slot_def: RuxIconFormatListBulletedSlots;
    $on<K extends keyof RuxIconFormatListBulletedEvents>(type: K, callback: (e: RuxIconFormatListBulletedEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFormatListBulletedProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFormatListBulletedElement | undefined;
}
export default RuxIconFormatListBulleted;
