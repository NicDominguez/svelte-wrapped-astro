import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCancelPresentationProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCancelPresentation["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCancelPresentation["size"];
}
interface RuxIconCancelPresentationEvents {
}
interface RuxIconCancelPresentationSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCancelPresentation extends SvelteComponent {
    $$prop_def: RuxIconCancelPresentationProps;
    $$events_def: RuxIconCancelPresentationEvents;
    $$slot_def: RuxIconCancelPresentationSlots;
    $on<K extends keyof RuxIconCancelPresentationEvents>(type: K, callback: (e: RuxIconCancelPresentationEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCancelPresentationProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCancelPresentationElement | undefined;
}
export default RuxIconCancelPresentation;
