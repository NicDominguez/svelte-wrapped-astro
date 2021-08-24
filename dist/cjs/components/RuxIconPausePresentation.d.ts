import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPausePresentationProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPausePresentation["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPausePresentation["size"];
}
interface RuxIconPausePresentationEvents {
}
interface RuxIconPausePresentationSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPausePresentation extends SvelteComponent {
    $$prop_def: RuxIconPausePresentationProps;
    $$events_def: RuxIconPausePresentationEvents;
    $$slot_def: RuxIconPausePresentationSlots;
    $on<K extends keyof RuxIconPausePresentationEvents>(type: K, callback: (e: RuxIconPausePresentationEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPausePresentationProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPausePresentationElement | undefined;
}
export default RuxIconPausePresentation;
