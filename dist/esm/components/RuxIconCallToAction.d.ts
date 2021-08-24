import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCallToActionProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCallToAction["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCallToAction["size"];
}
interface RuxIconCallToActionEvents {
}
interface RuxIconCallToActionSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCallToAction extends SvelteComponent {
    $$prop_def: RuxIconCallToActionProps;
    $$events_def: RuxIconCallToActionEvents;
    $$slot_def: RuxIconCallToActionSlots;
    $on<K extends keyof RuxIconCallToActionEvents>(type: K, callback: (e: RuxIconCallToActionEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCallToActionProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCallToActionElement | undefined;
}
export default RuxIconCallToAction;
