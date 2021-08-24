import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTouchAppProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTouchApp["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTouchApp["size"];
}
interface RuxIconTouchAppEvents {
}
interface RuxIconTouchAppSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTouchApp extends SvelteComponent {
    $$prop_def: RuxIconTouchAppProps;
    $$events_def: RuxIconTouchAppEvents;
    $$slot_def: RuxIconTouchAppSlots;
    $on<K extends keyof RuxIconTouchAppEvents>(type: K, callback: (e: RuxIconTouchAppEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTouchAppProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTouchAppElement | undefined;
}
export default RuxIconTouchApp;
